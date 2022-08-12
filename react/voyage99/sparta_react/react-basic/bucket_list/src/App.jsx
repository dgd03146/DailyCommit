import './App.css';
import { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import BucketList from './BucketList';
import Detail from './Detail';
import NotFound from './NotFound';
import { createBucket } from './redux/modules/bucket';
import Progress from './Progress';

function App() {
  const inputRef = useRef();

  const dispatch = useDispatch();

  const onAdd = () => {
    dispatch(createBucket(inputRef.current.value));
  };

  return (
    <div className="App">
      <div className="bucketList">
        <h1 className="title">내 버킷리스트</h1>
        <Progress />
        <br />
        <hr />
        <Routes>
          <Route path="/" element={<BucketList />} />
          <Route path="/detail/:index" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <div className="input-wrap">
          <input className="input" type="text" ref={inputRef} />
          <button onClick={onAdd}>추가하기</button>
          <button
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
            }
          >
            위로 가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
