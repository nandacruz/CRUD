function cpf_mask(){
    var cpf = document.getElementById('cpf');
    if(cpf.value.length == 3 || cpf.value.length == 7){
        cpf.value += ".";
    }else if(cpf.value.length == 11){
        cpf.value += " - ";
    }
}

function tel_mask(){
    var tel = document.getElementById('tel');
    if(tel.value.length == 1){
        tel.value = "(" + tel.value;
    }else if(tel.value.length == 3){
        tel.value = tel.value + ") ";
    }
    else if(tel.value.length == 10){
        tel.value += " - ";
    }
}