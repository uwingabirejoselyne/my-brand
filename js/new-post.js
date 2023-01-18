
const postTitle = document.getElementById("post-title");
const postContents = document.getElementById("post-contents");
const fileUpload = document.getElementById("file-upload");

// Get buttons
const saveDraftBtn = document.getElementById("saveDraftBtn");
const publishBtn = document.getElementById("publishBtn");

// create key as posts in local storage if not exist 
if (!localStorage.getItem("posts")) {
   localStorage.setItem("posts", JSON.stringify([]))
}

let fileDataUrl;

// Add event listener to save draft button
saveDraftBtn.addEventListener("click", savePost);

// Add event listener to publish button
publishBtn.addEventListener("click", savePost);

// Add event listener to file upload input field
fileUpload.addEventListener("change", handleFileUpload);

// Handle file upload
function handleFileUpload() {
  const file = fileUpload.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function() {
    const dataUrl = reader.result;
    fileDataUrl = dataUrl;
  }
}

// Save post function
function savePost() {
  // Get values of input fields
  const titleValue = postTitle.value;
  const contentsValue = postContents.value;
  
  // Check if values are not empty
  if(titleValue && contentsValue) {
    // Save values in local storage
    let post = JSON.parse(localStorage.getItem("posts"));
    if (fileDataUrl) {
      post.push({title:titleValue, contents: contentsValue, image: fileDataUrl});
    } else {
      post.push({title:titleValue, contents: contentsValue});
    }
    localStorage.setItem("posts", JSON.stringify(post));
  }
}


