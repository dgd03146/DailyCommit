const dog = { name: '와우', emoji: '🐶' };

console.log(Object.keys(dog)); // 모든 키들에 대해서 배열로 전달
console.log(Object.values(dog)); // 모든 값에 대해서 배열로 전달
console.log(Object.entries(dog)); // 키와 값을 pair로 받고 싶다면 사용

console.log('name' in dog); // 특정한 키가 있는지 없는지 검사
console.log(dog.hasOwnProperty('name')); // 키가 있는지 없는지 검사

// 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
const desriptors = Object.getOwnPropertyDescriptors(dog);
console.log(desriptors); /* {
  name: { value: '와우', writable: true, enumerable: true, configurable: true },
  emoji: { value: '🐶', writable: true, enumerable: true, configurable: true }
}*/

const desc = Object.getOwnPropertyDescriptor(dog, 'name'); // 하나만 받아올 수 있음
console.log(desc);
/*{ value: '와우', writable: true, enumerable: true, configurable: true }*/

Object.defineProperty(dog, 'name', {
  value: '멍멍',
  writable: false,
  enumerable: false,
  configurable: false
});

console.log(dog.name); // 멍멍
console.log(Object.keys(dog)); // [ 'emoji' ] name이라는 키는 열거를 불가능하게 했기 때문
delete dog.name; // configureable을 false로 해서 키를 수정할수도 없다.

const student = {};
Object.defineProperties(student, {
  firstName: {
    value: '영희',
    writable: true,
    enumerable: true,
    configurable: true
  },
  lastName: {
    value: '김',
    writable: true,
    enumerable: true,
    configurable: true
  },
  fullName: {
    get() {
      return `${lastName} ${firstName}`;
    },
    set(name) {
      [this.lastName, this.firstName] = name.split(' ');
    },
    configurable: true
  }
});
console.log(student);
