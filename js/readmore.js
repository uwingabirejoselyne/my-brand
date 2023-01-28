
/*const postsContainer = document.getElementById("posts-container");
const readMoreContainer = document.querySelector(".party-of-readmore");
const readImage = document.getElementById("read-image");
const readTitle = document.getElementById("read-title");
const readContent = document.getElementById("read-content");
const likeButton = document.querySelector(".like-button");
const likeCount = document.querySelector(".like-count");

// Retrieve the data from local storage
const posts = JSON.parse(localStorage.getItem("posts"));

// Get the index of the post from the URL
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id")
console.log(postId);

// check if postIndex is null or undefined 
if(!postId){
  console.log("postIndex not found in the url");
  // redirect to the home page or show an error message
}else{
    // Get the specific post based on the index
    const post = posts[postId];

    // Set the post's data to the read more container
    readImage.src = post.image;
    readTitle.innerHTML = post.title;
    readContent.innerHTML = post.contents;
    likeCount.innerHTML = post.likes;
    console.log(likeCount);


    // Add event listener for the like button
    likeButton.addEventListener("click", function() {
        post.likes++;
        likeCount.innerHTML = post.likes;
        localStorage.setItem("posts", JSON.stringify(posts));
    });
}
*/
const postsContainer = document.getElementById("posts-container");
const readMoreContainer = document.querySelector(".party-of-readmore");
const readImage = document.getElementById("read-image");
const readTitle = document.getElementById("read-title");
const readContent = document.getElementById("read-content");
const likeButton = document.querySelector(".like-button");
const likeCount = document.querySelector(".like-count");

const posts = JSON.parse(localStorage.getItem("posts"));
 const urlParams= new URLSearchParams(window.location.search);
 const postId =urlParams.get("id");
 if(!postId){
  console.log("Postid not found in url");
 }
 else{
  const post = posts[postId];
  readImage.src = post.image;
  readTitle.innerHTML =post.title;
  readContent.innerHTML =post.contents;
 }