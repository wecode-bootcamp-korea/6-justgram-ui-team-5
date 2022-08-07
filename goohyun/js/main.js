const commentWriteInput = document.getElementsByClassName(
  "comment-write-input"
);
const commentWriteButton = document.getElementsByClassName(
  "comment-write-button"
);
const commentList = document.getElementsByClassName("feed-comment-list");
const feedList = document.getElementsByClassName("feed-image-wrapper");
const likeList = document.getElementsByClassName("feed-menu-like");

// feeds IMG 동적 추가
fetch("../data/feeds.json")
  .then((res) => res.json())
  .then((data) => {
    // userID, feedIMG 가 담긴 객체를 요소로하는 배열
    let feedArray = data.feeds;

    feedArray.forEach((feed, index) => {
      // img 태그 생성
      const imgElem = document.createElement("img");
      imgElem.className = "feed-image";
      imgElem.src = feed.feedIMG;

      // 적용
      feedList[index].append(imgElem);
    });
  });

// 좋아요 이벤트
Array.from(likeList).forEach((likeIcon) => {
  likeIcon.addEventListener("click", function (e) {
    // 이미지 경로를 로컬경로(String)으로 선언, 할당
    const findimgRoute = likeIcon.src.split("/");
    const imgRoute = `./${findimgRoute[3]}/${findimgRoute[4]}`;

    // 빈하트 >> 꽉찬하트
    if (imgRoute === "./image/heart.png") {
      likeIcon.src = "./image/red-heart.png";
      // 꽉찬하트 >> 빈하트
    } else if (imgRoute === "./image/red-heart.png") {
      likeIcon.src = "./image/heart.png";
    }
  });
});

// 이미 존재하는 댓글 json에서 받아서 출력하기
fetch("../data/comments.json")
  .then((res) => res.json())
  .then((data) => {
    // userID, content가 들어있는 객체를 요소로 갖는 배열
    let commentArray = data.comments;

    // comments 배열 요소 돌기
    commentArray.forEach((comment) => {
      // html에서 클래스가 feed-comment-list인 요소 돌기
      for (let i = 0; i < commentArray.length; i++) {
        // userID, content를 담는 div 만들기
        const commentElem = document.createElement("div");

        // userID span
        const nameSpan = document.createElement("span");
        nameSpan.className = "comment-user-ID";
        nameSpan.textContent = comment.userID;

        // userID, content를 담고있는 div에 댓글내용 넣기
        const content = comment.content;

        // html에 적용
        commentElem.append(nameSpan, content);
        commentList[i].append(commentElem);
      }
    });
  });

// 댓글 동적 추가
Array.from(commentWriteButton).forEach((button, index) => {
  button.addEventListener("click", function (e) {
    // 게시 버튼이 click된 button요소와 index를 가져와서

    // 댓글 달기 input요소의 value를 content에 할당
    const content = commentWriteInput[index].value;

    // userID와 content를 담는 div 만들기
    const childElem = document.createElement("div");

    // userID
    const nameSpan = document.createElement("span");
    nameSpan.className = "comment-user-ID";
    nameSpan.textContent = "현";

    // html에 적용
    childElem.append(nameSpan, content);
    commentList[index].appendChild(childElem);
  });
});
