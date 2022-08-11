// serverWithExrpess.js
const http = require("http");
const express = require("express");
const { createUser } = require("./user");
const { createPost } = require("./user");

const app = express();
app.use(express.json());

app.get("/ping", (req, res) => {
  res.json({ message: "/ pong" });
});

app.post("/signup", createUser); // 첫번째 인자에는 endpoint url 을 기입하고,
app.post("/write", createPost);
app.post("/login", (req, res) => {
  res.json("login success");
}); // 각각의 요청에 대해 핸들링 하는 함수를 두번째 인자로 넣습니다.

const server = http.createServer(app);

server.listen(8000, () => {});

// const http = require("http");
// const { sendProducts } = require("./sendProducts");

// const server = http.createServer((req, res) => {
//   console.log("request received");
//   const { url, method } = req;
//   res.setHeader("Content-Type", "application/json");

//   if (url === "/ping") {
//     return res.end(JSON.stringify({ message: "/ pong" }));
//   }

//   if (url === "/signup" && method === "POST")
//     return res.end(JSON.stringify({ message: "회원가입 완료!" }));
//   if (url === "/login" && method === "POST")
//     return res.end(JSON.stringify({ message: "로그인 완료!" }));
//   if (url === "/products" && method === "GET") return sendProducts(res);
// });

// server.listen(8000, () => {
//   console.log("server is running on PORT 8000");
// });
