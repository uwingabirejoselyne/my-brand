const loginForm =JSON.parse(localStorage.getItem("signupData")) || [];
function  saveLoginData(){
  const email =document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if(email&& password){
    const match =loginForm.find(user =>user.email===email && user.password == password);
    if(match){
      window.location.href ='../admin/index.html';
    } 
    else{
      console.log("Email and pasword not found in local storage");
    }
  }
}
