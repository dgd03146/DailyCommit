import './App.css';
import { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import BucketList from './BucketList';
import Detail from './Detail';
import NotFound from './NotFound';
import { createBucket } from './redux/modules/bucket';

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
        <hr />
        <Routes>
          <Route path="/" element={<BucketList />} />
          <Route path="/detail/:index" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <div className="input-wrap">
          <input className="input" type="text" ref={inputRef} />
          <button onClick={onAdd}>추가하기</button>
        </div>
      </div>
    </div>
  );
}

export default App;
