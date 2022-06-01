{
  const x = 1;
  {
    const y = 2;
    console.log(x); // 1
  }
  console.log(x); // 1
  console.log(y); // 블럭 밖에서는 내부를 참조할 수 없다. app crashed
}

const text = 'global'; // 전역 변수, 전역 스코프 (글로벌 변수, 글로벌 스코프)
{
  const text = 'inside block1'; // 지역 변수(로컬 변수), 지역 스코프(로컬 스코프);
  {
    console.log(text); // inside block1
  }
}
