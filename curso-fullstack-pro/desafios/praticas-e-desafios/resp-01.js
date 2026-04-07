function verificador(numero) {
    if (numero === 0) {
        console.log(`O Número: ${numero} é ZERO!`);
    } else if (numero > 0) {
        console.log(`O Número: ${numero} é POSITIVO!`);
    } else {
        console.log(`O Número: ${numero} é NEGATIVO!`);
    }
}

verificador(73);