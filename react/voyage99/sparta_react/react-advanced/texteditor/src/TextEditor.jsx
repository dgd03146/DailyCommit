import React from 'react';
import { useRef } from 'react';

const TextEditor = ({ onShow }) => {
  const inputRef = useRef();
  const handleShowText = () => {
    onShow(inputRef.current.value);
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  return (
    <div className="textEditor">
      <input ref={inputRef} />
      <button onClick={handleShowText}>완성</button>
    </div>
  );
};

export default TextEditor;
