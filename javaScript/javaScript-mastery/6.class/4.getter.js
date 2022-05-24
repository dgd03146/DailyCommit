// 접근자 프로퍼티 (Accessor Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    console.log('set', value);
  }
}

const student = new Student('수지', '배');
student.firstName = '안나';
console.log(student.firstName);
console.log(student.fullName); // .해서 읽게 되면 get이 호출이 됨
student.fullName = '김철수'; // set함수가 호출이 됨
