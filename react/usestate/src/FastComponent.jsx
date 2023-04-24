import React from 'react';
import { useState } from 'react';

const FastComponent = ({ value, onChange }) => {
  console.log('Fast component is executed!!!');
  return (
    <div>
      <p>{value}</p>
      <button onChange={onChange}>Click</button>
    </div>
  );
};

export default FastComponent;
