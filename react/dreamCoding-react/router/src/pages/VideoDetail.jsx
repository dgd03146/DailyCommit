import React from 'react';
import { useParams } from 'react-router-dom';

const VideoDetail = () => {
  const { videoId } = useParams();
  return <div>VideoDetail {videoId}</div>;
};

export default VideoDetail;
