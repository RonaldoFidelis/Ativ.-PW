let outInputValor = document.getElementById("inInputValor");
let outBt = document.getElementById("outBt");
let outRes = document.getElementById("outRes");
const notas = [100,50,20,10,5,2,1];

function valorMin(){
    let valorInt = Number(outInputValor.value);

    for(let i of notas){
        let qtdNotas = parseInt(valorInt / i);
        outRes.innerHTML += `<li>${qtdNotas} Notas de R$ ${i},00</li>`
        valorInt = valorInt % i;
    }
    outInputValor.value="";
    outInputValor.focus();
}

outBt.addEventListener("click", valorMin);
