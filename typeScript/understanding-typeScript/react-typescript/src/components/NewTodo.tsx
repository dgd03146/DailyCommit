import React, { useRef } from 'react';

// 평상시에 인터페이스를 만들겠지만 type을 사용하는것도 문제가 없다.
type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const NewTodo = ({ onAddTodo }: NewTodoProps) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = textInputRef.current!.value; // 타입스크립트에게 이값이 설정될거라고 알려줌
    onAddTodo(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

// 타입스크립트는 ref를 좋아하지 않는다. useRef는 일반적인 함수이기 때문에 어떤 데이터가 저장이 될지 타입을 지정해주어야함, ref가 만들어질때 기본값을 줘야한다.

export default NewTodo;
