import React, { useState, useRef, useEffect, useContext } from 'react';
import { DiaryDispatchContext } from './App';

const DiaryEditor = React.memo(() => {
  const { onCreate } = useContext(DiaryDispatchContext);

  const [state, setState] = useState({
    author: '',
    content: '',
    emotion: 1
  });

  const authorInput = useRef();
  const contentInput = useRef();

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
    }

    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }

    onCreate(state.author, state.content, state.emotion);
    alert('저장 성공');
    setState({
      author: '',
      content: '',
      emotion: '1'
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          name="author"
          ref={authorInput}
          value={state.author}
          onChange={handleChangeState}
        />
      </div>

      <div>
        <textarea
          name="content"
          ref={contentInput}
          value={state.content}
          onChange={handleChangeState}
        />
      </div>

      <div>
        <span>오늘의 감정점수 : </span>

        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
});

export default DiaryEditor;
