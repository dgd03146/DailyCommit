import { useState } from 'react';
import './App.css';
import Start from './Start';

function App() {
  const [name, setName] = useState('임거정');
  return (
    <div className="App">
      <Start name={name} />
    </div>
  );
}

export default App;
