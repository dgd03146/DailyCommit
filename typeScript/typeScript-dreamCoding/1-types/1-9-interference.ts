/**
 * Type Interference
 */
let text = 'hello'; // 따로 타입을 명시하지 않아도 에러가 발생하지 않는다.
function print(message = 'hello') {
  // 함수의 인자에 타입을 명시하지 않으면 any
  console.log(message);
}
print('hello');
print(1); // 함수의 인자가 문자만 됨

function add(x: number, y: number) {
  return x + y; // 자동으로 타입이 number로 추론됨
}
const result = add(1, 2); // add라는 함수는 number를 리턴하기 때문에 result도 자동으로 숫자타입으로 결정이 되었다.
