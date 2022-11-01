const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__); // x와 y는 동일한 오브젝트의 proto를 상속하기 때문에 동일하다고 나온다.

const array = [];
console.log(array);

function CoffeeMachine(beans) {
  this.beans = beans;
  // Instance member level
  // this.makeCoffee = (shots) => {
  //   console.log('making...');
  // };
}
// Prototype member level
CoffeeMachine.prototype.makeCoffee = () => {
  console.log('making...');
};
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}
LatteMaachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMaachine(123);
console.log(latteMachine);
latteMachine.makeCoffee();
