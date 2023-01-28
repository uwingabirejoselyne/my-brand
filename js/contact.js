
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

const form = document.getElementById("myForm");
const storageKey = "FormData";
let formData = JSON.parse(localStorage.getItem(storageKey)) || [];
const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const errorSpan = document.getElementById("error-message");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formValues = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        message: form.message.value.trim()
    };
    if(formValues.name ==="") {
        setErrorFor(formValues.name,'name can not be blank');
    }
    else{ 
        setsuccessFor(formValues.name);
    } 
     if(formValues.email === "") {
        setErrorFor(formValues.email,'Email can not be blank');
        
    }
    else{
        setsuccessFor(formValues.email);
    } 
    if(!emailReg.test(formValues.email)){
        setErrorFor(formValues.email,'Email not valid');
    } else{
        setsuccessFor(formValues.email);

    }
     if(formValues.message ==="") {
        setErrorFor(formValues.message,'message can not be blank');
        
    } else {
        formData.push(formValues);
        if (formData.length > 0) {
            localStorage.setItem(storageKey, JSON.stringify(formData));
            console.log("Form data saved to local storage.")
        } else {
            console.log("Cannot store an empty form data in local storage.");
        }
    }
    function setErrorFor(input,message){
        const formControl = input.parentElement;
        const small = formControl.querySelector("Small");
        small.innerText = message;
        formControl.className = ' form control error'
    }
    function setsuccessFor(input){
        const formControl = input.parentElement;
        formControl.className = ' form control success'
    }
    form.name.value = "";
    form.email.value = "";
    form.message.value = "";
});
const form = document.getElementById("myForm");
const storageKey = "FormData";
let formData = JSON.parse(localStorage.getItem(storageKey)) || [];
const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const errorSpan = document.getElementById("error-message");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formValues = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        message: form.message.value.trim()
    };
    if(formValues.name ==="") {
        setErrorFor(formValues.name,'Name can not be blank');
    }
    else{ 
        setSuccessFor(formValues.name);
    } 
     if(formValues.email === "") {
        setErrorFor(formValues.email,'Email can not be blank');
        
    }
    else{
        setSuccessFor(formValues.email);
    } 
    if(!emailReg.test(formValues.email)){
        setErrorFor(formValues.email,'Email not valid');
    } else{
        setSuccessFor(formValues.email);

    }
     if(formValues.message ==="") {
        setErrorFor(formValues.message,'message can not be blank');
        
    } else {
        formData.push(formValues);
        if (formData.length > 0) {
            localStorage.setItem(storageKey, JSON.stringify(formData));
            console.log("Form data saved to local storage.")
        } else {
            console.log("Cannot store an empty form data in local storage.");
        }
    }
    function setErrorFor(input, message){
        const formControl = input.parentElement;
        const small = formControl.querySelector("small");
        small.innerText = message;
        formControl.className = 'form-control error';
    }
    function setSuccessFor(input){
        const formControl =input.parentElement;
        formControl.className = 'form-control success';
    }
    form.name.value = "";
    form.email.value = "";
    form.message.value = "";
});*/

const form = document.getElementById("myForm");
const storageKey = "FormData";
let formData = JSON.parse(localStorage.getItem(storageKey)) || [];
const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const errorSpan = document.getElementById("error-message");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formValues = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        message: form.message.value.trim()
    };
    if(formValues.name ==="") {
        setErrorFor(form.name,'Name can not be blank');
        console.log(setErrorFor);
    }
    else{ 
        setSuccessFor(form.name);
    } 
     if(formValues.email === "") {
        setErrorFor(form.email,'Email can not be blank');
        
    }
    else{
        setSuccessFor(form.email);
    } 
    if(!emailReg.test(formValues.email)){
        setErrorFor(form.email,'Email not valid');
    } else{
        setSuccessFor(form.email);

    }
     if(formValues.message ==="") {
        setErrorFor(form.message,'message can not be blank');

        
    } else {
        formData.push(formValues);
        if (formData.length > 0) {
            localStorage.setItem(storageKey, JSON.stringify(formData));
            console.log("Form data saved to local storage.")
        } else {
            console.log("Cannot store an empty form data in local storage.");
        }
    }
    function setErrorFor(input, message){
        const formControl = input.parentElement;
        if(formControl){
        const small = formControl.querySelector("small");
        if(small)
        small.innerText = message;
        formControl.className = 'form-control error';
    }
    }
    function setSuccessFor(input){
        const formControl =input.parentElement;
        if(formControl)
        formControl.className = 'form-control success';
    }
    form.name.value = "";
    form.email.value = "";
    form.message.value = "";
});