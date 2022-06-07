import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Edit = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  console.log('id: ', id);

  const mode = searchParams.get('mode');
  console.log('mode: ', mode);

  return (
    <div>
      <h1>EDIT</h1>
      이곳은 EDIT입니다.
      <button onClick={() => setSearchParams({ who: 'winterload' })}>
        Query string 바꾸기
      </button>
      <button
        onClick={() => {
          navigate('/home');
        }}
      >
        HOME으로 가기
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로 가기
      </button>
    </div>
  );
};

export default Edit;
