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
  // 클라이언트가 준 정보
  const user = req.body.data;

  // 회원 정보 배열에 클라이언트가 준 정보 추가
  users.push({
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
  });

  // 결과 띄우기
  res.json({ message: "userCreated" });
};

// app.js 에서 사용하기 위해 export 해줌
module.exports = { createUser };
