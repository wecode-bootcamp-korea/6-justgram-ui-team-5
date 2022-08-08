const $cardTopUsername = document.getElementsByClassName("cardTopUsername");
const $profilePicture = document.getElementsByClassName("profilePicture");
const $cardImgUrl = document.getElementsByClassName("cardImgUrl");
const $card = document.getElementsByClassName("card");
const $feed = document.querySelector(".feed");
const $listInputArea = document.getElementsByClassName("listInputArea");
const $userNameArea = document.getElementsByClassName("userNameArea");
const $listButton = document.getElementsByClassName("listButton");
const $CommentForm = document.getElementsByClassName("CommentForm");
const $cardCommentUl = document.getElementsByClassName("cardCommentUl");
const feedTemplit = `
<div class="card-element">
  <div class="card">
    <div class="cardTop">
      <span><img class="profilePicture" alt='profilePicture'></span><span class="cardTopUsername"></span>
    </div>
    <div class="cardImg">
      <img class="cardImgUrl" alt='pictureContents'/>
    </div>
    <div class="cardLink">
      <a href=""><img alt="nav" src="img/nav.png" style="height: 24px" /></a>
      <a href=""><img alt="heart" src="img/heart.png" style="height: 24px" /></a>
      <a href=""><img alt="my" src="img/my.png" style="height: 24px" /></a>
    </div>
    <div class="cardComment">
      <div class="cardCommentList">
        <ul class="cardCommentUl">
        </ul>
      </div>
    </div>
    <div class="cardCommentInputBox">
      <form class="cardCommentInput CommentForm">
        <a href=""><img alt="imoticon" style="height: 24px" src="img/smile.png" /></a>
        <input class="userNameArea" placeholder="작성자"></input>
        <input class="listInputArea" placeholder="댓글 달기..."></input>
        <button class="listButton" type="submit" disabled>게시</button>
      </form>
    </div>
  </div>
</div>
`;

fetch("./JSON/feeds.json")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      $feed.insertAdjacentHTML("beforeend", feedTemplit);
    }
    for (let i = 0; i < $card.length; i++) {
      $cardTopUsername[i].textContent = data[i].writer;
      $cardImgUrl[i].src = data[i].pictureUrl;
      for (let j = 0; j < data[i].list.length; j++) {
        const listPaint = document.createElement("li");
        listPaint.innerHTML = `<li><span>${data[i].list[j].user}</span>${data[i].list[j].content}</li>`;
        $cardCommentUl[i].appendChild(listPaint);
      }
    }

    // 폼의 갯수 = 피드의 갯수
    for (let i = 0; i < $CommentForm.length; i++) {
      $CommentForm[i].addEventListener("submit", (e) => {
        e.preventDefault(); // submit 시에 새로고침을 막음
        const textcontents = $listInputArea[i].value;
        const userName = $userNameArea[i].value;
        const templit = `<li><span>${userName}</span>${textcontents}</li>`;
        $cardCommentUl[i].insertAdjacentHTML("beforeend", templit);
        removeTextcontents();
      });
      // 댓글이 submit 되면 작성자와 작성한 댓글을 지워준다
      function removeTextcontents() {
        $listInputArea[i].value = "";
        $userNameArea[i].value = "";
        $listButton[i].disabled = true;
        $listButton[i].classList.remove("active");
      }

      // 버튼 활성화 및 비활성화 기능
      // 둘 다 기입했을때만 활성화
      function listButtonControl() {
        if ($listInputArea[i].value === "" || $userNameArea[i].value === "") {
          $listButton[i].disabled = true;
          $listButton[i].classList.remove("active");
        } else {
          $listButton[i].disabled = false;
          $listButton[i].classList.add("active");
        }
      }
      // 두 요소의 input 을 감지하는 이벤트리스너
      $listInputArea[i].addEventListener("input", listButtonControl);
      $userNameArea[i].addEventListener("input", listButtonControl);
    }
  });

fetch("./JSON/profile.json")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < $card.length; i++) {
      if (data[i].userName === $cardTopUsername[i].textContent) {
        $profilePicture[i].src = data[i].profileUrl;
      }
    }
  });
