
let signupData = JSON.parse(localStorage.getItem("signupData")) || [];

function saveLoginData() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (email && password) {
    const match = signupData.find(user => user.email === email && user.password === password);
    if (match) {
      window.location.href = '../admin/new-post.html';
    } else {
      console.log("Email and password not found in localStoge");
    }
  }
}

