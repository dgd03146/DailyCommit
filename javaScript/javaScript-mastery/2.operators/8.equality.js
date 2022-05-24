// 동등 비교 관계 연산자 (Equality operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름
console.log(2 == 2); // true
console.log(2 != 2); // false
console.log(2 != 3); // true
console.log(2 == 3); // false
console.log(2 == '2'); // true
console.log(2 === '2'); // false
console.log(true == 1); // true
console.log(true === 1); // false
console.log(false == 0); // true
console.log(false === 0); // false

const obj1 = {
  name: 'js'
}; // 0x111
const obj2 = {
  name: 'js'
}; // 0x112

console.log(obj1 == obj2); // false 서로 다른 메모리 주소를 가지고 있으므로 다르다.
console.log(obj1 === obj2); // false
console.log(obj1.name == obj2.name); // true
console.log(obj1.name === obj2.name); /// true

let obj3 = obj2;
console.log(obj3 == obj2); // true obj3과 obj2는 동일한 메모리 주소를 가지고 있기 때문에 true이다.
console.log(obj3 === obj2); // true
