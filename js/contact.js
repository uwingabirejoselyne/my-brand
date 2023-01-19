
const form = document.getElementById("myForm");
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

