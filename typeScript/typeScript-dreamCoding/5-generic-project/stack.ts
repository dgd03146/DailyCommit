{
  interface Stack<T> {
    readonly size: number; // 스택안에 몇개 들어있는지, 외부에서 값을 변경할 수 없기에 readonly
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    // 사용자가 데이터를 넣어서 무언가를 만들다면 불변성을 유지하는게 좋다.
    readonly value: T;
    readonly next?: StackNode<T>; // 다음 stackNode를 가르키거나 가르키지 않을 수 있다.
  };

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;

    constructor(private capacity: number) {} // 보통 자료구조를 만들때 얼마만큼의 사이즈를 허용할것인지 initial value를 설정해주면 좋다.

    get size() {
      return this._size;
    }
    push(value: T): void {
      if (this.size === this.capacity) {
        throw new Error('Stack is full!');
      }
      const node = { value, next: this.head }; // 새로 들어온 아이는 head가 가리키고 있던 것을 가르킨다
      this.head = node; // head는 새로 들어온 노드를 가리킨다.
      this._size++;
    }
    pop(): T {
      if (this.head == null) {
        // 스택이 비어있다
        throw new Error('Stack is empty!');
      }
      const node = this.head; // 제거하고자 하는 노드
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl<string>(10);

  stack.push('Ellie 1');
  stack.push('Bob 2');
  stack.push('Steve 3');

  while (stack.size !== 0) {
    console.log(stack.pop());
  }

  const stack2 = new StackImpl<number>(10);

  stack2.push(123);
  stack2.push(456);
  stack2.push(789);

  while (stack2.size !== 0) {
    console.log(stack2.pop());
  }
}
