// Node.js 내장 모듈 'http'
const http = require("http");

// express 모듈 가져오기
const express = require("express");

// user.js의 createUser 함수 가져오기
const { createUser } = require("./user");
// post.js의 createPost 함수 가져오기
const { createPost } = require("./post");

const app = express();
// 모든 결과를 json 형태로 반환하겠다. 라는 의미
app.use(express.json());

// app.method(endpoing url, handler function)
// 클라이언트로부터 받은 회원정보를 "회원 정보 배열(user)" 에 추가
app.post("/signup", createUser);
app.post("/posts", createPost);

// http.createServer(function)
const server = http.createServer(app);

// listen(port number, callback)
server.listen(8000, () => {
  console.log("server is listening on PORT 8000");
});
