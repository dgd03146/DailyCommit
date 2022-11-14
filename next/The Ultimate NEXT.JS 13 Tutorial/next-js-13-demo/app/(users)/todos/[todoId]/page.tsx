import React from 'react';
import { Todo } from '../../../../typing';
import { notFound } from 'next/navigation';

// toggle the ability to generate or server side render pages
export const dynamicParams = true; // default = true
// explains that next.js actually want to have that ability to try to server side render a page

type PageProps = {
  params: {
    todoId: string;
  };
};

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } }
  );
  const todo: Todo = await res.json();
  console.log('This is the todos');
  return todo;
};

async function TodoPage({ params: { todoId } }: PageProps) {
  const todo = await fetchTodo(todoId);

  if (!todo.id) return notFound();

  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
      <p>
        #{todo.id}:{todo.title}
      </p>
      <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
      <p className="border-t border-black mt-5 text-right">
        By User: {todo.userId}
      </p>
    </div>
  );
}

export default TodoPage;

export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const todos: Todo[] = await res.json();

  // for this DEMO, we are only prebuilding the first 10 pages to avoid being rate limited by the DEMO API
  const trimmedTodos = todos.splice(0, 10);

  return todos.map((todo) => ({
    todoId: todo.id.toString()
  }));
}

// fallback option in ISR
