let outInput = document.getElementById("inInput");
let outInput2 = document.getElementById("inInput2");
let btOut = document.getElementById("btIn");

function alertName(){

    if(outInput.value == "" && outInput2.value == ""){
        alert("Valor invalido");
    }else{
        alert("Olá " + outInput.value + " " + outInput2.value + "!");
    }
}
btOut.addEventListener("click", alertName);