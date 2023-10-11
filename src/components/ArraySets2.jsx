import React from 'react'

function ArraySets2() {

  const arrayA = [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:8}]
  const arrayB = [{id:3},{id:4},{id:5},{id:6},{id:7},{id:1}]
  
  // 중복제거
  const arrayToSet = (array) => { // get unique values
    return array.filter((value, index) => array.indexOf(value) === index);
  }
  
  // 합집합은 item.id등의 키값을 비교해서 없으면 추가하는 부분이 필요. 
  const union = (first, second) => { // first: set, second: set
    const union = [...first]; 
    // console.log('union sub >>',union);
    second.forEach((value) => { if (!union.some(i => i.id === value.id)) union.push(value); }) 
    // 없을 때에만 추가 해준다. (합집합 중복 방지)
    return union;
  }
  
  // 교집합. 첫번재 배열의 값을 두번째 배열에 들어있는지 확인.. 둘중 큰배열의 필터링이 필요.. 적은쪽이면?? 부족하다.
  // 베열을 아무거나 해도 되네..
  const intersect = function(first, second) { // first: set, second: set
    // return first.filter(value => second.includes(value)); // 둘 다 있으면 교집합
    // return first.filter(value => second.some(i => i.id === value.id)); // 둘 다 있으면 교집합
    return second.filter(value => first.some(i => i.id === value.id)); // 둘 다 있으면 교집합
  }
  
  // 차집합
  const complement = function(first, second) { // first: set, second: set
    // return first.filter(value => !second.includes(value)); // 중복되는 것 제거하면 차집합
    return first.filter(value => !second.some(i => i.id === value.id)); // 중복되는 것 제거하면 차집합
  }
  
  
  const setA = arrayToSet(arrayA);
  const setB = arrayToSet(arrayB);
  
  const unionOfTwoSets = union(setA, setB);
  const intersection = intersect(setA, setB);
  const difference1 = complement(setA, setB);
  const difference2 = complement(setB, setA);
  const symmetricDifference = union(difference1, difference2);
  
  const isSuperSet = function (superset, subset) { // check if left set(superset) is a superset of right set(subset)
    for (let element of subset) if (!superset.includes(element)) false; // 한 번이라도 superset으로 들어온 집합이 subset으로 들어온 집합의 값을 가지고 있지 않다면 => false 
    // 배열이기 때문에 includes 메소드 사용
    return true; 
  }

  return (
    <div>
      합집합 : {console.log('unionOfTwoSets >>', union(setA,setA), unionOfTwoSets)}
      <br />
      교집합 : {console.log('intersection >> ',intersection)}
      <br />
      차집합 : {console.log('difference1 >> ',difference1)}
      <br />
      {/* 합집합 - 차집합 : {symmetricDifference} */}
    </div>
  )
}

export default ArraySets2