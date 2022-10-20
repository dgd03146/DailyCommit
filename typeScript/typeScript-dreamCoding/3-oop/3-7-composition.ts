export {};

type CoffeeCup = {
  shots: number;
  hasMilk?: boolean;
  hasSugar?: boolean;
};

// 이 interface를 이용하면 makeCoffee를 사용할 수 있다
interface CoffeeMaker {
  makeCoffee(shots: number): CoffeeCup;
}

class CoffeeMachine implements CoffeeMaker {
  private static BEANS_GRAMM_PER_SHOT: number = 3; // class level. 외부에서 접근할 필요가 없다. 보여주고 싶지 않다.
  private coffeeBeans: number = 0; // instance (object) level

  constructor(
    coffeeBeans: number,
    private milk: MilkFrother,
    private sugar: SugarProvider
  ) {
    this.coffeeBeans = coffeeBeans;
  }

  // 사용자가 커피를 호출할 때 이 함수만 호출하게 하고 싶다
  makeCoffee(shots: number): CoffeeCup {
    this.grindBeans(shots);
    this.preheat();
    const coffee = this.extract(shots);
    const sugarAdded = this.sugar.addSugar(coffee);
    return this.milk.makeMilk(sugarAdded);
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

interface MilkFrother {
  makeMilk(cup: CoffeeCup): CoffeeCup;
}

interface SugarProvider {
  addSugar(cup: CoffeeCup): CoffeeCup;
}

// 싸구려 우유 거품기
class CheapMilkSteamer implements MilkFrother {
  private steamMilk(): void {
    // 내부에서만 동작
    console.log('Steaming some milk... 🥛');
  }
  makeMilk(cup: CoffeeCup): CoffeeCup {
    this.steamMilk();
    return {
      ...cup,
      hasMilk: true
    };
  }
}

// 고급 우유 거품기
class FancyMilkSteamer implements MilkFrother {
  private steamMilk(): void {
    // 내부에서만 동작
    console.log('Fancy Steaming some milk... 🥛');
  }
  makeMilk(cup: CoffeeCup): CoffeeCup {
    this.steamMilk();
    return {
      ...cup,
      hasMilk: true
    };
  }
}

// 차가운 우유 거품기
class ColdMilkSteamer implements MilkFrother {
  private steamMilk(): void {
    // 내부에서만 동작
    console.log('Cold Steaming some milk... 🥛');
  }
  makeMilk(cup: CoffeeCup): CoffeeCup {
    this.steamMilk();
    return {
      ...cup,
      hasMilk: true
    };
  }
}

class NoMilk implements MilkFrother {
  makeMilk(cup: CoffeeCup): CoffeeCup {
    return cup; // 우유를 만들지 않는다.
  }
}

// 사탕 설탕 제조기
class CandySugarMixer implements SugarProvider {
  private getSugar() {
    console.log('Getting some sugar from candy');
    return true;
  }
  addSugar(cup: CoffeeCup): CoffeeCup {
    const sugar = this.getSugar();

    return {
      ...cup,
      hasSugar: sugar
    };
  }
}

// 설탕 제조기
class SugarMixer implements SugarProvider {
  private getSugar() {
    console.log('Getting some sugar from jar!!!');
    return true;
  }
  addSugar(cup: CoffeeCup): CoffeeCup {
    const sugar = this.getSugar();

    return {
      ...cup,
      hasSugar: sugar
    };
  }
}

class NoSugar implements SugarProvider {
  addSugar(cup: CoffeeCup): CoffeeCup {
    return cup;
  }
}

// Milk
const cheapMilkMaker = new CheapMilkSteamer();
const fancyMilkMaker = new FancyMilkSteamer();
const coldMilkMaker = new ColdMilkSteamer();
const noMilk = new NoMilk();

// Sugar
const candySugar = new CandySugarMixer();
const sugar = new SugarMixer();
const noSugar = new NoSugar();

// interface로 사용하고 나서 클래스를 원하는 용도로 바꿔서 사용할 수 있다.
const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar); // 우유가 없고 candySugar를 넣어주는 머신
const sweetMachine = new CoffeeMachine(12, noMilk, sugar);

const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar);

console.log(sweetLatteMachine.makeCoffee(3));
