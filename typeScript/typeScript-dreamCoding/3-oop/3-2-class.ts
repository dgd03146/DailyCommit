export {};

type CoffeeCup = {
  shots: number;
  hasMilk: boolean;
};

class CoffeeMaker {
  static BEANS_GRAMM_PER_SHOT: number = 7; // class level
  coffeeBeans: number = 0; // instance (object) level

  constructor(coffeeBeans: number) {
    this.coffeeBeans = coffeeBeans;
  }

  static makeMachine(coffeeBeans: number): CoffeeMaker {
    return new CoffeeMaker(coffeeBeans);
  }

  makeCoffee(shots: number): CoffeeCup {
    if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
      throw new Error('Not enough coffee beans!');
    }
    this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
    return {
      shots,
      hasMilk: false
    };
  }
}
const maker = CoffeeMaker.makeMachine(3);
console.log(maker); // CoffeeMaker { coffeeBeans: 3 }
