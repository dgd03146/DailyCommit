function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no orange'));
}

// 바나나과 사과를 같이 가지고 오기
getBanana() //
  .then((banana) =>
    getApple() //
      .then((apple) => [banana, apple])
  )
  .then(console.log);

// Promise.all 병렬적으로 한번에 모든 Promise들을 실행!
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log('all', fruits)); // 병렬적으로 동시에 실행해서 3초 있다가 바로 실행이 됨.

// Promise.race 주어진 Promise중에 제일 빨리 수행된것이 이김!
Promise.race([getBanana(), getApple()]) //
  .then((fruit) => console.log('race', fruit));

Promise.all([getBanana(), getApple(), getOrange()]) // 성공했을때만 가져올 것이라면 all을 사용.
  .then((fruits) => console.log('all-error', fruits))
  .catch(console.log); // all 중에 에러가 발생하는것이 있다면 catch를 해주어야한다.

Promise.allSettled([getBanana(), getApple(), getOrange()]) // 실패하든 성공하든 모든 결과를 보여준다.
  .then((fruits) => console.log('all-settle', fruits))
  .catch(console.log);
