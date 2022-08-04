const commentWriteInput = document.getElementsByClassName(
  "comment-write-input"
);
const commentWriteButton = document.getElementsByClassName(
  "comment-write-button"
);
const commentList = document.getElementsByClassName("feed-comment-list");

Array.from(commentWriteButton).forEach((button, index) => {
  button.addEventListener("click", function (e) {
    const content = commentWriteInput[index].value;

    const childElem = document.createElement("div");
    const nameSpan = document.createElement("span");
    nameSpan.className = "comment-name";
    nameSpan.textContent = "현";

    childElem.append(nameSpan, content);
    commentList[index].appendChild(childElem);
  });
});
