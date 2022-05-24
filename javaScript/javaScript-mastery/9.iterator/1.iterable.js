// Iterable 하다는건! 순회가 가능하다는 거지!
// [Symbol.iterator](): Iterator;
// 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는것은
// 순회 간으한 객체이다 라는걸 알 수 있음
// 순회가 가능하면 무엇을 할 수 있나? for..of, spread 를 사용 가능하다!
const array = [1, 2, 3];
for (const item of array.entries()) {
  console.log(item);
}

const obj = { 0: 1, 1: 2 }; // 오브젝트 안에는 symbol iterator라는 함수의 정의가 없기에 iteration 규격을 따라가지 않는다. for of 사용x 대신 for in
for (const item in obj) {
  // for in 은 key를 출력
  console.log(item); // obj is not iterable
}

const iterator = array.values(); // 반환된 iterator를 가지고 next를 호출하면 계속 그 다음값이 반환된다.
// console.log(iterator.next().value); // 1
// console.log(iterator.next().value); // 2
// console.log(iterator.next().value); // 3
// console.log(iterator.next()); // { value: undefined, done: true } done이 true면 반복이 끝났다라는 의미

while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}
