import TodoList from './components/TodoList';

function App() {
  const todos = [{ id: 't1', text: 'Finish the course' }];
  return (
    <div className="App">
      {/* A component that adds todo */}
      <TodoList items={todos} />
    </div>
  );
}

export default App;
