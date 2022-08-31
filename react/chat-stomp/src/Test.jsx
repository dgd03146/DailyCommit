import React from 'react';
import * as StompJs from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const Test = () => {
  // endpoint: "/api/ws"

  // // 소켓 미지원 브라우저 대응
  // // if (typeof WebSocket !== 'function') {
  // //   client.webSocketFactory = function () {
  // //     return new SockJS('http://localhost:15674/stomp');
  // //   };
  // }

  // 클라이언트 객체를 만들어준다.
  const client = new StompJs.Client({
    // brokerURL이 http일 경우 ws를 https일 경우 wss를 붙여서 사용
    brokerURL: 'ws://43.200.6.110/api/ws',
    connectHeaders: {
      login: 'user',
      passcode: 'password'
    },
    debug: function (str) {
      console.log(str);
    },
    reconnectDelay: 5000, //자동 재 연결
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000
  });

  // 연결됐을때 실행할 함수와 에러처리를 담당하는 함수를 만들어 주도록 합니다
  client.onConnect = function (frame) {};

  client.onStompError = function (frame) {
    console.log('Broker reported error: ' + frame.headers['message']);
    console.log('Additional details: ' + frame.body);
  };

  // 그 후 클라이언트를 활성화 시켜줍니다
  client.activate();

  // 클라이언트 비활성화 해주고 싶을때. 활성화 연결 있는 경우 다시연결 및 연결을 중지한다.
  // client.deactivate();

  // ✉메세지 보내기
  // publish 메서드를 사용하여 메세지를 보낼 수 있습니다. destination는 목적지라는 뜻입니다 어디로 메세지를 보낼지를 결정합니다.
  // body는 보낼 내용입니다.
  client.publish({
    destination: '/topic/general', // topic: 일 대 다수의 커넥션에서 메시지를 전송한다.
    body: 'Hello world',
    headers: { priority: '9' }
  });

  // *v5부턴 바이너리 메세지 전송도 지원된다고 하네요! (header에 'content-type': 'application/octet-stream')로 contentType을 써줍니다.)

  // const binaryData = generateBinaryData();
  client.publish({
    destination: '/topic/special',
    binaryBody: binaryData,
    headers: { 'content-type': 'application/octet-stream' }
  });

  //  구독한 대상에 대해 메세지를 받기 위해 subscribe 메서드를 사용합니다!
  const subscription = client.subscribe('/queue/test', callback);

  return <div>Test</div>;
};

export default Test;
