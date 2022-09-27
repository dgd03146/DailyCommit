{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array....
   */

  // number
  const num: number = -6;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefined - 값이 있는지 없는지 아무것도 결정되지 않은 상태
  let name: undefined; //  undefined만 선언된 변수는 쓰지 않음
  let age: number | undefined; // 숫자 타입 또는 undefiend, 보편적으로 null보다는 undefined를 많이 쓴다
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null - 텅텅 비어져있다
  let person: null; // 💩
  let person2: string | null;
  person2 = null;
  person2 = 'hi';

  // unknown 💩 가능하면 쓰지 않는 것이 좋음. 가능하면 구체적으로 타입을 지정할 것
  let notSure: unknown = 0; // 어떤 데이터 타입을 담을지 알 수가 없음
  notSure = 'he';
  notSure = true;

  // any 💩 어떤것이든 담을 수 있는 변수, 가능하면 쓰지 않는 것이 좋다.
  let anything: any = 0;
  anything = 'hello';

  // void 아무것도 리턴을 하지 않으면 void라는 타입이 된다. 함수에서 뭔가를 리턴할 때 타입을 명시하는것이 좋은 관례이다.
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // 💩;

  // never
  // never타입에는 절대 다른것을 리턴할 수 없고 error를 던지던지 while문을 돌면서 끝나지 않게 코드를 작성해야한다.
  // 함수에서 절대 return 되지 않는 경우에 그것을 명시하기 위해서 쓰인다.
  // throwError는 어플리케이션에서 예상치못한 핸들링 할 수 없는 경우가 발생했을 때 호출할 수 있는 함수
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // 💩

  // object 원시 타입을 제외한 모든 오브젝트 타입을 할당할 수 있다.
  let obj: object; // 💩 가능하면 오브젝트도 어떤 타입인지 구체적으로 명시하는 것이 좋음
  function acceptSomeObject(obj: object) {} // 이 함수는 어떤 오브젝트 타입을 할당할 수 있다.
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });
}
