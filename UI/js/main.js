// 변수 addButton, comment에 각각 button과 input을 저장
const addButton = document.getElementById("comment-button");
const comment = document.getElementById("comment");

// 버튼 클릭,keyup 이벤트리스너
addButton.addEventListener("click", addcomment);
comment.addEventListener("keyup", commentKeyUp);

// 텍스트를 추가하는 함수
// 텍스트 입력창의 값을 가져와 텍스트 영역에 추가
function addcomment() {
  let comment = document.getElementById("comment").value;
  const commentItem = document.createElement("p");
  commentItem.classList.add("comment-text");

  commentItem.innerText = comment;

  document.getElementById("comment-list").appendChild(commentItem);
  // 텍스트를 추가하고 난 후 input창의 텍스트의 value를 ""(공백)으로 주어 안보이게함
  document.getElementById("comment").value = "";
}
// keyup일때의 함수
/* enter keycode = 13 */
function commentKeyUp(e) {
  if (e.keyCode === 13) {
    addButton.click();
  }
}
