import React from 'react';

const DiaryEditor = () => {
  return (
    <div>
      <h2>오늘의 일기</h2>
      <input className="author" type="text" />
      <br />
      <textarea
        className="content"
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <br />
      <label htmlFor="">오늘의 감정점수</label>
      <select name="" id="">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button></button>
    </div>
  );
};

export default DiaryEditor;
