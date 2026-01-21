let area = document.getElementById("area");

function entrar() {
    let nome = window.prompt("Digite seu nome");

    if (nome === '' || nome === null || nome >= 0) {
        window.alert("Ops algo deu errado!");
        area.innerHTML = "Clique no botão para começar...";
    } else {
        area.innerHTML = `Olá ${nome}, seja bem vindo!   `;

        let botaoSair = document.createElement("button");
        botaoSair.innerText = "Sair da conta";
        botaoSair.onclick = sair;
        area.appendChild(botaoSair);
    }
}

function sair() {
    alert("Até mais!");
    area.innerHTML = "Você saiu!";
}