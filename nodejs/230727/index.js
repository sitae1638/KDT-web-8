// const { age } = require("./module.js");
// console.log(age);
const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  //   response.writeHead(200);
  //   response.write("<h1>hello world</h1>");
  //   response.end("<p>End</p>");

  // 파일전송
  try {
    const data = fs.readFileSync("./index.html");
    response.writeHead(200);
    response.end(data);
  } catch (error) {
    console.log(error);
    response.writeHead(404);
    response.end(erroe.message);
  }
});
server.listen(8001, function () {
  console.log("localhost:8001번 포트로 실행");
});
//보통 개발할때는 8888 등의 숫자를 이용한다. 8천번대나 3천번대를 이용한다.
//우리는 express를 이용해서 node.js를 할거다
//우리는 항상 3000번 포트 이상을 써야 한다.
//http는 이런게 있구나 정도만 알면 된다.
//
