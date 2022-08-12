import React, { useContext, useEffect, useRef, useState } from 'react';
import { DiaryDispatchContext } from './App';

const DiaryItem = ({ item }) => {
  const { onEdit, onRemove } = useContext(DiaryDispatchContext);

  const [isEdit, setIsEdit] = useState(false);

  const [localContent, setLocalContent] = useState(item.content);
  const localContentInput = useRef();

  const toggleIsEdit = () => setIsEdit(!isEdit);

  const handleChangeState = (e) => {
    setLocalContent(e.target.value);
  };

  const handleRemove = () => {
    if (window.confirm(`${item.id}번째 일기를 정말 삭제하시겠습니까?`))
      onRemove(item.id);
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(item.content);
  };

  const handleEdit = () => {
    if (localContent.lenth < 5) {
      localContentInput.current.focus();
      return;
    }

    if (window.confirm(`${item.id}번째 일기를 수정하시겠습니까?`)) {
      onEdit(item.id, localContent);
      toggleIsEdit();
    }
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          | 작성자 : {item.author} | 감정점수 : {item.emotion}
        </span>
        <br />
        <span className="date">
          {new Date(item.created_date).toLocaleString()}
        </span>
      </div>
      <div className="content">
        {isEdit ? (
          <textarea
            ref={localContentInput}
            value={localContent}
            onChange={handleChangeState}
          ></textarea>
        ) : (
          item.content
        )}
      </div>
      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정 취소</button>
          <button onClick={handleEdit}>수정 완료</button>
        </>
      ) : (
        <>
          <button onClick={handleRemove}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};

export default React.memo(DiaryItem);
