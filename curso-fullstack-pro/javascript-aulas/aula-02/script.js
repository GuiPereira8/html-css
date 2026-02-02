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

function mediaAluno(nota1, nota2) {
    let media = (nota1 + nota2) / 2;

    if (media >= 7) {
        console.log(`Aluno aprovado com a média: ${media}`);
    } else {
        console.log(`Aluno reprovado com a média: ${media}`);
    }
}

function aluno(nome, curso) {
    let mensagem = `Olá ${nome} seja bem vindo ao curso de ${curso}`;
    console.log(mensagem);
}