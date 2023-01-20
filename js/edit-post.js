const postTitle = document.getElementById("post-title");
const postContents = document.getElementById("post-contents");

//Retrieve the post id from the query parameter
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");

const updateBtn = document.getElementById("update");
const cancelBtn = document.getElementById("cancel");
const deleteBtn = document.getElementById("delete");
const fileUpload = document.getElementById("file-upload");
const editImage = document.querySelector(".edit-image");
const imageName = document.getElementById("image-name");

// Get post data from local storage
const posts = JSON.parse(localStorage.getItem("posts"));
const post = posts.find((p, i) => i == postId);

// Set post data to form fields
postTitle.value = post.title;
postContents.value = post.contents;
editImage.src = post.image;

// Listen for file selection
fileUpload.addEventListener("change", function(event) {
    // Get the selected file
    const file = event.target.files[0];
    // Show the file name
    imageName.innerHTML = file.name;
    // Create a file reader
    const reader = new FileReader();
    // Add an onload event listener
    reader.addEventListener("load", function() {
      // Set the image source
      editImage.src = reader.result;
    });
    // Read the file as data URL
    reader.readAsDataURL(file);
  });

// Update post data
updateBtn.addEventListener("click", function() {
  post.title = postTitle.value;
  post.contents = postContents.value;
  // update the post in local storage or via an API call
  localStorage.setItem("posts", JSON.stringify(posts));
  alert("Post updated!");
});

// Delete post
deleteBtn.addEventListener("click", function() {
  if(confirm("Are you sure you want to delete this post?")) {
    const index = posts.findIndex((p, i) => i == postId);
    posts.splice(index, 1);
    // delete the post in local storage or via an API call
    localStorage.setItem("posts", JSON.stringify(posts));
    alert("Post deleted!");
  }
});

// Cancel editing
cancelBtn.addEventListener("click", function() {
  window.history.back();
});