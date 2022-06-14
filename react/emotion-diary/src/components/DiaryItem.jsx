import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './DiaryItem.module.css';
import MyButton from './MyButton';

const DiaryItem = ({ id, emotion, content, date }) => {
  const navigate = useNavigate();
  const strDate = new Date(parseInt(date)).toLocaleDateString();

  const goDetail = () => {
    navigate(`/diary/${id}`);
  };

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className={styles.DiaryItem}>
      <div
        onClick={goDetail}
        className={`${styles.emotion_img_wrapper} ${
          styles[`emotion_img_wrapper_${emotion}`]
        }`}
      >
        <img
          src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`}
          alt=""
        />
      </div>
      <div onClick={goDetail} className={styles.info_wrapper}>
        <div className={styles.diary_date}>{strDate}</div>
        <div className={styles.diary_content_preview}>
          {content.slice(0, 25)}
        </div>
      </div>
      <div className={styles.btn_wrapper}>
        <MyButton text={'수정하기'} onClick={goEdit} />
      </div>
    </div>
  );
};

export default React.memo(DiaryItem);
