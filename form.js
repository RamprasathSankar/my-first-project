let form = document.querySelector('#form');
        
        
let uname = document.querySelector('#username');

let mail = document.querySelector('#email');
let pass = document.querySelector('#password');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    inputvalidation();
});

function inputvalidation() {
    let username = uname.value.trim();
    console.log(username);
    
    let email = mail.value.trim();
    let password = pass.value.trim();
    if (username === '') {
        seterror(uname, 'username is empty');
    }
    else {
        setsuccess(uname);
    }
    if (email === '') {
        seterror(mail, 'email is empty');
    }
    else {
        setsuccess(mail);
    }
    if (password === '') {
        seterror(pass, 'password is empty')
    }
    else if (password.length > 8 || password.length < 4) {
        seterror(pass, 'password must be 4 to 8 characters')
    } else {
        setsuccess(pass)
    }
}
function seterror(input, message) {
    let inputbox = input.parentElement;        
    let err = inputbox.querySelector('small')
    err.innerText = message;
}
function setsuccess(input) {
    let inputbox = input.parentElement;
    let err = inputbox.querySelector('small')
    err.innerText = '';
}