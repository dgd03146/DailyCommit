// 구조 분해 할당 Destruecturing Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들수 있다.
const fruits = ['🍌', '🍓', '🍇', '🍓'];
const [first, second, ...others] = fruits;
console.log(first); // 🍌
console.log(second); // 🍓
console.log(others); // [ '🍇', '🍓' ]

const point = [1, 2];
const [x, y] = point;
console.log(x);
console.log(y);

function createEmoji() {
  return ['apple', '🍎'];
}
const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const ellie = { name: 'Ellie', age: 20, job: 's/w engineer' };
function display({ name, age, job }) {
  console.log('이름', name);
  console.log('나이', age);
  console.log('직업', job);
}
display(ellie);

const { name, age, job: occupation, pet = 'dog' } = ellie; // pet이라는 키가 있으면 그걸쓰고 없으면 dog
console.log(name);
console.log(age);
console.log(occupation); // 직업 s/w engineer
console.log(pet);
