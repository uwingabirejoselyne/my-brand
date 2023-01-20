
const postsContainer = document.getElementById("posts-container");

// Retrieve the data from local storage
const posts = JSON.parse(localStorage.getItem("posts"));

// Remove existing elements in the posts container
while (postsContainer.firstChild) {
    postsContainer.removeChild(postsContainer.firstChild);
}

// Iterate through the array of posts
for (let i = 0; i < posts.length; i++) {
  const post = posts[i];

  // Create a new div element for each post
  const postDiv = document.createElement("div");
  postDiv.classList.add("card");

  // Create image element if it exist
  if(post.image) {
    const image = document.createElement("img");
    image.src = post.image;
    postDiv.appendChild(image);
  }

  // Create a title element
  const title = document.createElement("h4");
  title.innerHTML = post.title;
  postDiv.appendChild(title);

  // Create a contents element
  const contents = document.createElement("p");
  contents.innerHTML = post.contents;
  postDiv.appendChild(contents);

  // Create the bottom side of the card
  const cardBottomSide = document.createElement("div");
  cardBottomSide.classList.add("card-bottom-side");
  postDiv.appendChild(cardBottomSide);

  // Create the bottom left side of the card
  const cardBottomLeftSide = document.createElement("div");
  cardBottomLeftSide.classList.add("card-bottom-left-side");
  cardBottomLeftSide.innerHTML = '<a href="../blog-section/index.html"> Continue</a>';
  cardBottomSide.appendChild(cardBottomLeftSide);

  // Create the bottom right side of the card
  const cardBottomRightSide = document.createElement("div");
  cardBottomRightSide.classList.add("card-bottom-right-side");
  cardBottomRightSide.innerHTML = '<div><i class="fa fa-heart-o"></i><span>Like</span></div><div><i class="fa fa-comment-o"></i><span>Comment</span></div>';
  cardBottomSide.appendChild(cardBottomRightSide);
  

  // Append the post div to the container
  postsContainer.appendChild(postDiv);
}

