const $cardTopUsername = document.querySelectorAll(".cardTopUsername");
const $profilePicture = document.querySelectorAll(".profilePicture");
const $cardImgUrl = document.querySelectorAll(".cardImgUrl");
const $card = document.querySelectorAll(".card");

fetch("./JSON/feeds.json")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < $card.length; i++) {
      $cardTopUsername[i].textContent = data[i].writer;
      $cardImgUrl[i].src = data[i].pictureUrl;
      for (let j = 0; j < data[i].list.length; j++) {
        const listPaint = document.createElement("li");
        listPaint.innerHTML = `<li><span>${data[i].list[j].user}</span>${data[i].list[j].content}</li>`;
        $cardCommentUl[i].appendChild(listPaint);
      }
    }
  });

fetch("./JSON/profile.json")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < $card.length; i++) {
      if (data[i].userName === $cardTopUsername[i].textContent) {
        $profilePicture[i].src = data[i].profileUrl;
      }
    }
  });