function saveLoginData() {
    // get the values entered in the form
    const username = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // create an array of login form data
    let loginData = [];
    if (localStorage.getItem("loginData")) {
      loginData = JSON.parse(localStorage.getItem("loginData"));
    }
    loginData.push({username: username, password: password});

    // convert the array to a string using JSON.stringify()
    const loginDataString = JSON.stringify(loginData);

    // store the array in local storage
    localStorage.setItem("loginData", loginDataString);

    alert("Login data saved successfully!");
  }

