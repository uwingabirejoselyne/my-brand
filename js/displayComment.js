/*let postContainer = document.querySelector(".post-data");

let storedComments = localStorage.getItem("comments");
if (storedComments) {
  comments = JSON.parse(storedComments);
}

postContainer.innerHTML = "";

for (let i = 0; i < comments.length; i++) {
  let tr = document.createElement("tr");

  let usernameTd = document.createElement("td");
  usernameTd.innerText = comments[i].username;

  let messageTd = document.createElement("td");
  messageTd.innerText = comments[i].text;

  let actionsTd = document.createElement("td");
  let editLink = document.createElement("a");
  editLink.href = "./edit-user.html";
  editLink.innerText = "Edit";
  let deleteLink = document.createElement("a");
  deleteLink.href = "#";
  deleteLink.innerText = "Delete";
  actionsTd.appendChild(editLink);
  actionsTd.appendChild(deleteLink);

  tr.appendChild(usernameTd);
  tr.appendChild(messageTd);
  tr.appendChild(actionsTd);
  postContainer.appendChild(tr);
}*/

let postContainer = document.querySelector(".post-data");

let storedComments = localStorage.getItem("comments");
if (storedComments) {
comments = JSON.parse(storedComments);
}

postContainer.innerHTML = "";

let thead = document.createElement("thead");
let theadRow = document.createElement("tr");

let usernameTh = document.createElement("th");
usernameTh.innerText = "Username";
usernameTh.style.paddingRight ="10px"

let messageTh = document.createElement("th");
messageTh.innerText = "message";
messageTh.style.paddingRight ="10px"

let actionsTh = document.createElement("th");
actionsTh.innerText = "Actions";

theadRow.appendChild(usernameTh);
theadRow.appendChild(messageTh);
theadRow.appendChild(actionsTh);
thead.appendChild(theadRow);
postContainer.appendChild(thead);

for (let i = 0; i < comments.length; i++) {
let tr = document.createElement("tr");

let usernameTd = document.createElement("td");
usernameTd.innerText = comments[i].username;

let messageTd = document.createElement("td");
messageTd.innerText = comments[i].text;

let actionsTd = document.createElement("td");
let editLink = document.createElement("a");
editLink.href = "./edit-user.html";
editLink.innerText = "Edit";
let deleteLink = document.createElement("a");
deleteLink.href = "#";
deleteLink.innerText = "Delete";
actionsTd.appendChild(editLink);
actionsTd.appendChild(deleteLink);

tr.appendChild(usernameTd);
tr.appendChild(messageTd);
tr.appendChild(actionsTd);
postContainer.appendChild(tr);
}
