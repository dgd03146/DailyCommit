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

  private constructor() {}

  static makeMachine(): CoffeeMaker {
    return new CoffeeMaker();
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
