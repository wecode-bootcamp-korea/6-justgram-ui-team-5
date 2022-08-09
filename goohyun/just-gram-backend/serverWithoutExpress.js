const http = require("http");
const express = require("express");
const { sendProducts } = require("./sendProducts");
const { createUser } = require("./user");

const app = express();
app.use(express.json());

app.get("/ping", (req, res) => {
  res.json({ message: "/ pong!!" });
});
app.post("/signup", createUser);
app.post("/login", (req, res) => {
  res.json("login success");
});
app.get("/products", sendProducts);

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("server is listening on PORT 3000");
});
