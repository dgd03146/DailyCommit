import React, { useParams } from 'react';

const Diary = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h1>DIARY</h1>
      이곳은 DIARY입니다.
    </div>
  );
};

export default Diary;
