import Habit from './habit';
import HabitAddForm from './habitAddForm';

const Habits = ({
  habits,
  onIncrement,
  onDecrement,
  onDelete,
  onEdit,
  onAdd,
  onReset,
}) => {
  return (
    <div className="habits">
      <HabitAddForm onAdd={onAdd} />
      <ul className="habits">
        {habits.map(habit => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </ul>
      <button className="habits-reset" onClick={onReset}>
        Reset All
      </button>
    </div>
  );
};

export default Habits;
