// static 정적 프로퍼티, 메서드

// 클래스 class
class Fruit {
  static MAX_FRUITS = 4;
  // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 클래스 레벨의 메서드
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 this를 참조할수 없음
    return new Fruit('banana', '🍌');
  }

  // 인스턴스 레벨의 메서드
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const banana = Fruit.makeRandomFruit();
console.log(banana); // Fruit { display: [Function: display], name: 'apple', emoji: '🍌' }
// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎');
// orange는 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange', '🍊');

console.log(apple); // Fruit { display: [Function: display], name: 'apple', emoji: '🍎' }
console.log(orange); // Fruit { display: [Function: display], name: 'orange', emoji: '🍊' }
console.log(apple.name); // apple
console.log(apple.emoji); // 🍎
apple.display(); // apple: 🍎

Math.pow();
Number.isFinite(1);
