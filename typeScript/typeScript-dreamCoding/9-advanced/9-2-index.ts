{
  const obj = {
    name: 'ellie'
  };
  obj.name; //ellie
  obj['name']; // ellie

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name']; // string
  const text: Name = 'hello'; // 문자열만 할당이 가능

  type Gender = Animal['gender']; // 'male' | 'female'

  type Keys = keyof Animal; // 'name' | 'age' | 'gender' animal에 있는 모든 키들을 할당
  const key: Keys = 'gender';

  type Person = {
    name: string;
    gender: Animal['gender'];
  };

  const person: Person = {
    name: 'ellie',
    gender: 'female'
  };
}
