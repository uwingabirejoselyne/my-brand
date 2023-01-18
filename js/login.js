function saveLoginData() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email && password) {
        if (localStorage.getItem(email)) {
            window.location.href = '../admin/new-post.html';
        }
        else {
            console.log("Email and password is not available in localStorage");
        }
    }

}

