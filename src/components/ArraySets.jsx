import React from 'react'

function ArraySets() {
  // setA = set([1, 2, 3, 4, 5, 6, 1, 2, 3]) # {1, 2, 3, 4, 5, 6}
  // setB = set([1,2,3,7,7,3,3,3,3,3,3,3,2,2,2,2,2]) # {1, 2, 3, 7}
  
  // union = setA | setB # {1, 2, 3, 4, 5, 6, 7} 합집합도 고유한 값들만 가지고 있다.
  // intersect = setA & setB # {1, 2, 3} 두 집합에 모두 있는 값들
  // complement = setA - setB # {4, 5, 6}  setB에도 있는 값들을 setA 에서 뺀 것 (setA - (setA&setB)): setA - 교집합
  
  // const setA = new Set([1,2,3,4,5,6,7,8]); // array => set 으로 변환 (알아서 중복제거 됨)
  // const setB = new Set([3,4,5,6,7]);

  const setA = new Set([{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8}]);
  const setB = new Set([{id:3},{id:4},{id:5},{id:6},{id:7}]);

  const union = new Set([...setA, ...setB]); // set => array spread syntax 사용
  const intersection = new Set([...setA].filter(x => setB.has(x))); // 둘 다 있는 것들을 솎아낸다.
  const difference1 = new Set([...setA].filter(x => !setB.has(x))); // set1 - set2
  const difference2 = new Set([...setB].filter(x => !setA.has(x))); // set2 - set1
  const symmetricDifference = new Set([...difference1, ...difference2]); // union - intersection

  const isSuperSet = function (superset, subset) { // check if left set(superset) is a superset of right set(subset)
    for (let element of subset) if (!superset.has(element)) false; // 한 번이라도 superset으로 들어온 집합이 subset으로 들어온 집합의 값을 가지고 있지 않다면 => false 
    return true;
  }

  return (
    <div>
      합집합 : {console.log(union)}
      <br />
      교집합 : {console.log(intersection)}
      <br />
      {/* 차집합 : {difference1} */}
      <br />
      {/* 합집합 - 차집합 : {symmetricDifference} */}
    </div>
  )
}

export default ArraySets