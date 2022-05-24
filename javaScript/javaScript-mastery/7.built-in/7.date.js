// UTC기준 (협정 세계사, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(new Date()); // 2022-04-28T11:48:32.392Z 현재시간 출력됨
console.log(new Date('Jun 5, 2022')); // 2022-06-04T15:00:00.000Z
console.log(new Date('2022-12-17T03:24:00'));

console.log(Date.now());
console.log(Date.parse('2022-12-17T03:24:00'));

const now = new Date();
now.setFullYear(2023);
now.setMonth(10); // month는 0이 1월

console.log(now.getFullYear());
console.log(now.getDate()); // 0:1
console.log(now.getDay()); // 0일요일부터, 1.. 월
console.log(now.getTime());
console.log(now); // 2023-11-28T11:51:12.024Z

console.log(now.toString()); // Tue Nov 28 2023 20:53:10 GMT+0900 (대한민국 표준시)
console.log(now.toDateString()); // 날짜만 표기
console.log(now.toTimeString()); // 시간만 표기
console.log(now.toISOString()); // ISO 8601 형식
console.log(now.toLocaleDateString('en-US'));
console.log(now.toLocaleDateString('ko-KR'));

// 나중에 블로그나 웹사이트 만들때 작성시간 표기할때 유용함.
