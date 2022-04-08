let inQtdNum = document.getElementById("qtdNum");
let inQtdColunas = document.getElementById("qtdColunas");
let inButton = document.getElementById("Button");
let outResposta = document.getElementById("Resposta");

//Gerando os números aleatorios
function gerarQtd(){
    
    if(inQtdColunas.value == "" || inQtdNum.value == ""){
        alert("Digite um valor!")
    }else if(inQtdColunas.value > inQtdNum.value || inQtdColunas.value < inQtdNum.value ){
        alert("Números e colunas não corresponde ao tamanho!")
    }else{
        for (i = 1; i <= inQtdColunas.value; i++) {
        inQtdNum.value = Math.trunc(Math.random() * 100) + 1;
        outResposta.innerHTML += `\n<tr>${inQtdNum.value}</tr>`
        }
    }
    inQtdColunas.value = "";
    inQtdNum.value = "";
}
inButton.addEventListener("click",gerarQtd);

