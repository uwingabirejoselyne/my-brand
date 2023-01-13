

  /*// Get the form element
const form = document.getElementById('myForm');

// Get the local storage key
const storageKey = 'formData';

// Get the existing data from local storage, if any
let formData = JSON.parse(localStorage.getItem(storageKey)) || [];

// Add event listener to the form submit event
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the form input values
  const formValues = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  // Add the form values to the formData array
  formData.push(formValues);

  // Save the formData array to local storage
  localStorage.setItem(storageKey, JSON.stringify(formData));

  // Clear the form inputs
  form.name.value = '';
  form.email.value = '';
  form.message.value = '';
});
*/
const form =document.getElementById('myForm');
const storageKey ='FormData'
let formData =JSON.parse(localStorage.getItem(storageKey)) || [];
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const formValues = {
        name:form.name.value,
        email:form.email.value,
        message:form.message.value
    }
    formData.push(formValues);
    localStorage.setItem(storageKey, JSON.stringify(formData));
    form.name.value ='';
    form.email.value ='';
    form.message.value ='';
})


