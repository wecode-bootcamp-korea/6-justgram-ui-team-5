const [...commentsForm] = document.getElementsByClassName("commentsForm");  //[0:input 1:button]
const [...commentsWrapper] = document.getElementsByClassName("commentsWrapper");
const USERID = "poylib"

const getComment = (e) => {
  let formText = e.target.value;
  let formBtn = e.target.form[1];
  if (formText) {
    formBtn.disabled = false;
    formBtn.style.color = "#0096f6";
  } else {
    formBtn.disabled = true;
    formBtn.style.color = "#9fcdea";
  }
}

const postComment = (e) => {
  let index = commentsForm.indexOf(e.target.form);
  e.preventDefault();
  e.target.form[1].style.color = "#9fcdea";
  writeComment(e.target.form[0].value,USERID,index);
  e.target.form[0].value = "";  // input 창
  console.log(e.target.value)
}

const writeComment = (comment, ID, index) => {
  const newCommentList = document.createElement("li");
  const newComment = document.createElement("span");
  const newCommentID = document.createElement("a");
  //ID
  newCommentID.href = "javascript:void(0)";
  newCommentID.style.marginRight = "6px"
  newCommentID.textContent = ID;
  //comment
  newComment.textContent = comment;
  commentsWrapper[index]
    .insertAdjacentElement('afterbegin', newCommentList)
    .insertAdjacentElement('afterbegin', newCommentID)
    .insertAdjacentElement('afterend', newComment)

}

commentsForm.forEach((form, i) => {
  
  form.addEventListener("input",getComment);
  form[1].addEventListener("click",postComment);
})
