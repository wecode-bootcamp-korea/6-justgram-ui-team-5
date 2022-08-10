// Node.js 내장 모듈 'http'
const http = require("http");

// express 모듈 가져오기
const express = require("express");

// user.js의 createUser, createPost 함수 가져오기
const { createUser, createPost } = require("./user");
// feedlist.js 의 lookupFeedList, editPost 함수 가져오기
const { lookupPost, editPost } = require("./post");

const app = express();
// 모든 결과를 json 형태로 반환하겠다. 라는 의미
app.use(express.json());

// app.method(endpoing url, handler function)
app.get("/ping", (req, res) => res.json({ message: "pong" }));
app.post("/signup", createUser); // 회원가입 엔드포인트
app.post("/posts", createPost); // 게시글 생성 엔드포인트
app.get("/postlist", lookupPost); // 게시글 목록 조회 엔드포인트
app.patch("/editpost", editPost); // 게시글 정보 수정 엔드포인트

// http.createServer(function)
const server = http.createServer(app);

// listen(port number, callback)
server.listen(8000, () => {
  console.log("server is listening on PORT 8000");
});
