// const dog1 = { name: '뭉치', emoji: '🐶' };
// const dog2 = { name: '코코', emoji: '🐩' };

function Dog(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  // 인스턴스 레벨의 함수. 모든 인스턴스마다 가지고 있음
  /* this.printName = () => {
    console.log(`${this.name} ${this.emoji}`);
  }; */
}

// 프로토타입 레벨의 함수 조금 더 메모리를 절약할 수 있다. 각각의 인스턴스에서 공통적으로 가질수 있는 프로토타입 레벨의 함수
Dog.prototype.printName = function () {
  // 인스턴스에 들어있지 않고 proto type에 있게 된다
  console.log(`${this.name} ${this.emoji}`);
};
const dog1 = new Dog('뭉치', '🐶');
const dog2 = new Dog('코코', '🐩');
console.log(dog1, dog2);
dog1.printName();
dog2.printName();

// 오버라이딩
// 인스턴스 레벨에서(자식) 동일한 이름으로 함수를 재정의 하면 (오버라이딩 하면)
// 프로토타입 레벨의(부모) 함수의 프로퍼티는 가려진다 (섀도잉 됨)
dog1.printName = function () {
  console.log('안녕!!'); // 안녕!!
};
dog1.printName();

// 정적 레벨
Dog.hello = () => {
  console.log('Hello!');
};
Dog.hello();
Dog.MAX_AGE = 20;
