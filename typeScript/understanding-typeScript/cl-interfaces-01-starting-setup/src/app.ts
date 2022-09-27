class Department {
  name: string; // 키-값 쌍이 아니라   키 이름만 정의할 뿐입니다.

  constructor(n: string) {
    // 생성자는 타입스크립트와 최신 자바스크립트에도 인식하는 예약어입니다.
    //  객체에 대한 초기화 작업을 수행할 수 있습니다.
    this.name = n;
  }
}

const accounting = new Department('Accounting'); // 생성자 인수 전달
console.log(accounting);
