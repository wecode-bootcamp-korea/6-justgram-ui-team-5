document.addEventListener("DOMContentLoaded", () => {
  const [...commentsInput] = document.getElementsByClassName("commentsInput");
  const [...commentsBtn] = document.getElementsByClassName("commentsBtn");
  const [...commentsWrapper] = document.getElementsByClassName("commentsWrapper");
  const commentText = document.getElementsByClassName("commentText");

  // 피드별로 각각 댓글을 유지된 상태로 사용할 수 있게 함
  let commentsArr = Array.from({ length: commentsInput.length }, () => []);
  commentsBtn.forEach((el, i) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      commentsArr[i].push(`<a href="javascript:void(0)">poylib</a> <span>${commentsInput[i].value}</span>`); 
      commentText[i].innerHTML = commentsArr[i].join('<br>');
      commentsWrapper[i].appendChild(commentText[i]);
      commentsInput[i].value = "";
    })
  })
  // 버튼은 비활성화 상태이며, 댓글입력창에 입력이 있어야 버튼이 활성화됨
  commentsInput.forEach((el, i) => {
    el.addEventListener("keyup", () => {
      commentsInput[i].addEventListener("keyup", () => {
      if (commentsInput[i].value) {
        commentsBtn[i].removeAttribute("disabled")
        commentsBtn[i].style.color = "#0096f6";
      } else {
        commentsBtn[i].setAttribute("disabled", "true")
        commentsBtn[i].style.color = "#9fcdea";
        }
      })
    })
  })
});



// function moreText(e) {
//   e.preventDefault();
//   contentsBtn.remove();
//   contentsText.style.whiteSpace = "inherit";
// }
