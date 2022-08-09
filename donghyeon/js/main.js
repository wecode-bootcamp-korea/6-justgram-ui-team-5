const comment_input = document.getElementsByClassName("comment_content");
const comment_btn = document.getElementsByClassName("comment_append");
const commentList = document.getElementsByClassName("comment-box1");

// function buttonOn() {
//   if (comment_input.value.length > 1) {
//     comment_btn.style.color = "#0088CC";
//     comment_btn.style.cursor = "pointer";
//     comment_btn.disabled = false;
//   } else {
//     comment_btn.style.color = "#cee6fc";
//     comment_btn.style.cursor = "not-allowed";
//     comment_btn.disabled = true;
//   }
// }
// comment_input.addEventListener("input", buttonOn);

// comment_save = [];
// comment_btn.onclick = function () {
//   let comment_save = comment_input.value;
// };

Array.from(comment_btn).forEach((button, index) => {
  button.addEventListener("click", () => {
    const content = comment_input[index].value;

    const childElem = document.createElement("div");

    const nameSpan = document.createElement("span");
    nameSpan.className = "comment-name";
    nameSpan.textContent = "JeongDongHyeon";

    childElem.append(nameSpan, content);

    commentList[index].appendChild(childElem);
  });
});

fetch("./json/comments.json")
  .then((res) => res.json())
  .then((data) => {
    let commentArray = data.comments;

    commentArray.forEach((comment) => {
      for (let i = 0; i < commentArray.length; i++) {
        const commentElem = document.createElement("div");

        const nameSpan = document.createElement("span");
        nameSpan.className = "comment-name";
        nameSpan.textContent = comment.userName;

        const content = comment.content;
        commentElem.append(nameSpan, content);

        commentList[i].append(commentElem);
      }
    });
  });
