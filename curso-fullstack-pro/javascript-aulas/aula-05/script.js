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

//CONDICIONAIS!
let numero = 8;

numero === 10 ? console.log("Número é igual a 10") : console.log("Número não tem o valor 10") ;

if (numero === 8) {
    console.log("Seu número é igual a 8!");
}else {
    console.log("Número é diferente de 8!");
}

let idade = 22;

if (idade >= 18) {
    console.log(`Você tem ${idade} anos já é maior de idade!`);
}else {
    console.log(`Você tem ${idade} anos é menor de idade!`);
}