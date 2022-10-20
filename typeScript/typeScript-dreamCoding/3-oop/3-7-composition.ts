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

// 싸구려 우유 거품기
class CheapMilkSteamer {
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

// 설탕 제조기
class CandySugarMixer {
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

class CaffeLatteMachine extends CoffeeMachine {
  constructor(
    beans: number,
    public readonly serialNumber: string,
    private milkFother: CheapMilkSteamer
  ) {
    super(beans);
  }

  makeCoffee(shots: number): CoffeeCup {
    const coffee = super.makeCoffee(shots);
    return this.milkFother.makeMilk(coffee);
  }
}

class SweetCoffeeMaker extends CoffeeMachine {
  constructor(private beans: number, private sugar: CandySugarMixer) {
    super(beans);
  } // CoffeeMachine을 상속했기 때문에 beans 정보도 받아와야한다.

  makeCoffee(shots: number): CoffeeCup {
    const coffee = super.makeCoffee(shots);
    return this.sugar.addSugar(coffee);
  }
}

class SweetCaffeLatteMachine extends CoffeeMachine {
  // 필요한 기능들을 가져와서 외부에서 주입 받음으로써 composition을 이용해서 필요한 기능을 재사용 할 수 있다.
  constructor(
    private beans: number,
    private milk: CheapMilkSteamer,
    private sugar: CandySugarMixer
  ) {
    super(beans);
  }
  makeCoffee(shots: number): CoffeeCup {
    const coffee = super.makeCoffee(shots);
    const sugarAdded = this.sugar.addSugar(coffee);
    return this.milk.makeMilk(sugarAdded);
  }
}

const cheapMilkMaker = new CheapMilkSteamer();
const candySugar = new CandySugarMixer();
const sweetMachine = new SweetCoffeeMaker(12, candySugar);
const latteMachine = new CaffeLatteMachine(12, 'SS', cheapMilkMaker);
const sweetLatteMachine = new SweetCaffeLatteMachine(
  12,
  cheapMilkMaker,
  candySugar
);
