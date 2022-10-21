// either: a or b
interface Either<L, R> {
  left: () => L;
  right: () => R;
}

// 숫자 말고 다른 타입도 받게 하려면 제네릭을 사용하면 된다.
class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}
  left(): L {
    return this.leftValue;
  }

  right(): R {
    return this.rightValue;
  }
}

const either: Either<number, number> = new SimpleEither(4, 5);
either.left(); // 4
either.right(); // 5
const best = new SimpleEither(4, 'hello'); // 쓰는 사람이 결정해서 만들 수 있다.
const best2 = new SimpleEither({ name: 'ellie' }, 'hello');
