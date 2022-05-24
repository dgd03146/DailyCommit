// 함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 👿
// 상태변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환해야함 ✨
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사 (메모리 주소)
function display(num) {
  num = 5; // ❌
  console.log(num);
}
const value = 4;
display(value);

function displayObj(obj) {
  obj.name = 'Bob'; // ❌❌❌❌❌ 외부로부터 주어진 인자(오브젝트)를 내부에서 변경
  console.log(obj);
}
const eliie = { name: 'Ellie' };
displayObj(eliie);
console.log(eliie);

function changeName(obj) {
  // 이름부터 변경하는 느낌을 주도록
  return { ...obj, name: 'Bob' }; // 반환할때는 새로운 오브젝트를 만드는것이 중요!
}
