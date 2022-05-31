function execute() {
  console.log('1');
  setTimeout(() => {
    console.log('2');
  }, 3000);
  console.log('3');
}

execute(); // 1,3,2(3초 뒤에 출력됨)
