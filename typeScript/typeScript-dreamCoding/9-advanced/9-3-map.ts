{
  type Video = {
    title: string;
    author: string;
    description: string;
  };
  [1, 2].map((item) => item * item); // [1, 4]

  // 한번 정의해놓으면 재사용성이 굉장히 높다.
  type Optional<T> = {
    // T 타입에 있는 모든 키들을 순차적으로 P에 할당하고 키의 값의 타입을 mapping해서 만들 수 있다.
    [P in keyof T]?: T[P]; // for ...in
  };

  type ReadOnly<T> = {
    readonly // readonly라고 하면 이타입을 쓰는 오브젝트는 `
    [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    title: 'hi',
    author: 'bye'
  };

  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    name: 'dog'
  };
  animal.name = 'ellie';

  const video: ReadOnly<Video> = {
    title: 'hi',
    author: 'ellie',
    description: 'gg'
  };
  // video.author= // 변경할 수 없음 왜냐하면 readonly 타입이기 때문에

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // };

  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  //   readonly description: string;
  // };

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: null,
    author: null,
    description: 'hi'
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
