// 동결! Object.freeze 추가 ❌, 삭제 ❌, 쓰기 ❌, 속성 재정의 ❌
// (단, 얕은 꽁꽁 얼림!)
const ellie = { name: '엘리' };
const dog = { name: '와우', emoji: '🐶', owner: 'ellie' };
Object.freeze(dog);
dog.name = '멍멍';
console.log(dog); // name은 여전히 와우이다. 동결된 객체를 수정할 수 없다.
dog.age = 4;
console.log(dog); // 수정 안됨
delete dog.name;
console.log(dog); // 삭제 안됨
ellie.name = '엘리얌';
console.log(dog); // ellie의 오브젝트의 이름은 변경이 된다.

// 밀봉! Object.seal 값의 수정 ✅, 추가 ❌, 삭제 ❌, 속성 재정의 ❌
const cat = { ...dog }; // 스프레드 연산자, assign 둘다 사용해도 된다.
// Object.assign(cat, dog);
console.log(cat);
Object.seal(cat);
cat.name = '냐옹';
console.log(cat); // 수정 됨
delete cat.emoji;
console.log(cat); // 삭제 안됨

console.log(Object.isFrozen(dog)); // 객체 동결여부 확인
console.log(Object.isSealed(cat)); // 객체 밀봉여부 확인

// 확장 금지 preventExtensions 추가 ❌
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger)); // 객체 확장 여부 확인
tiger.name = '어흐응';
console.log(tiger); // 확장이 안되는 객체는 값 수정 가능
delete tiger.name; // 삭제 가능
console.log(tiger);
tiger.age = 1; // 확장만 안되기 때문에 추가 안됨
console.log(tiger);
