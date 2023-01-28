//contact 
const form = document.getElementById("myForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("mesage");
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputs();
})
function checkInputs(){
    const namevalue =name.value.trim();
    const emailvalue =email.value.trim();
    const messagevalue =message.value.trim();
    if(namevalue ==""){
        setErrorFor(name,'name can not be empty')
    }
    else{
        setSuccessFor(name)
    }
    if(emailvalue ==""){
        setErrorFor(email,'name can not be empty')
    }
    else{
        setSuccessFor(email)
    }
    if(messagevalue ==""){
        setErrorFor(message,'name can not be empty')
    }
    else{
        setSuccessFor(message)
    }

}
function setErrorFor(input,mesage){
const formControl = input.parentElement;
const small =formControl.querySelector("small");
small.innerText = message;
formControl.className = "form-control error"
}
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success"
    }
