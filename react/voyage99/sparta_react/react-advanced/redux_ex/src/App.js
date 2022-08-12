import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
// import { changeName } from '././redux/modules/cat';
import { changeName } from './redux/modules/catSlice';

function App() {
  const cat = useSelector((state) => state.cat);
  const dispatch = useDispatch();
  console.log(cat);

  return (
    <div className="App">
      <p>name:::: {cat.name}</p>
      <button
        onClick={() => {
          dispatch(changeName('루비'));
        }}
      >
        이름 바꾸기
      </button>
    </div>
  );
}

export default App;
