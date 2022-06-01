'use strict'; // 파일 제일 위에서 사용하는 것이 좋다.
// 엄격 모드 strict mode
// 리액트와 같은 프레임워크 사용시 기본적으로 엄격 모드임

//var x = 1;
//delete x; 안됨

function add(x) {
  var a = 2;
  b = a + x; // strict 모드를 사용하면 키워드를 생략할 수 없다.
  console.log(this); // strict 모드를 사용하면 함수 내에서 this를 출력하면 undefined가 나옴
}
add(1);

const array = [1, 2, 3];
for (num of array) {
  // strict 모드를 사용하면 num을 let이나 const 같은 키워드를 통해서 변수를 선언해야한다.
  console.log(num);
}
