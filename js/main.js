const comment_input = document.getElementById("comment_content");
const comment_btn = document.getElementById("comment_append");

function buttonOn() {
  if (comment_input.value.length > 1) {
    comment_btn.style.color = "#0088CC";
    comment_btn.style.cursor = "pointer";
    comment_btn.disabled = false;
  } else {
    comment_btn.style.color = "#cee6fc";
    comment_btn.style.cursor = "not-allowed";
    comment_btn.disabled = true;
  }
}
comment_input.addEventListener("input", buttonOn);

comment_save = [];
comment_btn.onclick = function () {
  let comment_save = comment_input.value;
};
