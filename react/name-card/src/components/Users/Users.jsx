import React from 'react';
import User from '../User/User';
import styles from './Users.module.css';
import Card from '../UI/Card/Card';

const Users = ({ inputs }) => {
  return (
    <Card>
      <ul>
        {inputs.map(user => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </Card>
  );
};

export default Users;
