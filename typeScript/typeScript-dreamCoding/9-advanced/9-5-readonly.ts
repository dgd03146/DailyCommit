{
  type ToDo = {
    title: string;
    descrition: string;
  };

  function display(todo: Readonly<ToDo>) {
    // todo.title = 'jaja'; // 수정하려고 하면 오류가 발생
  }
}
