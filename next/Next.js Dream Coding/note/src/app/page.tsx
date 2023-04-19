import Image from 'next/image';
import os from 'os'; // 노드 APIs

export default function Home() {
  console.log('안녕ㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂ');
  console.log(os.hostname());
  return <h1>홈페이지다!</h1>;
}
