const http = require('http');
const fs = require('fs');
// const http2 = require('http2'); // http2는 모든 브라우저에서 https와 함께 적용이 된다. 개발 pc에는 http certificate가 없다. 나중에 배포할 때

const server = http.createServer((req, res) => {
  console.log('incoming...');
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  console.log(req.url);
  const url = req.url;
  res.setHeader('Content-Type', 'text/html');
  if (url === '/') {
    fs.createReadStream('./html/index.html').pipe(res);
  } else if (url === '/courses') {
    fs.createReadStream('./html/course.html').pipe(res);
  } else {
    fs.createReadStream('./html/not-found.html').pipe(res);
  }
  res.end();
});

// 서버에 어떤 포트에서 들을건지 listen을 해야 서버를 동작 시킬 수 있음
server.listen(8080);
