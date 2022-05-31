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

// 바나나와 사과를 같이 가지고 오기
async function fetchFruits() {
  const banana = await getBanana(); // 바나나를 받아올때까지 기다려
  const apple = await getApple();
  return [banana, apple];
}
fetchFruits() //
  .then((fruits) => console.log(fruits));
