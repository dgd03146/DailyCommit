// Java: Exception
// JavaScript: Error
// const array = new Array(1000000000000000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === 'not exist!❌') {
    throw new Error(`file not exist! ${fileName}`);
  }
  return 'file contents💾';
}

function closeFile(fileName: string) {
  //
}

function run() {
  const fileName = 'not exist!❌';

  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log(`catched`);
    // catch안에서 무언가를 처리할 때 다른 에러가 발생하거나 return이 되거나 그런 경우에는 파일을 닫을 수 없기 때문에 가능하면 마무리해야하는것들이 있다면 finally 안에서 하는것이 좋다.
    return;
  } finally {
    // try가 성공하든 실패하든 catch가 호출되든 호출되지 않든 finally는 항상 호출이 된다. 성공하든 실패하든 무언가를 호출해야한다면 finally를 적는것이 좋다.
    closeFile(fileName);
    console.log(`finally`);
  }
}

run();
