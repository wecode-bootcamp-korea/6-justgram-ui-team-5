const $ = (v) => document.getElementsByClassName(v);
const commentsForm = [...$("commentsForm")];  //[0:input 1:button]
const commentsWrapper = [...$("commentsWrapper")];
const loadCommentsID = [...$("loadCommentsID")];
const loadComments = [...$("loadComments")];
const feedPicture = [...$("feedPicture")];
const feedWriter = [...$("feedWriter")];
const feedWriterProfile = [...$("feedWriterProfile")];
const likeCount = [...$("likeCount")];
const USERID = "댓글작성자"


let feeds;
fetch("data/feed.json")
  .then((res) => res.json())
  .then((obj) => {
    feeds = obj.feeds;
    feeds.forEach((data,i) => {
      loadCommentsID[i].textContent = data.USER_ID;
      loadComments[i].textContent = data.comment;
      feedPicture[i].src = data.feedPicture;
      feedWriterProfile[i].src = data.WriterProfile;
      feedWriter[i].textContent = data.USER_ID;
      likeCount[i].textContent = `좋아요 ${data.like} 개`;
    })
  })

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
}

const writeComment = (comment, ID, index) => {
  const newCommentList = document.createElement("li");
  const newComment = document.createElement("span");
  const newCommentID = document.createElement("a");
  //ID
  newCommentID.href = "javascript:void(0)";
  newCommentID.textContent = ID;
  //comment
  newComment.textContent = comment;

  commentsWrapper[index]
    .insertAdjacentElement('beforeend', newCommentList)
    .insertAdjacentElement('afterbegin', newCommentID)
    .insertAdjacentElement('afterend', newComment)
}

commentsForm.forEach((form, i) => { 
  form.addEventListener("input",getComment);
  form[1].addEventListener("click",postComment);
})
