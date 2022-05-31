function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0보다 작음')); // reject를 만들때 error를 전달해주어야한다.
    }
    setTimeout(resolve, seconds * 1000);
  }); // 프로미스를 만들때 두가지 인자를 콜백으로 전달해야한다.
}

runInDelay(2)
  .then(() => console.log('타이머 완료'))
  .catch(console.error)
  .finally(() => console.log('끝났다!')); // 성공한다면 then 실패한다면 catch 호출.
// error가 발생할 수 있는 프로미스라면 가급적 catch와 finally를 사용해서 error처리를 하는게 중요하다.
