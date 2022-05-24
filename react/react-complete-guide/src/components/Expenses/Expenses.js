import React, { useState } from 'react/cjs/react.development';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFitler';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2022');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(
    item => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
