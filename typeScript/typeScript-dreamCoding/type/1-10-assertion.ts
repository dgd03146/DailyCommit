{
  /**
   * Type Assertions 💩
   * 정말정말 100퍼센트 장담할 때만 사용할 것.
   */
  function jsStrFunc(): any {
    return 'hello';
  }
  const result = jsStrFunc();
  console.log((result as string).length); // 5
  console.log(<string>result.length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // ❌ error

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // !를쓰면 절대적으로 값이 있다. 확신할 때.

  const button = document.querySelector('class')!;
  // !는 정말 장담할 수 있을때 !를 쓸 수 있다.
}
