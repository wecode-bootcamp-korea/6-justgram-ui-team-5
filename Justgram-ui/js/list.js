const $listInputArea = document.querySelectorAll(".listInputArea");
const $userNameArea = document.querySelectorAll(".userNameArea");
const $listButton = document.querySelectorAll(".listButton");
const $CommentForm = document.querySelectorAll(".CommentForm");
const $cardCommentUl = document.querySelectorAll(".cardCommentUl");

for (let i = 0; i < $CommentForm.length; i++) {
  $CommentForm[i].addEventListener("submit", (e) => {
    e.preventDefault();
    const textcontents = $listInputArea[i].value;
    const userName = $userNameArea[i].value;

    const templit = `<li><span>${userName}</span>${textcontents}</li>`;
    $cardCommentUl[i].insertAdjacentHTML("beforeend", templit);
    removeTextcontents();
  });

  function removeTextcontents() {
    $listInputArea[i].value = "";
    $userNameArea[i].value = "";
    $listButton[i].disabled = true;
    $listButton[i].classList.remove("active");
  }

  function listButtonControl() {
    if ($listInputArea[i].value === "" || $userNameArea[i].value === "") {
      $listButton[i].disabled = true;
      $listButton[i].classList.remove("active");
    } else {
      $listButton[i].disabled = false;
      $listButton[i].classList.add("active");
    }
  }
  $listInputArea[i].addEventListener("input", listButtonControl);
  $userNameArea[i].addEventListener("input", listButtonControl);
}
