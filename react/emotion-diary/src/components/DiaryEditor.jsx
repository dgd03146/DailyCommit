import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyHeader from './MyHeader';
import MyButton from './MyButton';
import styles from './DiaryEditor.module.css';
import EmotionItem from './EmotionItem';
import AuthContext from '../store/Auth-Context';

import { emotionList } from '../util/emotion';
import { getStringDate } from '../util/date';

const DiaryEditor = ({ isEdit, originData }) => {
  const { create, edit } = useContext(AuthContext);

  const contentRef = useRef();
  const [content, setContent] = useState('');
  const [emotion, setEmotion] = useState(3);
  const [date, setDate] = useState(getStringDate(new Date()));

  const handleClickEmote = (emotion) => {
    setEmotion(emotion);
  };

  const handleSubmit = () => {
    if (content.length < 1) {
      // 안썼으면 focus
      contentRef.current.focus();
      return;
    }

    if (
      window.confirm(
        isEdit ? '일기를 수정하시겠습니까?' : '새로운 일기를 작성하시겠습니까?'
      )
    ) {
      if (!isEdit) {
        create(date, content, emotion);
      } else {
        edit(originData.id, date, content, emotion);
      }
    }

    navigate('/', { replace: true });
  };

  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(originData.date))));
      setEmotion(originData.emotion);
      setContent(originData.content);
    }
  }, [isEdit, originData]);

  const navigate = useNavigate();

  return (
    <div className={styles.DiaryEditor}>
      <MyHeader
        headText={isEdit ? '일기 수정하기' : '새 일기 쓰기'}
        leftChild={<MyButton text={'뒤로 가기'} onClick={() => navigate(-1)} />}
      />
      <div>
        <section>
          <h4>오늘은 언제인가요?</h4>
          <div className={styles.inputBox}>
            <input
              className={styles.inputDate}
              value={date}
              type="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </section>
        <section>
          <h4>오늘의 감정</h4>
          <div className={`${styles.inputBox} ${styles.emotionListWrapper}`}>
            {emotionList.map((item) => (
              <EmotionItem
                key={item.emotion_id}
                {...item}
                onClick={handleClickEmote}
                isSelected={item.emotion_id === emotion}
              />
            ))}
          </div>
        </section>
        <section>
          <h4>오늘의 일기</h4>
          <div className={styles.textWrapper}>
            <textarea
              placeholder="오늘은 어땠나요"
              ref={contentRef}
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          </div>
        </section>
        <section>
          <div className={styles.controlBox}>
            <MyButton text={'취소하기'} onClick={() => navigate(-1)} />
            <MyButton
              text={'작성완료'}
              type={'positive'}
              onClick={handleSubmit}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiaryEditor;
