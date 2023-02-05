// const signUpFormApi = document.getElementById("signUpForm");
// signUpFormApi.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     var firstName = document.getElementById("firstName").value;
//     var lastName = document.getElementById("lastName").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     var cpassword = document.getElementById("cpassword").value;
//     fetch("http://localhost:3000/userposts",{
//         method:'POST',
//         body:JSON.stringify({
//         firstName:firstName,
//         lastName:lastName,
//         email:email,
//         password:password,
//         cpassword:cpassword,
//         }),
//         headers:{
//             "Content-Type":"application/json; charset=UTF-8"
//         }
//     })
//     .then(function(response){
//        return response.json();
//     })
//     .then(function(data){
//         console.log(data);
//     })

// })

const signUpFormApi = document.getElementById("signUpForm");
signUpFormApi.addEventListener('submit', (e) => {
    e.preventDefault();
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;
  
    fetch("http://localhost:3000/userposts")
      .then(response => response.json())
      .then(data => {
        const user = data.find(user => user.email === email);
        if (user) {
          console.log(`Email ${email} already exists.`);
        } else {
          fetch("http://localhost:3000/userposts", {
            method: 'POST',
            body: JSON.stringify({
              firstName: firstName,
              lastName: lastName,
              email: email,
              password: password,
              cpassword: cpassword,
            }),
            headers: {
              "Content-Type": "application/json; charset=UTF-8"
            }
          })
            .then(response => response.json())
            .then(data => {
              console.log(data);
            });
        }
      });
  });