/*const existingTable = document.getElementById("existing-table");
existingTable.parentNode.removeChild(existingTable);
const table = document.createElement("table");
table.id = "post-table";

// Retrieve the data from local storage
const posts = JSON.parse(localStorage.getItem("posts"));

// Create table rows and cells
for (let i = 0; i < posts.length; i++) {
  const post = posts[i];

  // Create a new table row element for each post
  const tr = document.createElement("tr");

  // Create table data element for No
  const tdNo = document.createElement("td");
  tdNo.innerHTML = i+1;
  tr.appendChild(tdNo);

  // Create table data element for post title
  const tdTitle = document.createElement("td");
  tdTitle.innerHTML = post.title;
  tr.appendChild(tdTitle);

  // Create table data element for post description
  const tdDescription = document.createElement("td");
  tdDescription.innerHTML = post.contents;
  tr.appendChild(tdDescription);

  // Create table data element for post image
  const tdImage = document.createElement("td");
  if(post.image) {
    tdImage.innerHTML = '<img class="small-image" src="'+post.image+'"/>';
  }
  tr.appendChild(tdImage);

  // Create table data element for actions
  const tdActions = document.createElement("td");
  tdActions.innerHTML = '<a href="./edit-post.html">Edit</a> <a href="#">Delete</a>';
  tr.appendChild(tdActions);

  // Append the table row element to the table
  table.appendChild(tr);
}
document.getElementById("post-data").appendChild(table);*/

const existingTable = document.getElementById("existing-table");
existingTable.parentNode.removeChild(existingTable);
const table = document.createElement("table");
table.id = "post-table";

// Create the table head
const thead = document.createElement("thead");
const trHead = document.createElement("tr");
const thNo = document.createElement("th");
thNo.innerHTML = "No";
trHead.appendChild(thNo);
const thTitle = document.createElement("th");
thTitle.innerHTML = "Title";
trHead.appendChild(thTitle);
const thDescription = document.createElement("th");
thDescription.innerHTML = "Description";
trHead.appendChild(thDescription);
const thImage = document.createElement("th");
thImage.innerHTML = "Image";
trHead.appendChild(thImage);
const thActions = document.createElement("th");
thActions.innerHTML = "Actions";
trHead.appendChild(thActions);
thead.appendChild(trHead);
table.appendChild(thead);

// Create the table body
const tbody = document.createElement("tbody");

// Retrieve the data from local storage
const posts = JSON.parse(localStorage.getItem("posts"));

// Create table rows and cells
for (let i = 0; i < posts.length; i++) {
  const post = posts[i];

  // Create a new table row element for each post
  const tr = document.createElement("tr");

  // Create table data element for No
  const tdNo = document.createElement("td");
  tdNo.innerHTML = i+1;
  tr.appendChild(tdNo);

  // Create table data element for post title
  const tdTitle = document.createElement("td");
  tdTitle.innerHTML = post.title;
  tr.appendChild(tdTitle);

  // Create table data element for post description
  const tdDescription = document.createElement("td");
  tdDescription.innerHTML = post.contents;
  tr.appendChild(tdDescription);

  // Create table data element for post image
  const tdImage = document.createElement("td");
  if(post.image) {
    tdImage.innerHTML = '<img class="small-image" src="'+post.image+'"/>';
  }
  tr.appendChild(tdImage);

  // Create table data element for actions
  const tdActions = document.createElement("td");
  tdActions.innerHTML = '<a href="./edit-post.html">Edit</a> <a href="#">Delete</a>';
  tr.appendChild(tdActions);

  // Append the table row element to the table body
  tbody.appendChild(tr);
}
table.appendChild(tbody);
document.getElementById("post-data").appendChild(table);