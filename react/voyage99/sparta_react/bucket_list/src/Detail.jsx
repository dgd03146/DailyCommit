import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeBucket, updateBucket } from './redux/modules/bucket';

const Detail = () => {
  const params = useParams();

  const bucket_index = params.index;
  const bucket_list = useSelector((state) => state.bucket.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(bucket_list[bucket_index], '체크해보자');

  const onRemove = () => {
    dispatch(removeBucket(bucket_index));
    navigate(-1);
    console.log('삭제합니다');
  };

  const onUpdate = () => {
    dispatch(updateBucket(bucket_index));
  };

  return (
    <div className="detail">
      {bucket_list[bucket_index] && <h1>{bucket_list[bucket_index].text}</h1>}
      <button onClick={onUpdate}>완료하기</button>
      <button onClick={onRemove}>삭제하기</button>
    </div>
  );
};

export default Detail;
