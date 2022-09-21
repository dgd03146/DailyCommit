{
  // Array
  const fruits: string[] = ['🍑', '🍏'];
  const scores: Array<number> = [1, 3, 4];
  // readonly를 붙여주면 함수 안에서 데이터를 변경할 수 없다. readonly를 작성할 때 string을 써야함 Array<string> 안됨.
  // 데이터의 불변성을 유지하는 것은 정말 중요하다!
  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, class로 대체해서 사용할것.
  // 고정된 사이즈에 서로 다른 타입이 있을때 활용. tuple을 사용하는 것을 권장하지 않는다.
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name  인덱스로 접근하는 것은 가독성이 좋지 않다.
  student[1]; // 123
  const [name, age] = student;
  // 동적으로 리턴하는데 class나 interface로 묻기 애매할때는 tuple을 사용 but 일반적인 경우라면 interface나 class 사용할 것
}
