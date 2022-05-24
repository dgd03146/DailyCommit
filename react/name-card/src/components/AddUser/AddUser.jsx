import React, { useRef } from 'react';
import styles from './AddUser.module.css';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

const AddUser = ({ onAdd, onShow, onMessage }) => {
  const nameInput = useRef();
  const ageInput = useRef();
  const formRef = useRef();

  const onShowMessage = (message, title) => {
    onShow();
    onMessage(message, title);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    let message, title;
    const name = nameInput.current.value;
    const age = ageInput.current.value;
    if (name.trim().length === 0 || age.trim().length === 0) {
      message = 'Please enter a valid name and age';
      title = 'Invalid Input';
      onShowMessage(message, title);
      return;
    } else if (age < 0) {
      message = 'Please enter a valid age (> 0)';
      title = 'Invalid Age';
      onShowMessage(message, title);
      return;
    }

    name && age && onAdd(name, age);
    formRef.current.reset();
  };

  return (
    <Card className={styles.form}>
      <form onSubmit={formSubmitHandler} ref={formRef}>
        <label htmlFor="username" className={styles.label}>
          Username
        </label>
        <input id="username" type="text" ref={nameInput} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" ref={ageInput} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
