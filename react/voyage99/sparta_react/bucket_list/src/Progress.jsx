import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Progress = () => {
  const bucket_list = useSelector((state) => state.bucket.list);
  let count = bucket_list.filter((it) => it.completed === true).length;

  return (
    <ProgressBar>
      <HighLight width={(count / bucket_list.length) * 100 + '%'} />
    </ProgressBar>
  );
};

export default Progress;

const ProgressBar = styled.div`
  background: lightgray;
  width: 100%;
  height: 40px;
`;

const HighLight = styled.div`
  background: orange;
  transition: 300ms;
  width: ${(props) => props.width};
  height: 40px;
`;
