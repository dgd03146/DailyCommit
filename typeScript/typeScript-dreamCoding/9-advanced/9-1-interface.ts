type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

// object
const obj1: PositionType = {
  x: 1,
  y: 1
};

const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 1
};
// class
class Pos1 implements PositionType {
  x: number;
  y: number;
}

class Pos2 implements PositionInterface {
  x: number;
  y: number;
}

// Extends
interface ZPoistionInterface extends PositionInterface {
  z: number;
}
type ZPoistionInterType = PositionType & { z: number };

// 😊 only interfaces can be merged
interface PositionInterface {
  z: number;
}

// type PositionType{
// }

// 😊 Type aliases can use computed properties
type Person = {
  name: string;
  age: number;
};
type Name = Person['name']; // string

type NumberType = number;
type Direction = 'left' | 'right'; // 유니언 타입은 interface로 절대 구현할 수 없다.
