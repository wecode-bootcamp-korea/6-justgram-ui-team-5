// 회원 정보
const users = [
  {
    id: 1,
    name: "userID_1",
    email: "userID_1@gmail.com",
    password: "1234",
  },
  {
    id: 2,
    name: "userID_2",
    email: "userID_2@gmail.com",
    password: "5678",
  },
];

// 회원가입 엔드포인트
const createUser = (req, res) => {
  /*
  대체 가능 코드

  // 클라이언트가 준 정보
  const { id, name, email, password } = req.body.data;

  // 회원 정보 배열에 클라이언트가 준 정보 추가
  users.push({
   id: id,
   name: name,
   email: email,
   password: password,
  });

  이떄 객체 특성상 key, value의 이름이 같으면 생략이 가능해서
  users.push({ id, name, email, password });
  */

  // 클라이언트의 body
  const user = req.body.data;

  // 게시글 목록에 클라이언트로부터 받은 데이터 추가
  users.push({
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
  });

  // 결과 띄우기
  res.json({ message: "userCreated" });
};

// 회원 게시물 정보
const posts = [
  {
    id: 1,
    title: "userID_1 이 작성한 게시물1 의 제목",
    content: "userID_1 이 작성한 게시물1 의 본문",
    userID: 1,
  },
  {
    id: 2,
    title: "userID_1 이 작성한 게시물1 의 제목",
    content: "userID_1 이 작성한 게시물1 의 본문",
    userID: 1,
  },
];

// 게시글 생성 엔드포인트
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

// app.js 에서 사용하기 위해 export 해줌
module.exports = { createUser, createPost };
