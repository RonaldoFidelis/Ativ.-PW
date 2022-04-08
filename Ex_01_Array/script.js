let inputNum = document.getElementById("inInputNum");
let inIndice = document.getElementById("inIndiceInput");
let lista = document.getElementById("listarIndice");
let Vetor =[];

function inserirInicio(){
    if (inputNum.value == ""){
        alert("Digite um valor valido!")
    } else{
        Vetor.unshift(inputNum.value);
        lista.innerText = "";
        for( let i = 0;i <= Vetor.length; i++ ){
            lista.innerHTML += `<li>${Vetor[i]}</li>`
        }
    }
    inputNum.value = "";
    inputNum.focus();   
}
let outButtonInicio = document.getElementById("inButtonInicio");
outButtonInicio.addEventListener("click",inserirInicio);


function inserirFim(){
    if (inputNum.value == ""){
        alert("Digite um valor valido!")
    } else{
        Vetor.push(inputNum.value);
        lista.innerText = "";
        for (let i = 0; i <= Vetor.length; i++){
            lista.innerHTML += `<li>${Vetor[i]}</li>`
        }
    }
    inputNum.value = "";
    inputNum.focus();   
}
let outButtonFim = document.getElementById("inButtonFim");
outButtonFim.addEventListener("click",inserirFim);


function removerLista(){
    if (inIndice.value >= Vetor.length){
        alert("Indice não existe!")
    } else{
        Vetor.splice(inIndice.value,1);
        lista.innerText = "";
        for( let i = 0; i<Vetor.length; i++){
            lista.innerHTML = `<li>${Vetor[i]}</li>`;
        }
    }
    inIndice.value = "";
    inIndice.focus();  
}
let outButtonRemover = document.getElementById("inIndice");
outButtonRemover.addEventListener("click", removerLista);