import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { React, useState } from 'react/cjs/react.development';

const NewExpense = props => {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Date.now(),
    };
    props.onAddExpense(expenseData);
  };

  const formHandler = () => {
    setShowForm(prevState => !prevState);
  };

  return (
    <div className="new-expense">
      {!showForm && (
        <div className="new-expense__actions">
          <button type="submit" onClick={formHandler}>
            Add Expense
          </button>
        </div>
      )}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onShowForm={formHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
