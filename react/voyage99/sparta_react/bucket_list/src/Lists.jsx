import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Lists = () => {
  let navigate = useNavigate();
  const data = useSelector((state) => state.bucket.list);

  return (
    <div className="lists">
      <ul>
        {data.map((item, index) => {
          return (
            <li
              onClick={() => {
                navigate('/detail/' + index);
              }}
              key={index}
            >
              <h3>{item}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Lists;
