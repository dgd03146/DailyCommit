// let 재할당이 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello';
// text = 'hi' error 발생 이렇게 하면 안됨!;

// 1. 상수
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎'
};
// apple = {};
console.log(apple);
apple.name = 'orange';
console.log(apple); // apple의 name이 orange로 바뀌어져서 출력된다.
apple.display = '🥭';
console.log(apple);
