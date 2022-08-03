const $listArea = document.querySelectorAll(".listArea");
const $listButton = document.querySelectorAll(".listButton");
const $CommentForm = document.querySelectorAll(".CommentForm");
const $cardCommentUl = document.querySelectorAll(".cardCommentUl");

for (let i = 0; i < $CommentForm.length; i++) {
  $CommentForm[i].addEventListener("submit", (e) => {
    e.preventDefault();
    const textcontents = $listArea[i].value;
    const templit = `<li><span>우주호</span>${textcontents}</li>`;
    $cardCommentUl[i].insertAdjacentHTML("beforeend", templit);
    removeTextcontents();

    
  });

  function removeTextcontents() {
    $listArea[i].value = "";
    $listButton[i].disabled = true;
    $listButton[i].classList.remove("active");
  }

  $listArea[i].addEventListener("input", () => {
    if ($listArea[i].value === "") {
      $listButton[i].disabled = true;
      $listButton[i].classList.remove("active");
    } else {
      $listButton[i].disabled = false;
      $listButton[i].classList.add("active");
    }
  });
}
