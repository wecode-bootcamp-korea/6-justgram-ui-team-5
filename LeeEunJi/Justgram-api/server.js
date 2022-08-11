const express = require("express");
const cors = require("cors");
const app = express();
const feeds = require("../UI/data/feeds.json");

app.use(cors());

app.get("/ping", function (req, res) {
  res.json({ message: "pong" });
});

app.get("/feeds", function (req, res) {
  res.json(feeds);
});

app.listen(8000, function () {
  console.log("server is listening on port 8000");
});
