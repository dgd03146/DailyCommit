{
  /**
   * Enum
   * 타입스크립트에서는 가능한 한 사용하지 않는게 나음. enum을 쓰게 되면 타입이 정확하게 보장되지 않는다.
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESEDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  // enum을 쓰지 않고 Union을 사용할 수 있다. enum은 충분히 Union타입으로 대체 되어서 사용 가능하기 때문에 enum을 쓰지 않고 Union으로 사용한다
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednseday';

  // enum에서는 앞글자만 대문자로 적고 나머지는 소문자로 적어야함
  // 타입이 보장되면서 간편하게 확인 가능
  // enum에 값을 정하지 않으면 자동으로 0부터 하나씩 증가해서 시작됨
  enum Days {
    Monday, // 1부터 시작, 문자열도 할당 가능 대신 수동적으로 다 할당해야함
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  console.log(Days.Tuesday);
  let day = Days.Saturday;
  day = 10; // enum으로 할당된 변수에 다른 숫자를 할당할 수 있는 것이 문제!
  console.log(day);

  let dayOfweek: DaysOfWeek = 'Monday';
  dayOfweek = 'Wednseday';
}
