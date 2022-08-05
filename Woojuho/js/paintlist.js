const $cardTopUsername = document.querySelectorAll(".cardTopUsername");
const $profilePicture = document.querySelectorAll(".profilePicture");
const $cardImgUrl = document.querySelectorAll(".cardImgUrl");
const $card = document.querySelectorAll(".card");
// const $feed = document.querySelector(".feed");
// const feedTemplit = `
// <div class="card-element">
//   <div class="card">
//     <div class="cardTop">
//       <span><img class="profilePicture" alt='profilePicture'></span><span class="cardTopUsername"></span>
//     </div>
//     <div class="cardImg">
//       <img class="cardImgUrl" alt='pictureContents'/>
//     </div>
//     <div class="cardLink">
//       <a href=""><img alt="nav" src="img/nav.png" style="height: 24px" /></a>
//       <a href=""><img alt="heart" src="img/heart.png" style="height: 24px" /></a>
//       <a href=""><img alt="my" src="img/my.png" style="height: 24px" /></a>
//     </div>
//     <div class="cardComment">
//       <div class="cardCommentList">
//         <ul class="cardCommentUl">
//         </ul>
//       </div>
//     </div>
//     <div class="cardCommentInputBox">
//       <form class="cardCommentInput CommentForm">
//         <a href=""><img alt="imoticon" style="height: 24px" src="img/smile.png" /></a>
//         <input class="userNameArea" placeholder="작성자"></input>
//         <input class="listInputArea" placeholder="댓글 달기..."></input>
//         <button class="listButton" type="submit" disabled>게시</button>
//       </form>
//     </div>
//   </div>
// </div>
// `;

fetch("./JSON/feeds.json")
  .then((res) => res.json())
  .then((data) => {
    // for (let feed = 0; feed < data.length; feed++) {
    //   $feed.insertAdjacentHTML("beforeend", feedTemplit);
    // }
    for (let i = 0; i < $card.length; i++) {
      $cardTopUsername[i].textContent = data[i].writer;
      $cardImgUrl[i].src = data[i].pictureUrl;
      for (let j = 0; j < data[i].list.length; j++) {
        const listPaint = document.createElement("li");
        listPaint.innerHTML = `<li><span>${data[i].list[j].user}</span>${data[i].list[j].content}</li>`;
        $cardCommentUl[i].appendChild(listPaint);
      }
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
