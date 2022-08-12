import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ShowText from './ShowText';
import TextEditor from './TextEditor';

function App() {
  const [inputValue, setInputValue] = useState();

  const onShow = (value) => {
    setInputValue(value);
  };

  return (
    <div className="App">
      <ShowText inputValue={inputValue} />
      <TextEditor inputValue={inputValue} onShow={onShow} />
    </div>
  );
}

export default App;
