// 함수 선언문 function name() {}
// 함수 표현식 const name = function () {}

let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

// 화살표 함수 const name = () => {}
add = (a, b) => {
  return a + b;
};
console.log(add(1, 2));

// add = (a,b) => a+b; 값만 표현하면 return과 괄호 생략 가능

// 생성자 함수 const object = new Function();

// IIFE (Immediately-Invoked Function Expressions)
(function run() {
  console.log('😁');
})();
