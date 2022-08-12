import React from 'react';
import styles from './User.module.css';

const User = ({ user }) => {
  return (
    <li className={styles.list}>
      <span className={styles.name}>{user.name}</span>
      <span className={styles.age}>({user.age} years old)</span>
    </li>
  );
};

export default User;
