import React from 'react';
import Habits from './components/habits';
import './app.css';
import { useState, useCallback } from 'react';
import Navbar from './components/navbar';

const App = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: 'Reading', count: 0 },
    { id: 2, name: 'Running', count: 0 },
    { id: 3, name: 'Coding', count: 0 },
  ]);

  const handleIncrement = useCallback(habit => {
    setHabits(habits =>
      habits.map(item => {
        if (habit.id === item.id) {
          return { ...habit, count: habit.count + 1 };
        }
        return item;
      })
    );
  }, []);

  const handleDecrement = useCallback(habit => {
    setHabits(habits =>
      habits.map(item => {
        if (habit.id === item.id) {
          const count = habit.count - 1;
          return { ...habit, count: count < 0 ? 0 : count };
        }
        return item;
      })
    );
  }, []);

  const handleDelete = useCallback(habit => {
    setHabits(habits => habits.filter(item => item.id !== habit.id));
  }, []);
  const handleEdit = useCallback(habit => {
    setHabits(habits =>
      habits.map(item => {
        if (habit.id === item.id) {
        }
      })
    );
  }, []);

  const handleAdd = useCallback(name => {
    setHabits(habits => [...habits, { id: Date.now(), name, count: 0 }]);
  }, []);

  const handleReset = useCallback(() => {
    setHabits(habits =>
      habits.map(item => {
        if (item.count > 0) {
          return { ...item, count: 0 };
        }
        return item;
      })
    );
  }, []);
  return (
    <div>
      <Navbar totalCount={habits.filter(item => item.count > 0).length} />
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onAdd={handleAdd}
        onReset={handleReset}
      />
    </div>
  );
};

export default App;
