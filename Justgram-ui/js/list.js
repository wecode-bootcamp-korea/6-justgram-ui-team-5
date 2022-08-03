const $listArea = document.querySelector("#listArea");
const $listButton = document.querySelector("#listButton");
const $CommentForm = document.querySelector("#CommentForm");
const $cardCommentUl = document.querySelector(".cardCommentUl");

$CommentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const textcontents = $listArea.value;
  const templit = `<li><span>우주호</span>${textcontents}</li>`;
  $cardCommentUl.insertAdjacentHTML("beforeend", templit);
  removeTextcontents();
});

function removeTextcontents() {
  $listArea.value = "";
  $listButton.disabled = true;
  $listButton.classList.remove("active");
}

$listArea.addEventListener("input", () => {
  if ($listArea.value === "") {
    $listButton.disabled = true;
    $listButton.classList.remove("active");
  } else {
    $listButton.disabled = false;
    $listButton.classList.add("active");
  }
});

// const $like = document.querySelector(".like");
// let heartSwitch = 0;
// $like.addEventListener("click", (e) => {
//   if (heartSwitch === 0) {
//     e.firstChild.src = "img/afterheart.png";
//     heartSwitch = 1;
//     console.log(heartSwitch);
//   } else if (heartSwitch === 1) {
//     e.firstChild.src = "img/beforeheart.png";
//     heartSwitch = 0;
//   }
// });
// 이렇게 만들면 확장성이 좋지 않다
// 어떤 방법이 좋을까
