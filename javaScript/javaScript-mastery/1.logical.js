// 논리연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가: short-circuit evaluation
const obj1 = { name: '😽' };
const obj2 = { name: '🙉', owner: 'Ellie' };

if (obj1 && obj2) {
  console.log('둘다 true!');
}

let result = obj1 && obj2;
console.log(result); // { name: '🙉', owner: 'Ellie' }

result = obj1 || obj2;
console.log(result); // { name: '😽' }

// 활용예
// 조건이 truthy일때 && 무언가를 해야 할 경우
// 조건이 falshy일때 || 무언가를 해야 할 경우
function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('주인이 없어');
  }
  animal.owner = '바뀐주인!';
}
function makeNewOnwer(animal) {
  if (animal.owner) {
    throw new Error('주인이 있어');
  }
  animal.owner = '새로운주인!';
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);

obj1.owner || makeNewOnwer(obj1);
obj2.owner || makeNewOnwer(obj2);
console.log(obj1);
console.log(obj2);

// null  또는 undefined인 경우를 확인할때
let item; //= { price: 1 };
const price = item && item.price;
console.log(price);

// 기본값을 설정
// default parameter는 null과 undefined인 경우
// || falshy한 경우 설정(할당) 0, -0, null, undefined, ''
function print(message = 'Hi') {
  const text = message || 'Hello';
  console.log(text);
}
print('안녕!');
print(); // Hi
print(''); // Hello
