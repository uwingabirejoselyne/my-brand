function saveLoginData(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if(!localStorage.getItem(email)){
        localStorage.setItem(email,password);
        console.log("Email and Password is saved in localstorage");
    }
    else{
        console.log("Email and password exist in local storage");
    }
}

