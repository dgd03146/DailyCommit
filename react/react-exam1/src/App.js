import { useState, useRef } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import LifeCycle from './LifeCycle';

function App() {
  const [data, setState] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current
    };
    dataId.current += 1;

    setState([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    const newDiaryList = data.filter((item) => item.id !== targetId);
    setState(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setState(
      data.map((item) =>
        item.id === targetId ? { ...item, content: newContent } : item
      )
    );
  };

  return (
    <div className="App">
      <LifeCycle />
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} onRemove={onRemove} onEdit={onEdit} />
    </div>
  );
}

export default App;
