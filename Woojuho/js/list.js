// const $listInputArea = document.getElementsByClassName("listInputArea");
// const $userNameArea = document.getElementsByClassName("userNameArea");
// const $listButton = document.getElementsByClassName("listButton");
// const $CommentForm = document.getElementsByClassName("CommentForm");
// const $cardCommentUl = document.getElementsByClassName("cardCommentUl");

// // 폼의 갯수 = 피드의 갯수
// for (let i = 0; i < $CommentForm.length; i++) {
//   $CommentForm[i].addEventListener("submit", (e) => {
//     e.preventDefault(); // submit 시에 새로고침을 막음
//     const textcontents = $listInputArea[i].value;
//     const userName = $userNameArea[i].value;
//     const templit = `<li><span>${userName}</span>${textcontents}</li>`;
//     $cardCommentUl[i].insertAdjacentHTML("beforeend", templit);
//     removeTextcontents();
//   });
//   // 댓글이 submit 되면 작성자와 작성한 댓글을 지워준다
//   function removeTextcontents() {
//     $listInputArea[i].value = "";
//     $userNameArea[i].value = "";
//     $listButton[i].disabled = true;
//     $listButton[i].classList.remove("active");
//   }

//   // 버튼 활성화 및 비활성화 기능
//   // 둘 다 기입했을때만 활성화
//   function listButtonControl() {
//     if ($listInputArea[i].value === "" || $userNameArea[i].value === "") {
//       $listButton[i].disabled = true;
//       $listButton[i].classList.remove("active");
//     } else {
//       $listButton[i].disabled = false;
//       $listButton[i].classList.add("active");
//     }
//   }
//   // 두 요소의 input 을 감지하는 이벤트리스너
//   $listInputArea[i].addEventListener("input", listButtonControl);
//   $userNameArea[i].addEventListener("input", listButtonControl);
// }
