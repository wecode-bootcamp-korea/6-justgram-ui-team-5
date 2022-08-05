const ListData = [
  {name: 'Mike',
   picture: 'picture/Man1.avif',
   list: "It's So beautiful !",
   like: true},

   {name: 'Sam',
   picture: 'picture/Man2.avif',
   list: "I don't believe that !",
   like: false},

   {name: 'Anna',
   picture: 'picture/Woman1.avif',
   list: "WOW OMG",
   like: true},

   {name: 'Sujin',
   picture: 'picture/Woman2.avif',
   list: "what is that ?!?!",
   like: false}
]

const imgData = [
  {Img: 'img/1.avif',
  pub: 'Sujin'}
]

function paintCardContainer()
const cardTemplit = `
<div class="card-element">
        <div class="card">
          <div class="cardTop"></div>
          <div class="cardImg">
            <img src="${img}" />
          </div>
          <div class="cardLink">
            <a href=""><img src="img/nav.png" style="height: 24px" /></a>
            <a href=""><img src="img/heart.png" style="height: 24px" /></a>
            <a href=""><img src="img/my.png" style="height: 24px" /></a>
          </div>
          <div class="cardComment">
            <div class="cardCommentList">
              <ul class="cardCommentUl">
              </ul>
            </div>
          </div>
          <div class="cardCommentInputBox">
            <form class="cardCommentInput CommentForm">
              <a href=""><img style="height: 24px" src="img/smile.png" /></a>
              <input class="listArea" placeholder="댓글 달기..."></input>
              <button class="listButton" type="submit" disabled>게시</button>
            </form>
          </div>
        </div>
      </div>
`