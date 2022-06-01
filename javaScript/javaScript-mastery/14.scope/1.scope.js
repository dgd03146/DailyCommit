// 코드 블럭: { }, if() { }, for() { }, function() {}
// 블럭 외부에서는 블럭 내부의 변수를 참조할 수 ❌
{
  const a = 'a';
  console.log(a); // a가 정상적으로 출력됨
}
console.log(a); // app이 crash 됨. 블럭 안에서 선언된 변수는 외부에서 접근할 수 없다.
const b = 'b';

// 함수 외부에서는 함수 내부의 변수를 참조 ❌
function print() {
  const message = 'Hello World';
  console.log(message);
}
console.log(message); // message에 접근할 수 없다.

// 함수 외부에서는 함수의 매개변수를 참조 ❌
function sum(a, b) {
  console.log(a, b);
}
console.log(a, b);
