console.log(this); // window가 this가 됨

function simpleFunc() {
  console.log(this);
}
simpleFunc();

class Counter {
  count = 0;
  increase = () => {
    console.log(this);
  };
}
const counter = new Counter();
counter.increase();
// const caller = counter.increase;
const caller = counter.increase;
caller();

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // increase 함수가 호출이 됨. Bob자체가 출력이 됨. run이라는 함수는 Bob이 불렀기 때문에
