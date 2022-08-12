import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Progress = () => {
  const bucket_list = useSelector((state) => state.bucket.list);
  let count = bucket_list.filter((it) => it.completed === true).length;

  return (
    <ProgressBar>
      <HighLight width={(count / bucket_list.length) * 100 + '%'} />
      <Dot />
    </ProgressBar>
  );
};

export default Progress;

const ProgressBar = styled.div`
  background: lightgray;
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  border-radius: 10px;
`;

const HighLight = styled.div`
  background: #673ab7;
  transition: 300ms;
  width: ${(props) => props.width};
  height: 20px;
  border-radius: 10px;
`;

const Dot = styled.div`
  width: 40px;
  height: 40px;
  background: white;
  border: 5px solid #673ab7;
  border-radius: 40px;
  margin: 0px 0px 0px -10px;
`;
