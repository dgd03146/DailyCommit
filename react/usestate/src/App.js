import './App.css';

// function useState(initialValue) {
//   let state = initialValue; // store the current state value

//   // define the setState function
//   function setState(newValue) {
//     state = newValue;
//   }

//   // define the useState hook
//   return [state, setState];
// }

const useState = (initialVal) => {
  console.log(initialVal, 'initialVal');
  let innerState = initialVal;
  console.log(innerState, 'innerState');
  const state = () => {
    return innerState;
  };
  console.log(state, 'state');
  const setState = (newVal) => {
    innerState = newVal;
  };

  return [state, setState];
};

function App() {
  const [state, setState] = useState(0);

  function handleClick() {
    console.log(state, 'state');
    setState(state + 1);
  }

  return (
    <div>
      <p>{state}</p>
      <button onclick={handleClick}>Increment</button>
    </div>
  );
}

export default App;
