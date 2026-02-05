function fazerPedido() {
    let valor = window.parseInt(prompt("Digite um valor de 1 a 4"));

    switch (valor) {
        case 1:
            window.alert("Você pediu um suco");
            break;
        case 2:
            window.alert("Você pediu uma água gelada");
            break;
        case 3: 
            window.alert("Você pediu um Sorvete");
            break;
        case 4: 
            window.alert("Você Chamou o garçom!");
            break;
        default:
            window.alert("Escolha um número entre 1 a 4");
            break;
    }
}