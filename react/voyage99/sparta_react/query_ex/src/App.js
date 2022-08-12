// App.js

import React from 'react';
import './App.css';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

// promise를 반환합니다!
// mock api에서 sleepList를 가져와요
const getSleepList = async () => {
  const res = await axios.get('http://localhost:5001/sleep_times');
  return res;
};

const addSleepData = (data) => {
  return axios.post('http://localhost:5001/sleep_times', data);
};

function App() {
  const day_input = React.useRef();
  const time_input = React.useRef();

  const queryClient = useQueryClient();

  const sleep_query = useQuery(['sleep_list'], getSleepList, {
    onSuccess: (data) => {
      console.log('성공했어!', data);
    }
  });

  const { mutate } = useMutation(addSleepData, {
    onSuccess: () => {
      // 수면 데이터 목록을 다시 불러오기!
      // mutation을 성공하면 수면 데이터 목록을 불러오는 useQuery를 무효화 시켜줍니다!
      queryClient.invalidateQueries(['sleep_list']);
      day_input.current.value = '';
      time_input.current.value = '';
    }
  });

  if (sleep_query.isLoading) {
    return null;
  }

  return (
    <div className="App">
      <div>
        {sleep_query.data.data.map((d) => {
          return (
            <div key={d.id}>
              <p>{d.day}</p>
              <p>{d.sleep_time}</p>
            </div>
          );
        })}
        <input ref={day_input} />
        <input ref={time_input} />
        <button
          onClick={() => {
            const data = {
              day: day_input.current.value,
              sleep_time: time_input.current.value
            };
            mutate(data);
          }}
        >
          데이터 추가하기
        </button>
      </div>
    </div>
  );
}

export default App;
