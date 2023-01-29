const submitBtn = document.querySelector('.submit__btn')
const userName = document.querySelector('#user')
const comment = document.querySelector('#comment')
const likeIcon = document.querySelector('.heart__icon')
const count = document.querySelector('.count')
const commentsCont = document.querySelector('.comments__container')

likeIcon.addEventListener('click', likeVideo)
submitBtn.addEventListener('click', submitFeedback)


feedbackArr = []
let positiveFeedback = false
let likesCount = 0

function submitFeedback(e){
    // get user name
    const userForm = userName.value 
    // get feedback
    const commentForm = comment.value 
    // if inputs are not empty
    if(userForm && commentForm !== ''){
        // create new feedback
        newFeedback = {
            "id": Math.floor((Math.random() * 1000)+ 1),
            "userName": userForm,
            "userComment": commentForm,
            "typeOfFeedback": positiveFeedback
        }
        // add new feedback to array
        feedbackArr.push(newFeedback)
        // if liked add to count
        if(positiveFeedback === true){
            addLikes()
        }
        // clear inputs 
        resetForm()
        // add feedback to list
        addFeedback(newFeedback)
    }


    e.preventDefault()
}

function likeVideo(){
    likeIcon.classList.toggle('liked')

    if(likeIcon.classList.contains('liked')){
        likeIcon.innerHTML = `<i class="fa fa-hear-t-o"></i>`
        // set feedback to liked
        positiveFeedback = true
    } else {
        likeIcon.innerHTML = `<i class="fa fa-heart-o"></i>`
        // set feedback to not liked
        positiveFeedback = false
    }
}

function addLikes(){
    likesCount++
    count.innerHTML = likesCount
}

function resetForm(){
    userName.value = ''
    comment.value = ''
    likeIcon.innerHTML = `<i class="fa fa-heart-o"></i>`
    positiveFeedback = false
}

function addFeedback(item){
    // select first letter of the user name
    const letter = (item.userName).charAt(0)
    // create new div
    const div = document.createElement('div')
    // add class
    div.classList = 'comment__card'
    // add id
    div.id = item.id 
    // add html
    div.innerHTML = `
    <div class="pic center__display">
                    ${letter}
                </div>
                <div class="comment__info">
                    <small class="nickname">
                        ${item.userName}
                    </small>
                    <p class="comment">
                        ${item.userComment}
                    </p>
                    <div class="comment__bottom">
                        <div class="heart__icon--comment">
                            ${item.typeOfFeedback ? `<i class="fa fa-heart-o positive"></i>` : `<i class="far fa-heart"></i>`}
                        </div>
                        <button>
                            Reply
                        </button>
                    </div>
                </div>
    `
    // insert feedback into the list
    commentsCont.insertAdjacentElement('beforeend', div)
}
/*
document.querySelector('form').addEventListener('submit', submitComment);

function submitComment(event) {
    event.preventDefault();
    var user = document.querySelector('#user').value;
    var comment = document.querySelector('#comment').value;

    // Create new comment element
    var commentCard = document.createElement('div');
    commentCard.classList.add('comment__card');
    commentCard.innerHTML = `
        <div class="pic center__display">A</div>
        <div class="comment__info">
            <small class="nickname">${user}</small>
            <p class="comment">${comment}</p>
            <div class="comment__bottom">
                <div class="heart__icon--comment">
                    <i class="far fa-heart"></i>
                </div>
                <button>Reply</button>
            </div>
        </div>
    `;

    // Append new comment to comments container
    var commentsContainer = document.querySelector('.comments__container');
    commentsContainer.appendChild(commentCard);

    // Clear input fields
    document.querySelector('#user').value = '';
    document.querySelector('#comment').value = '';
}*/
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const userName = document.getElementById("user").value;
    const comment = document.getElementById("comment").value;

    if (!userName || !comment) {
        alert("Please fill out both the username and comment fields");
        return;
    }
    
    const commentsContainer = document.querySelector(".comments__container");
    const commentCard = document.createElement("div");
    commentCard.classList.add("comment__card");
    commentCard.innerHTML = `
        <div class="pic center__display">
            A
        </div>
        <div class="comment__info">
            <small class="nickname">
                ${userName}
            </small>
            <p class="comment">
                ${comment}
            </p>
            <div class="comment__bottom">
                <div class="heart__icon--comment">
                    <i class="far fa-heart"></i>
                </div>
                <button>
                    Reply
                </button>
            </div>
        </div>
    `;
    commentsContainer.appendChild(commentCard);
});
