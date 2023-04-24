import React, { useReducer } from 'react';
import FastComponent from './FastComponent';

export function User({ name }) {
  const [count, increment] = useReducer((prev) => prev + 1, 1);

  const useState = (initialVal) => {
    let innerState = initialVal;
    const state = () => innerState;
    const setState = (newVal) => {
      innerState = newVal;
    };

    return [state, setState];
  };

  // 🚨 name can become stale
  const logUser = () => {
    console.log(name, count);
  };

  return (
    <div>
      <button onClick={increment}>increment</button>
      <button onClick={logUser}>log</button>
      <FastComponent value={count} onChange={logUser} />
    </div>
  );
}
