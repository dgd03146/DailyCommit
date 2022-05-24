import React, { memo } from 'react';
const HabitAddForm = memo(({ onAdd }) => {
  const inputRef = React.createRef();
  const formRef = React.createRef();

  const onSubmit = event => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && onAdd(name); // name이 있다면 onAdd에다가 name전달
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className="habit-add" onSubmit={onSubmit}>
      <input
        className="add-input"
        ref={inputRef}
        type="text"
        placeholder="habits..."
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
