function saveData(){
    var name =document.getElementById('name').value;
    var email =document.getElementById('email').value;
    var message =document.getElementById('message').value;
    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
    localStorage.setItem('message',message);
    console.log('data saved');
}
