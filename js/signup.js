const signupForm = document.getElementById('signUpForm');
const storageKey ='signupData';
let signupData = JSON.parse(localStorage.getItem(storageKey)) || [];

signupForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    const formValues ={
        firstName:signupForm.firstName.value,
        lastName:signupForm.lastName.value,
        email:signupForm.email.value,
        password:signupForm.password.value,
        cpassword:signupForm.cpassword.value,
    };

    if(formValues.firstName && formValues.lastName && formValues.email && formValues.password && formValues.cpassword){
        const existingEmail = signupData.find(data => data.email === formValues.email);
        if (existingEmail) {
            console.log("Email already exists. Please use a different email.");
        } else {
            signupData.push(formValues);
            localStorage.setItem(storageKey, JSON.stringify(signupData));
            console.log("Form data saved to local storage.");
        }
    }else {
        console.log("Please fill all fields")
    }
      signupForm.firstName.value=""
      signupForm.lastName.value=""
        signupForm.email.value=""
        signupForm.password.value=""
        signupForm.cpassword.value=""
});