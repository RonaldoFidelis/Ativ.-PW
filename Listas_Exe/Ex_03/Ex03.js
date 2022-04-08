let nome = prompt("Digite seu nome: ");

    while(nome == ""){
        nome = window.prompt("Olá, digite o seu nome: ");
    }
    alert("Olá " + nome + "!");