// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자');
//   }
//   sleep() {
//     console.log('잔다');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자');
//   }
//   sleep() {
//     console.log('잔다');
//   }
//   play() {
//     console.log('놀자아~~');
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹자');
  }
  sleep() {
    console.log('잔다');
  }
}

class Tiger extends Animal {}
const tiger = new Tiger('노랑이');
console.log(tiger); // Tiger { color: '노랑이' }
tiger.sleep();
tiger.eat();

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color);
    this.ownerName = ownerName;
  }
  play() {
    console.log('놀자아~');
  }

  // 오버라이딩 overriding 자식클래스에서 부모 클래스를 덮어 씌운다
  eat() {
    super.eat(); // super로 부모에 있는 eat호출 
    console.log('강아지가 먹는다!');
  }
}

const dog = new Dog('빨강이', '거정');
console.log(dog); // Dog { color: '빨강이' }
dog.sleep(); // 잔다
dog.eat(); // 먹자
dog.play(); // 놀자아~
