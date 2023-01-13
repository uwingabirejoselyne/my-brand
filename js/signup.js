function saveSignupData(){
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const cpassword = document.getElementById('cpassword').value;
    let signupData =[];
    if(localStorage.getItem('signupData')){
        saveSignupData = JSON.parse(localStorage.getItem('signupData'));
    }
    signupData.push({firstName:firstName,lastName:lastName,email:email, password: password, cpassword: cpassword})
    const signupDataString = JSON.stringify(signupData);

    localStorage.setItem("signupData", signupDataString);
    alert("Signup data saved successfully!");
    
}
function resetSignupData(){
    localStorage.removeItem("signupData");
    alert("Signup data reset successfully!");
}