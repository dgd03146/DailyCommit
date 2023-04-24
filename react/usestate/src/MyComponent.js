function useState(initialValue) {
  let state = initialValue; // store the current state value

  // define the setState function
  function setState(newValue) {
    state = newValue;
  }

  // define the useState hook
  return [state, setState];
}

function MyComponent() {
  const [state, setState] = useState(0);

  function handleClick() {
    setState(state + 1);
  }

  return (
    <div>
      <p>State: ${state}</p>
      <button onclick="handleClick()">Increment</button>
    </div>
  );
}
