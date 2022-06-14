import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AuthContext from '../store/Auth-Context';
import styles from './Diary.module.css';

import { getStringDate } from '../util/date';
import { emotionList } from '../util/emotion';
import MyHeader from '../components/MyHeader';
import MyButton from '../components/MyButton';

const Diary = () => {
  const { id } = useParams();
  const { data } = useContext(AuthContext);
  const [diary, setDiary] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (data.length >= 1) {
      const targetDiary = data.find((it) => parseInt(it.id) === parseInt(id));

      if (targetDiary) {
        // 일기가 존재할때
        setDiary(targetDiary);
      } else {
        // 일기가 없을 때
        alert('없는 일기입니다.');
        navigate('/', { replace: true });
      }
    }
  }, [id, data]);

  if (!diary) {
    return <div className={styles.DiaryPage}>로딩중입니다....</div>;
  } else {
    const curEmotionData = emotionList.find(
      (it) => parseInt(it.emotion_id) === parseInt(diary.emotion)
    );

    return (
      <div className={styles.DiaryPage}>
        <MyHeader
          headText={`${getStringDate(new Date(diary.date))} 기록`}
          leftChild={
            <MyButton text={'<뒤로가기'} onClick={() => navigate(-1)} />
          }
          rightChild={
            <MyButton
              text={'<수정'}
              onClick={() => navigate(`/edit/${diary.id}`)}
            />
          }
        />
        <article>
          <section>
            <h4>오늘의 감정</h4>
            <div
              className={`${styles.emotion_img_wrapper} ${
                styles[`emotion_img_wrapper_${diary.emotion}`]
              }`}
            >
              <img src={curEmotionData.emotion_img} alt="" />
              <div className={styles.emotion_descript}>
                {curEmotionData.emotion_descript}
              </div>
            </div>
          </section>
          <section>
            <h4>오늘의 일기</h4>
            <div className={styles.content_wrapper}>
              <p>{diary.content}</p>
            </div>
          </section>
        </article>
      </div>
    );
  }
};

export default Diary;
