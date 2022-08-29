import React, { useEffect, useState, useCallback, useRef } from 'react';
import SockJS from 'sockjs-client';
import * as StompJS from '@stomp/stompjs';
import Container from './Container';

const Chat2 = () => {
  // – app: WebSocket으로의 앱으로 접속을 위한 포인트가 되며 메시지를 실제로 보낼 때 사용된다
  // – topic: 일 대 다수의 커넥션에서 메시지를 전송한다
  // – queue: 일 대 일의 커넥션에서 메시지를 전송한다
  // – user: 메시지를 보내기 위한 사용자를 특정한다
  // endpoint : "/api/ws"

  const [ms, setMs] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    // 페이지가 로딩 되었을때 연결
    wsSubscribe();

    // unmount 될때 클라이언트 비활성화
    return () => wsDisconnect();
  }, []);

  // client객체를 만들어 주도록 하겠습니다.
  const client = new StompJS.Client({
    brokerURL: 'ws://localhost:8080/ws/websocket', // 왜 websocket을 붙여줘야하는거지..?
    connectHeaders: {
      login: 'user',
      password: 'password'
    },
    debug: function (str) {
      console.log(str);
    }
  });

  // 클라이언트 활성화
  client.activate();

  const onClick = (message) => {
    console.log(client.connected);
    // client 연결 되었는지 체크 안되어있으면 return
    if (!client.connected) return;

    // 클라이언트와 서버가 연결 되면 publish 메서드로 메세지 보냄.
    client.publish({
      destination: '/app/hello', // destionation 은 어디로 메세지를 보낼지 결정
      body: JSON.stringify({
        // body는 보낼 내용
        message: message
      })
    });
  };

  // 연결 됐을때 실행할 함수
  const wsSubscribe = () => {
    client.onConnect = () => {
      //  대상에 대해 메세지를 받기 위해 subscribe 메서드를 사용
      client.subscribe(
        '/topic/message',
        (msg) => {
          const newMessage = JSON.parse(msg.body).message;
          setContent(newMessage);
        },
        { id: 'user' }
      );
    };

    // 에러처리를 담당하는 함수
    // client.onStompError = function (frame) {
    //   console.log('Broker reported error: ' + frame.headers['message']);
    //   console.log('Additional details: ' + frame.body);
    // };
  };

  const wsDisconnect = () => {
    client.deactivate();
  };

  return (
    <>
      <div>
        <div id="menu">
          <p>Welcome,</p>
        </div>
        <div>받은 메세지 : {content}</div>
        <Container sendMessage={onClick} />
      </div>
    </>
  );
};

export default Chat2;
