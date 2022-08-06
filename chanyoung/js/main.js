const $ = (v) => document.getElementsByClassName(v);
const commentsForm = [...$("commentsForm")];  //[0:input 1:button]
const commentsWrapper = [...$("commentsWrapper")];
const commentsBtn = [...$("commentsBtn")];
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
  const newCommentHeart = document.createElement("img");
  const newDeleteBtn = document.createElement("img");
  //ID
  newCommentID.href = "javascript:void(0)";
  newCommentID.textContent = ID;
  //comment
  newComment.textContent = comment;
  // heart & deleteBtn
  newCommentHeart.classList.add("heartCheck", "emptyHeart");
  newDeleteBtn.classList.add("deleteButton");
  // output
  commentsWrapper[index]
    .insertAdjacentElement('beforeend', newCommentList)
    .insertAdjacentElement('afterbegin', newCommentID)
    .insertAdjacentElement('afterend', newComment)
    .insertAdjacentElement('afterend',newDeleteBtn)
    .insertAdjacentElement('afterend', newCommentHeart)

  ///////////comment Like/////////////
  const heartCheck = [...$("heartCheck")];
  heartCheck.forEach(v => {
    v.addEventListener("click", changeHeart);
  })

  newDeleteBtn.addEventListener("click",deleteAlert)
}

//////////////////usedFunction////////////////////

const deleteAlert = (e) => {
  if (confirm("정말 삭제하시겠습니까?")) {
    e.path[1].remove();
  }
}

const changeHeart = (e) => {
  let target = e.target.classList;
  if (target.contains("emptyHeart")) {
    target.remove("emptyHeart")
    target.add("fullHeart")
  } else {
    target.remove("fullHeart")
    target.add("emptyHeart")
  }
}

commentsForm.forEach((form) => { 
  console.log(form[0].value)
  form.addEventListener("input",getComment);
  form[1].addEventListener("click", postComment);
})
