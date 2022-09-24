export {};

type CoffeeCup = {
  shots: number;
  hasMilk: boolean;
};

// public
// private
// protected
class CoffeeMaker {
  private static BEANS_GRAMM_PER_SHOT: number = 7; // class level. 외부에서 접근할 필요가 없다. 보여주고 싶지 않다.
  private coffeeBeans: number = 0; // instance (object) level

  private constructor(coffeeBeans: number) {
    this.coffeeBeans = coffeeBeans;
  }

  static makeMachine(coffeeBeans: number): CoffeeMaker {
    return new CoffeeMaker(coffeeBeans);
  }

  fillCoffeeBeans(beans: number) {
    // 함수를 통해서만 커피를 채우게 한다.
    if (beans < 0) {
      throw new Error('value for beans should be greater than 0');
    }
    this.coffeeBeans += beans;
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

const maker = CoffeeMaker.makeMachine();
console.log(maker);
maker.fillCoffeeBeans(32);
console.log(maker);

class User {
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  private internalAge = 4;
  get age(): number {
    return this.internalAge;
  }
  set age(num: number) {
    if (num < 0) {
    }
    this.internalAge = num;
  }
  constructor(private firstName: string, private lastName: string) {}
}

const user = new User('Steve', 'Jobs');
console.log(user.fullName);
console.log(user.age);
user.age = 6;
console.log(user.age);
