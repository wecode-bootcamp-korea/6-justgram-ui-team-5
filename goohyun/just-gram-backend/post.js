// 회원 게시물 정보
const posts = [
  {
    id: 1,
    title: "userID_1 이 작성한 게시물2 의 제목",
    content: "userID_1 이 작성한 게시물2 의 본문",
    userID: 1,
  },
  {
    id: 2,
    title: "userID_1 이 작성한 게시물2 의 제목",
    content: "userID_1 이 작성한 게시물2 의 본문",
    userID: 1,
  },
];

const createPost = (req, res) => {
  const post = req.body.data;

  posts.push({
    id: post.id,
    title: post.title,
    content: post.content,
    userID: post.userID,
  });

  res.json({ message: "postCreated" });
};

module.exports = { createPost };
