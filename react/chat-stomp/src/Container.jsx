import React, { useState, useCallback } from 'react';

const Container = (props) => {
  const [ms, setMs] = useState('');
  const { sendMessage } = props;

  const _onChange = useCallback((e) => {
    setMs(e.target.value);
  }, []);

  return (
    <>
      <input value={ms} onChange={_onChange} name={'ms'} />
      <button
        type={'button'}
        onClick={() => {
          sendMessage(ms);
          setMs('');
        }}
      >
        전송
      </button>
    </>
  );
};

export default Container;
