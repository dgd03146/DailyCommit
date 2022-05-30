// Bubbling up, Propagating
function a() {
  throw new Error('error!');
}

function b() {
  try {
    a();
  } catch (error) {
    console.log('생각해보니까 이 에러는 내가 잡을 수 없을 것 같다.');
    throw error; // 다시 에러를 던질 수 있다.
  }
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log('Catched');
}
console.log('done!');
