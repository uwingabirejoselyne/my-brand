var Apiform = document.getElementById("myForm");
Apiform.addEventListener('submit',(e)=>{
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email= document.getElementById("email").value;
    var message= document.getElementById("message").value;
    fetch("http://localhost:5000/posts",{
        method:'POST',
        body:JSON.stringify({
            name:name,
            email:email,
            message:message
        }),
        headers:{
            "Content-Type":"application/json; charset=UTF-8"
        }
    })
    .then(function(response){
       return response.json();
    })
    .then(function(data){
        console.log(data);
    })
})
