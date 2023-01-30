/*let comments = [];

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let user = document.querySelector("#user").value;
  let comment = document.querySelector("#comment").value;

  let newComment = {
    username: user.charAt(0),
    text: comment,
  };

  comments.push(newComment);

  displayComments();
  document.querySelector("form").reset();
});

function displayComments() {
  let commentsContainer = document.querySelector(".comments__container");
  commentsContainer.innerHTML = "";

  for (let i = 0; i < comments.length; i++) {
    let commentCard = document.createElement("div");
    commentCard.classList.add("comment__card");

    let pic = document.createElement("div");
    pic.classList.add("pic");
    pic.innerText = comments[i].username;

    let commentInfo = document.createElement("div");
    commentInfo.classList.add("comment__info");

    let username = document.createElement("small");
    username.classList.add("nickname");
    username.innerText = comments[i].username;

    let commentText = document.createElement("p");
    commentText.classList.add("comment");
    commentText.innerText = comments[i].text;

    let commentBottom = document.createElement("div");
    commentBottom.classList.add("comment__bottom");

    let heartIcon = document.createElement("div");
    heartIcon.classList.add("heart__icon--comment");
    heartIcon.innerHTML = '<i class="far fa-heart"></i>';

    commentInfo.appendChild(username);
    commentInfo.appendChild(commentText);
    commentBottom.appendChild(heartIcon);
    commentInfo.appendChild(commentBottom);
    commentCard.appendChild(pic);
    commentCard.appendChild(commentInfo);
    commentsContainer.appendChild(commentCard);
  }
}*/

let comments = [];

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let user = document.querySelector("#user").value;
  let comment = document.querySelector("#comment").value;

  let newComment = {
    username: user.charAt(0),
    text: comment,
  };

  comments.push(newComment);
  localStorage.setItem("comments", JSON.stringify(comments));

  displayComments();
  document.querySelector("form").reset();
});

function displayComments() {
  let storedComments = localStorage.getItem("comments");
  if (storedComments) {
    comments = JSON.parse(storedComments);
  }

  let commentsContainer = document.querySelector(".comments__container");
  commentsContainer.innerHTML = "";

  for (let i = 0; i < comments.length; i++) {
    let commentCard = document.createElement("div");
    commentCard.classList.add("comment__card");

    let pic = document.createElement("div");
    pic.classList.add("pic");
    pic.innerText = comments[i].username;

    let commentInfo = document.createElement("div");
    commentInfo.classList.add("comment__info");

    let username = document.createElement("small");
    username.classList.add("nickname");
    username.innerText = comments[i].username;

    let commentText = document.createElement("p");
    commentText.classList.add("comment");
    commentText.innerText = comments[i].text;

    let commentBottom = document.createElement("div");
    commentBottom.classList.add("comment__bottom");

    let heartIcon = document.createElement("div");
    heartIcon.classList.add("heart__icon--comment");
    heartIcon.innerHTML = '<i class="far fa-heart"></i>';

    commentInfo.appendChild(username);
    commentInfo.appendChild(commentText);
    commentBottom.appendChild(heartIcon);
    commentInfo.appendChild(commentBottom);
    commentCard.appendChild(pic);
    commentCard.appendChild(commentInfo);
    commentsContainer.appendChild(commentCard);
  }
}