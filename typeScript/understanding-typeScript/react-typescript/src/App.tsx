import React, { useState } from 'react';
import { Todo } from './todo.model';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  // useState는 일반적인 함수 이기 때문에 state의 구조를 전달할 수 있다.
  // 처음 초기화할대 비어 있는 배열이 있는경우 나중에 어떤 데이터가 들어갈지 구조를 정해줄때 중요하다.

  const todoAddHandler = (text: string) => {
    // 가장 최신 상태 snapshot을 보장한다.
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text }
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;
