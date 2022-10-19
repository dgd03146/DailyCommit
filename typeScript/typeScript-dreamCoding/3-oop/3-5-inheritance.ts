export {};

type CoffeeCup = {
  shots: number;
  hasMilk: boolean;
};

// 이 interface를 이용하면 makeCoffee를 사용할 수 있다
interface CoffeeMaker {
  makeCoffee(shots: number): CoffeeCup;
}

class CoffeeMachine implements CoffeeMaker {
  private static BEANS_GRAMM_PER_SHOT: number = 7; // class level. 외부에서 접근할 필요가 없다. 보여주고 싶지 않다.
  private coffeeBeans: number = 0; // instance (object) level

  constructor(coffeeBeans: number) {
    this.coffeeBeans = coffeeBeans;
  }

  static makeMachine(coffeeBeans: number): CoffeeMachine {
    return new CoffeeMachine(coffeeBeans);
  }

  // 사용자가 커피를 호출할 때 이 함수만 호출하게 하고 싶다
  makeCoffee(shots: number): CoffeeCup {
    this.grindBeans(shots);
    this.preheat();
    return this.extract(shots);
  }

  clean() {
    console.log('cleaning the machine...');
  }

  fillCoffeeBeans(beans: number) {
    // 함수를 통해서만 커피를 채우게 한다.
    if (beans < 0) {
      throw new Error('value for beans should be greater than 0');
    }
    this.coffeeBeans += beans;
  }

  private grindBeans(shots: number) {
    // 커피 콩 갈기
    console.log(`grinding beans for ${shots}`);
    if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
      throw new Error('Not enough coffee beans');
    }
    this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
  }

  // 외부에서 호출 못하게 private
  private preheat(): void {
    // 커피 기계를 따뜻하게 하는 함수
    console.log('heating up...');
  }

  // 외부에서 호출 못하게 private
  private extract(shots: number): CoffeeCup {
    console.log(`Pulling ${shots} shots...`);
    return {
      shots,
      hasMilk: false
    };
  }
}

class CaffeLatteMachine extends CoffeeMachine {
  constructor(beans: number, public readonly serialNumber: string) {
    super(beans);
  }

  private steamMilk(): void {
    console.log('Steaming some milk... 🥛');
  }
  makeCoffee(shots: number): CoffeeCup {
    const coffee = super.makeCoffee(shots);
    this.steamMilk();
    return {
      ...coffee,
      hasMilk: true
    };
  }
}

const machine = new CoffeeMachine(23);
const latteMachine = new CaffeLatteMachine(23, 'serial33');
const coffee = latteMachine.makeCoffee(1);
console.log(latteMachine.serialNumber); // latteMachine에서만 serialNumber에 접근 가능
