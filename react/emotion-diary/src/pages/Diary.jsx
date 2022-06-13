import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AuthContext from '../store/Auth-Context';
import styles from './Diary.module.css';

import { getStringDate } from '../util/date';
import MyHeader from '../components/MyHeader';
import MyButton from '../components/MyButton';
import { emotionList } from '../util/emotion';

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
    console.log(curEmotionData);

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
      </div>
    );
  }
};

export default Diary;
