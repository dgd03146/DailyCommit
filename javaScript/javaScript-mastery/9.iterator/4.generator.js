// const multiple = {
//   [Symbol.iterator]() {
//     const max = 10;
//     let num = 0;
//     return {
//       next() {
//         return { value: num++ * 2, done: num > max };
//       }
//     };
//   }
// };

function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      console.log(i);
      yield i ** 2;
    }
  } catch (error) {
    console.log(error);
  }
}
const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);

// multiple.return(); // return을 하는 순간 제너레이터가 끝나게 된다.
multiple.throw('Error!'); // 에러 던질 수 있다. try catch문을 사용해야 error를 던질 수 있다.

next = multiple.next();
console.log(next.value, next.done);
