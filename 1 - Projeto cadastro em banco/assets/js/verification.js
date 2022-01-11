var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm_password");


function validate_password(){

    if(password.value != confirm_password){
        confirm_password.setCustomValidity("Senhas não conferem");

    }
    
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;