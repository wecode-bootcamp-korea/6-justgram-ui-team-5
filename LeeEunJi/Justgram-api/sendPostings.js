let feed = [
  {
    id: "1",
    firstName: "Lee",
    lastName: "Eunji",
    mobileNumber: "010-1234-5678",
    posts: [
      {
        id: "1",
        title: "저스트코드 1일차",
        content: "HTML과 CSS익숙해지기",
        userId: "1",
      },
      {
        id: "2",
        title: "저스트코드 2일차",
        content: "Javascript 기본문법",
        userId: "1",
      },
      {
        id: "3",
        title: "저스트코드 3일차",
        content: "웹 서비스의 역사와 발전",
        userId: "1",
      },
    ],
  },
  {
    id: "2",
    firstName: "Park",
    lastName: "Code",
    mobileNumber: "010-1111-1111",
    posts: [
      {
        id: "5",
        title: "자료구조1번",
        content: "BigONotation이란",
        userId: "2",
      },
      {
        id: "6",
        title: "자료구조2번",
        content: "시간복잡도와 공간복잡",
        userId: "2",
      },
    ],
  },
  {
    id: "3",
    firstName: "Kim",
    lastName: "Code",
    mobileNumber: "010-2222-2222",
    posts: [
      {
        id: "7",
        title: "프론트개발입문",
        content: "프론트입문 HTML이란",
        userId: "3",
      },
    ],
  },
  {
    id: "4",
    firstName: "Choo",
    lastName: "Code",
    mobileNumber: "010-3333-3333",
    posts: [],
  },
];

console.log(JSON.stringify(feed, null, 4));
