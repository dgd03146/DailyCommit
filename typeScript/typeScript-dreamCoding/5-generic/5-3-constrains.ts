interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay(): void {
    console.log(`full time!!`);
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay(): void {
    console.log(`part time!!`);
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 ❌❌❌
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  // Employ를 구현한 아이들만 인자로 가능
  employee.pay();
  return employee;
}

const jeong = new FullTimeEmployee();
const bob = new PartTimeEmployee();
jeong.workFullTime();
bob.workPartTime();

const jeongAfterPay = pay(jeong);
const bobAfterPay = pay(bob);
// 오브젝트를 전달할 수 있지만 다른 타입을 전달하게 되면 에러가 발생한다.

const obj = {
  name: 'ellie',
  age: 20
};

const obj2 = {
  animal: '🙉'
};

const getValue = <T, U extends keyof T>(obj: T, key: U): T[U] => {
  return obj[key];
};
// T는 오브젝트, U는 오브젝트 안에 있는 키들중 하나여야한다. 리턴은 KEY가 가리키고 있는 value타입이다.

// 오브젝트 안에 있는 value를 리턴하는 함수, 두번째 인자는 오브젝트 안에 있는 key중에 하나여야한다.
console.log(getValue(obj, 'name')); // ellie
console.log(getValue(obj, 'age')); // 20
console.log(getValue(obj2, 'animal')); // 🙉
