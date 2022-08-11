const users = [
  {
    id: 1,
    name: "Lee EunJi",
    email: "zmz14s@gmail.com",
    password: "1124",
  },
  {
    id: 2,
    name: "Kim Code",
    email: "kimcode@gmail.com",
    password: "1234",
  },
];

const posts = [
  {
    id: 1,
    title: "오늘 날씨 너무 좋다",
    content: "와.... 너무좋다.....",
    userId: 1,
  },
  {
    id: 2,
    title: "여름 너무 좋아",
    content: "비오는날 너무좋아",
    userId: 1,
  },
];

const createUser = (req, res) => {
  const user = req.body.data; // 프론트에서 받아온 정보를 가져옵니다.

  users.push({
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
  });

  res.json({ message: "USER_CREATED" });
  // express 덕분에 JSON.stringify 함수를 사용할 필요없이
  // response 객체의 json 메소드를 활용합니다.
};

const createPost = (req, res) => {
  const post = req.body.data;

  posts.push({
    id: post.id,
    title: post.title,
    content: post.content,
    userId: post.userId,
  });
  res.json({ message: "POST_CREATED" });
};

module.exports = { createUser, createPost }; //  모듈로 내보냅니다.
