import React, { memo } from 'react';

const Habit = memo(({ habit, onIncrement, onDecrement, onDelete, onEdit }) => {
  const handleIncrement = () => {
    onIncrement(habit);
  };
  const handleDecrement = () => {
    onDecrement(habit);
  };

  const handleDelete = () => {
    onDelete(habit);
  };
  const handleEdit = () => {
    onEdit(habit);
  };

  return (
    <li className="habit">
      <span className="habit-name">{habit.name}</span>
      <span className="habit-count">{habit.count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-circle"></i>
      </button>
      <button className="habit-button habit-decrease" onClick={handleDecrement}>
        <i className="fas fa-minus-circle"></i>
      </button>
      <button className="habit-button habit-delete" onClick={handleDelete}>
        <i className="fas fa-trash"></i>
      </button>
      <button className="habit-button habit-edit" onClick={handleEdit}>
        <i className="fas fa-edit"></i>
      </button>
    </li>
  );
});

export default Habit;
