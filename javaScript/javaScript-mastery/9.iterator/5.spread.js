// Spread 연산자, 전개구문
// 모든 Iterable은 Spread 될 수 있다
// 순회가 가능한 모든 것들은 촤르르르륵 펼쳐 질 수 있다.
// func(...iterable)
// [...iterable]
// { ...obj }
// EcmaScript 2018
function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(...nums)); // 6

// Rest parameters
function sum(first, second, ...nums) {
  console.log(nums);
}
sum(1, 2, 0, 1, 2, 4);

// Array concat
const fruits1 = ['🍌', '🍓', '🍇', '🍓'];
const furits2 = ['🍎', '🥭', '🍍', '🍌', '🍒'];
let arr = fruits1.concat(furits2);
console.log(arr); // [ '🍌', '🍓', '🍇', '🍓', '🍎', '🥭' , '🍍', '🍌', '🍒']
arr = [...fruits1, '🍏', ...furits2];
console.log(arr); // ['🍌', '🍓', '🍇', '🍓', '🍏', '🍎', '🥭' , '🍍', '🍌', '🍒']

// Object
const ellie = { name: 'Ellie', age: 20, home: { address: 'home' } }; // home의 object는 shallow copy가 된다.
const updated = {
  ...ellie,
  job: 'web developer'
};
console.log(updated); // { name: 'Ellie', age: 20, job: 'web developer' }
ellie.home.name = 'JEONG';
console.log(updated);
console.log(ellie);
