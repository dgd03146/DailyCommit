// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]
function replace(array, from, to) {
  const replaced = array.map((item) => (item === from ? to : from));
  return replaced;
}
const fruits = ['🍌', '🍓', '🍇', '🍓'];
console.log(replace(fruits, '🍓', '🥝'));

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
function count(array, fruit) {
  let count = 0;
  array.forEach((item) => (item === fruit ? count++ : count));
  return count;
}
const fruits2 = ['🍌', '🥝', '🍇', '🥝'];
const fruit = '🥝';
console.log(count(fruits2, fruit));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]
function match(input, search) {
  const newArr = input.filter((item) => search.includes(item));
  return newArr;
}
const fruits3 = ['🍌', '🥝', '🍇'];
const fruits4 = ['🍌', '🍓', '🍇', '🍓'];
console.log(match(fruits3, fruits4));

// 퀴즈 4
// 5이상(보다 큰)의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];
function average(array) {
  let count = 0;
  const result = nums.reduce(
    (sum, val) => (val > 5 ? (count++, (sum += val)) : sum),
    0
  );
  return result / count;
}
const result2 = nums //
  .filter((num) => num > 5)
  .reduce((avg, num, _, array) => avg + num / array.length, 0);

console.log(average(nums));
console.log(result2);
