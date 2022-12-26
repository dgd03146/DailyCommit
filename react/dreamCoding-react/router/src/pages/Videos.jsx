import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Videos = () => {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setText('');
    navigate(`/videos/${text}`);
  };
  return (
    <div>
      Videos
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="video id: "
          value={text}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Videos;
