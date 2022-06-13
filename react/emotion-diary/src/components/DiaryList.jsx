import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from './MyButton';
import styles from './DiaryList.module.css';
import DiaryItem from './DiaryItem';

const sortOptionList = [
  { value: 'latest', name: '최신순' },
  { value: 'oldest', name: '오래된 순' }
];

const filterOptionList = [
  {
    value: 'all',
    name: '전부다'
  },
  {
    value: 'good',
    name: '좋은 감정만'
  },
  {
    value: 'bad',
    name: '안 좋은 감정만'
  }
];

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select
      className={styles.ControlMenu}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {optionList.map((item, idx) => (
        <option value={item.value} key={idx}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

const DiaryList = ({ diaryList }) => {
  const navigate = useNavigate();

  const [sortType, setSortType] = useState('latest');
  const [filter, setFilter] = useState('all'); // 감정필터의 state를 저장할 필터 모든 감정을 다 표현하기 위해서 기본값을 all로 지정.

  const getProcessedDiaryList = () => {
    const filterCallback = (item) => {
      if (filter === 'good') {
        return parseInt(item.emotion) <= 3;
      } else {
        return parseInt(item.emotion) > 3;
      }
    };

    const compare = (a, b) => {
      if (sortType === 'latest') {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };
    const copyList = [...diaryList];

    const filteredList =
      filter === 'all'
        ? copyList
        : copyList.filter((item) => filterCallback(item));

    const sortedList = filteredList.sort(compare);
    return sortedList;
  };

  return (
    <div className={styles.DiaryList}>
      <div className={styles.menu_wrapper}>
        <div className={styles.left_col}>
          <ControlMenu
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
          />
          <ControlMenu
            value={filter}
            onChange={setFilter}
            optionList={filterOptionList}
          />
        </div>
        <div className={styles.right_col}>
          <MyButton
            type={'positive'}
            text={'새 일기쓰기'}
            onClick={() => navigate('/new')}
          />
        </div>
      </div>

      {getProcessedDiaryList().map((item) => (
        <DiaryItem key={item.id} {...item} />
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: []
};

export default DiaryList;
