import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeBucket } from './redux/modules/bucket';

const Detail = () => {
  const params = useParams();
  const bucket_index = params.index;
  const bucket_list = useSelector((state) => state.bucket.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRemove = () => {
    dispatch(removeBucket(bucket_list[bucket_index]));
    navigate(-1);
  };

  return (
    <div className="detail">
      <h1>{bucket_list[bucket_index]}</h1>
      <button onClick={onRemove}>삭제하기</button>
    </div>
  );
};

export default Detail;
