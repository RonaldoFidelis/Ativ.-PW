let outInput = document.getElementById("inInput");
let btOut = document.getElementById("btIn");

function alertName(){

    if(outInput.value == ""){
        alert("Valor invalido");
    }else{
        alert("Olá " + outInput.value + "!");
    }

    outInput.value = ""
}
btOut.addEventListener("click", alertName);