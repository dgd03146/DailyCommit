import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dog = () => {
  let navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate('/');
      }}
    >
      Dog
    </div>
  );
};

export default Dog;
