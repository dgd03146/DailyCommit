import React from 'react';
import { useParams } from 'react-router-dom';

const Cat = () => {
  const cat_name = useParams();
  console.log(cat_name);
  return <div>Cat</div>;
};

export default Cat;
