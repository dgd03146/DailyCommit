import React from 'react';

const Start = ({ name }) => {
  return (
    <div className="start">
      <div>
        <img
          src="https://blog.kakaocdn.net/dn/b7LcY4/btqLpwlD5cW/LCBsdNWknX8CP2Vc0kvguK/img.gif"
          alt=""
        />
        <div className="name-wrap">
          <h1>나는</h1>
          <h1 className="name">{name}</h1>
        </div>
        <h1>에 대해서 얼마나 알고 있을까?</h1>
      </div>
      <div className="input-wrap">
        <input type="text" placeholder="내 이름" />
        <button>시작하기</button>
      </div>
    </div>
  );
};

export default Start;
