
//REST Oparator.
// function convidados(...nomes) {
//     console.log("SEJA BEM VINDO TODOS OS CONVIDADOS!");
//     console.log(nomes);
// }

// convidados("Matheus", "Lucas", "Maria", "Coraline");

function sorteador(...numeros) {
    console.log(numeros);

    const numeroGerado = Math.floor(Math.random() * numeros.length);
    console.log(`O Número gerado foi: ${numeros[numeroGerado]}`);
}

sorteador(1, 4, 6, 8, 90, 56, 89, 24, 32, 80);