import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const callSomething = async () => {
    let data = {
      day: '일',
      sleep_time: '10:00'
    };

    const response = await fetch('http://localhost:5001/sleep_times', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(data)
    });
    console.log(response);
  };

  const callSomethingAxios = () => {
    let data = {
      day: '일',
      sleep_time: '10:00'
    };

    // axios({
    //   method: 'get',
    //   url: 'http://localhost:5001/sleep_times'
    // }).then((response) => {
    //   console.log(response);
    // });
    // axios.get('http://localhost:5001/sleep_times', {}).then((response) => {
    //   console.log(response);
    // });
    axios.post('http://localhost:5001/sleep_times', data).then((response) => {
      console.log(response);
    });
  };

  React.useEffect(() => {
    // callSomethingAxios();
    // callSomething(); fetch
    // let xhr = new XMLHttpRequest();
    // xhr.open('GET', 'http://localhost:5001/sleep_times'); // 요청
    // xhr.send(); // 요청 보냄 성공
    // // XMLHttpRequest.readyState
    // xhr.onreadystatechange = function () {
    //   if (xhr.readyState === 4) {
    //     console.log(xhr.responseText);
    //   }
    // };
    // // 완료된 경우에만
    // xhr.onload = function () {
    //   console.log(xhr.responseText);
    // };
  }, []);

  const axiosPing = async () => {
    const res = await axios.get('http://localhost:5001/ping');
    console.log(res);
    window.alert(res.data.answer);
  };

  return (
    <div className="App">
      <button onClick={axiosPing}>악시오스를 사용해서 요청!</button>
    </div>
  );
}

export default App;
