import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { SearchBarInput } from "./SearchBar";

const User = ({ user }) => {
  return (
    <div key={user.id} className="flex flex-col items-center m-4">
      <img src={user.image} className="h-24" />
      <div className="text-xl font-semibold mt-2">
        {user.firstName} {user.lastName}
      </div>
      <span className="text-lg text-gray-400 font-bold">
        {user.id}
      </span>
    </div>
  );
};

export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [value]);

  return debouncedValue;
}

export function Debounce() {
  const [value, setValue] = useState("");
  const [users, setUsers] = useState([]);

  const debouncedValue = useDebounce(value, 500);

  const searchUsers = async () => {
    const newUsersResponse = await axios.get(
      `https://dummyjson.com/users/search?q=${value}`
    );

    if (newUsersResponse && newUsersResponse.data)
      setUsers(newUsersResponse.data.users);
  };

  const handleSearchInputChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setValue(value);
  };

  useEffect(() => {
    searchUsers("");
  }, []);

  // useEffect(() => {
  //   searchUsers(value);
  // }, [value]);

  useEffect(() => {
    console.log("Value: ", debouncedValue);
    searchUsers(value);
  }, [debouncedValue]);


  //외부포커스 이벤트 처리예
  const inputRef = useRef(null);
  const focus = () => {
    // alert("Focusing...");
    inputRef.current?.focus();
    // console.log(inputRef.current);
  };
  const select = () => {
    inputRef.current?.select();
  };

  return (
    <div className="flex flex-col w-full items-center p-12">
      <div className="flex justify-center w-1/3 mb-2">
        <SearchBarInput
          value={value}
          onChange={handleSearchInputChange}
          inputRef={inputRef} 
        />
      </div>
      <div className="flex justify-center space-x-4">
        <button
          className="mt-6 text-xl font-bold bg-orange-500 py-2 px-6 rounded-lg"
          onClick={focus}
        >
          <p className="text-white text-sm">Focus</p>
        </button>
        <button
          className="mt-6 text-xl font-bold bg-blue-500 py-2 px-6 rounded-lg"
          onClick={select}
        >
          <p className="text-white text-sm">Select All</p>
        </button>
      </div>
      <h3 className="font-bold text-3xl">Found Users</h3>
      <div className="flex flex-wrap items-center justify-center w-full">
        {users.map((user, idx) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}