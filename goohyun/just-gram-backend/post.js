// 게시글 목록
const posts = [
  {
    userID: 1,
    userName: "userID_1",
    postingId: 1,
    postingTitle: "userID_1 이 작성한 게시물1 의 제목",
    postingContent: "userID_1 이 작성한 게시물1 의 본문",
  },
  {
    userID: 2,
    userName: "userID_2",
    postingId: 2,
    postingTitle: "userID_2 이 작성한 게시물1 의 제목",
    postingContent: "userID_2 이 작성한 게시물1 의 본문",
  },
  {
    userID: 3,
    userName: "userID_3",
    postingId: 3,
    postingTitle: "userID_3 이 작성한 게시물1 의 제목",
    postingContent: "userID_3 이 작성한 게시물1 의 본문",
  },
  {
    userID: 4,
    userName: "userID_4",
    postingId: 4,
    postingTitle: "userID_4 이 작성한 게시물1 의 제목",
    postingContent: "userID_4 이 작성한 게시물1 의 본문",
  },
];

// 게시글 목록 조회 엔드포인트
const lookupPost = (req, res) => {
  res.json({ data: posts });
};

// 게시글 정보 수정 엔드포인트
const editPost = (req, res) => {
  const editedPost = req.body.data;
  res.json({ data: editedPost });
};

// app.js 에서 사용하기 위해 export 해줌
module.exports = { lookupPost, editPost };
