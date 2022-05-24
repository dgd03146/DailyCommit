const map = new Map([
  ['key1', '🍎'],
  ['key2', ['🍏']]
]);
console.log(map); // Map(2) { 'key1' => '🍎', 'key2' => [ '🍏' ] }

// 사이즈 확인
console.log(map.size);

// 존재하는지 확인
console.log(map.has('key1')); // true
console.log(map.has('key2')); // true

// 순회
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// 찾기
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key3'));

// 추가
map.set('key3', '🍏');
console.log(map); // Map(3) { 'key1' => '🍎', 'key2' => [ '🍏' ], 'key3' => '🍏' }

// 삭제
map.delete('key3');
console.log(map);

// 전부삭제
map.clear();
console.log(map);

// 오브젝트와의 큰 차이점?
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, decription: '맛있는우유' };
const obj = {
  [key]: milk
};
console.log(obj); // { '[object Object]': { name: 'milk', price: 10, decription: '맛있는우유' } }
const map2 = new Map([[key, milk]]);
console.log(map2); // Map(1) { { name: 'milk', price: 10 } => { name: 'milk', price: 10, decription: '맛있는우유' }}
console.log(obj[key]); // { name: 'milk', price: 10, decription: '맛있는우유' }
console.log(map2[key]); // undefined
console.log(map2.get(key)); // { name: 'milk', price: 10, decription: '맛있는우유' } get을 이용해야 key의 값을 얻을수 있다.
