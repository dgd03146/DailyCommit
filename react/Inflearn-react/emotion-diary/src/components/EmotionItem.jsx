import React from 'react';
import styles from './EmotionItem.module.css';
const EmotionItem = ({
  emotion_id,
  emotion_img,
  emotion_descript,
  onClick,
  isSelected
}) => {
  return (
    <div
      className={`${styles.EmotionItem} ${
        isSelected
          ? styles[`EmotionItem_on_${emotion_id}`]
          : styles.EmotionItem_off
      } `}
      onClick={() => onClick(emotion_id)}
    >
      <img src={emotion_img} alt="" />
      <span>{emotion_descript}</span>
    </div>
  );
};

export default React.memo(EmotionItem);
