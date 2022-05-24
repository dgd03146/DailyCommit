const textObj = new String('Hello World');
const text = 'Hello World';
console.log(textObj);
console.log(text);
console.log(text.length); // 12 문자열 길이 확인

console.log(text[0]); // H
console.log(text[1]); // e
console.log(text[2]); // l
console.log(text.charAt(0)); // H
console.log(text.charAt(1)); // e
console.log(text.charAt(2)); //l

console.log(text.indexOf('l')); // 2
console.log(text.lastIndexOf('l')); // 9 뒤에서 부터 찾고 싶을때

console.log(text.includes('tx')); // false
console.log(text.includes('h')); // false
console.log(text.includes('H')); // true

console.log(text.startsWith('H')); // 시작하는 문자 체크
console.log(text.endsWith('H')); // 끝나는 문자 체크

console.log(text.toUpperCase()); // 대문자로 변경
console.log(text.toLocaleLowerCase()); // 소문자로 변경

console.log(text.substring(0, 2)); // He 부분적인 스트링 가져오기
console.log(text.slice(2)); // llo World 문자열 자르기
console.log(text.slice(-2)); // -붙이면 뒤에서부터 자르기

const space = '     space';
console.log(space.trim()); // space

// 알고리즘에서 정말 많이 사용함
const longText = 'Get to the point';
console.log(longText.split(' ')); // [ 'Get', 'to', 'the', 'point' ] 스페이스별로 문자 끊어서 배열로 변환
console.log(longText.split(', ', 2)); // [ 'Get to the point' ]
