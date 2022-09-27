{
  /**
   * Type Aliases 원하는 타입을 정의한다!
   */
  type Text = string;
  const name: Text = 'ellie';
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'ellie',
    age: 12
  };

  /**
   * String Literal Types
   */
  type Name = 'name';
  let ellieName: Name;
  ellieName = 'name'; // 동일한 name이라는 것을 써야함
  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
}
