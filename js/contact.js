
/*const form = document.getElementById("myForm");
const storageKey = "FormData";
let formData = JSON.parse(localStorage.getItem(storageKey)) || [];
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formValues = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
    };
    if(name ==""){
      alert("Please enter your name")
    }
    if(formValues.name && formValues.email && formValues.message){
        formData.push(formValues);
        if (formData.length > 0) {
          localStorage.setItem(storageKey, JSON.stringify(formData));
          console.log("Form data saved to local storage.")
        } else {
          console.log("Cannot store an empty form data in local storage.");
        }
    }else {
        console.log("Please fill all fields")
    }
    form.name.value = "";
    form.email.value = "";
    form.message.value = "";
});
*/
const form = document.getElementById("myForm");
const storageKey = "FormData";
let formData = JSON.parse(localStorage.getItem(storageKey)) || [];
const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const errorSpan = document.getElementById("error-message");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formValues = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
    };
    if(!formValues.name) {
        errorSpan.innerHTML = "Please enter your name.";
    } else if(!formValues.email) {
        errorSpan.innerHTML = "Please enter your email.";
    } else if(!emailReg.test(formValues.email)){
        errorSpan.innerHTML = "Please enter a valid email address.";
    } else if(!formValues.message) {
        errorSpan.innerHTML = "Please enter a message.";
    } else {
        formData.push(formValues);
        if (formData.length > 0) {
            localStorage.setItem(storageKey, JSON.stringify(formData));
            console.log("Form data saved to local storage.")
        } else {
            console.log("Cannot store an empty form data in local storage.");
        }
    }
    form.name.value = "";
    form.email.value = "";
    form.message.value = "";
});