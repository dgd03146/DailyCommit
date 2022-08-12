import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>주소가 올바르지 않아요!</h1>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default NotFound;
