const commentList = document.querySelectorAll(".feed__comment > ul");
const commentInput = document.querySelectorAll(".feed__comment--input > input");
const commentBtn = document.querySelectorAll(".feed__comment--input > button");

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
