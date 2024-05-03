const passwordBox=document.querySelector(".input")
const allChar="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=*";

const length=12;

document.querySelector(".generate").addEventListener('click',generate);

document.querySelector(".copy").addEventListener('click',copyPass);

function generate(){
    let password="";
    while(password.length<length){
        password+=allChar[Math.floor(Math.random(allChar)*allChar.length)];
    }
    passwordBox.value=password;
}

function copyPass(){
    passwordBox.select();
    document.execCommand("copy");
}