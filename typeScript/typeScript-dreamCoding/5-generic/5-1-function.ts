{
  // function checkNotNull(arg: number | null): number {
  //   if (arg == null) {
  //     throw new Error('not valid number!');
  //   }
  //   return arg;
  // }

  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  // any를 쓰는것은 좋지 않다.

  function checkNotNull<T>(arg: T | null): T {
    // T 또는 NULL 이라는 타입을 받고 T를 다시 리턴한다.
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
}
