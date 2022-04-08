let inInput = document.getElementById("inInput");
let inInput2 =document.getElementById("inInput2");
let btOut = document.getElementById("btIn");
let outRes = document.getElementById("outRes");

function gerarOperações(){
    let outIn = Number(inInput.value);
    let outIn2 = Number(inInput2.value);

    let potencia = Math.pow(outIn,outIn2);
    let multi = outIn * outIn2;
    let div = outIn/outIn2;
    let soma = outIn + outIn2;
    let sub = outIn - outIn2;
    outRes.innerText= "Potencia: " + potencia + "\nMultiplicação: " + multi + "\nDivisão: " + div + "\nSoma: " + soma + "\nSubtração: " + sub;
    
}
btOut.addEventListener("click", gerarOperações);