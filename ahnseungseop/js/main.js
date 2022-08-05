const commentList = document.querySelectorAll(".feed__comment > ul");
const commentInput = document.querySelectorAll(".feed__comment--input > input");
const commentBtn = document.querySelectorAll(".feed__comment--input > button");

fetch("data/comments.json", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    data.feedCommentList.map((commentInfo) => {
      let newComment = commentInfo.user.username + " " + commentInfo.comment;
      commentList.forEach((commentListItem) => {
        const commentListItemChildElement = document.createElement("li");
        commentListItemChildElement.append(newComment);
        commentListItem.appendChild(commentListItemChildElement);
      });
    });
  });

Array.from(commentBtn).forEach((button, idx) => {
  button.addEventListener("click", () => {
    const content = commentInput[idx].value;
    if (content == "") return;

    const childElement = document.createElement("li");
    childElement.append("kevin__dev " + content);
    commentList[idx].appendChild(childElement);

    commentInput[idx].value = "";
  });
});
