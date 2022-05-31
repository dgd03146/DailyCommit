function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error('치킨을 가지고 올 수 없음'));
  //return Promise.resolve(`🌱 => 🐓`);
}

getChicken() //
  .catch((error) => '🐁')
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log); // 🐁 => 🥚 => 🍳
// .catch((error) => console.log(error.name));
