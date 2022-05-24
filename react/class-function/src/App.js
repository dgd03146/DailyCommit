import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [funcShow, setFuncShow] = useState(true);
  const [classShow, setClassShow] = useState(true);

  return (
    <div className="container">
      <h1>Hello World</h1>
      <input
        type="button"
        value="remove func"
        onClick={function () {
          setFuncShow(false);
        }}
      />
      <input
        type="button"
        value="remove class"
        onClick={function () {
          setClassShow(false);
        }}
      />
      {funcShow ? <FuncComp initNumber={2}></FuncComp> : null}
      {classShow ? <ClassComp initNumber={2}></ClassComp> : null}
    </div>
  );
}
let funcStyle = 'color:blue';
let funcId = 0;

function FuncComp(props) {
  //props의 값은 아무거나 해도 된다.
  const [number, setNumber] = useState(props.initNumber);
  const [date, setDate] = useState(new Date().toString());
  useEffect(
    function () {
      console.log(
        '%cfunc => useEffect date componentDidMount & componentDidUpdate ' +
          ++funcId,
        funcStyle
      );
      document.title = date;
      return function () {
        console.log(
          '%cfunc => useEffect return componentDidMount & componentDidUpdate ' +
            ++funcId,
          funcStyle
        );
      };
    },
    [date]
  );

  console.log('%cfunc => render' + ++funcId, funcStyle);

  return (
    <div className="container">
      <h1>function style component</h1>
      <p>Number : {number}</p>
      <p>Date :{date}</p>
      <input
        type="button"
        value="random"
        onClick={function () {
          setNumber(Math.random());
        }}
      />
      <input
        type="button"
        value="date"
        onClick={function () {
          setDate(new Date().toString());
        }}
      />
    </div>
  );
}
let classStyle = 'color:red';

class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber, //state의 값을 바꿀때마다 render함수가 호출된다.
    date: new Date().toString(),
  };

  componentDidMount() {
    console.log('%cclass => componentDidMount', classStyle);
  }

  render() {
    console.log('%cclass => render', classStyle);
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input
          type="button"
          value="random"
          onClick={function () {
            this.setState({ number: Math.random() });
          }.bind(this)}
        />
        <input
          type="button"
          value="date"
          onClick={function () {
            this.setState({ date: new Date().toString() });
          }.bind(this)}
        />
      </div>
    );
  }
}

export default App;
