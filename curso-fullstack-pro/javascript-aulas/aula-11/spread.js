
//Spread Operator
// let primeiros = [1, 2, 3];

// let numeros = [...primeiros, 4, 5, 8, 10];
// console.log(numeros.length);

// let pessoa = {
//     nome: "Guilherme",
//     idade: 25,
//     cargo: "Desenvolvedor Front-End"
// };

// let novaPessoa = {
//     ...pessoa,
//     status: "Ativo",
//     cidade: "Salvador / BH",
//     telefone: "(75)988012121"
// };

// console.log(novaPessoa);

function novoUsuario(info) {
    let dados = {
        ...info,
        status: "ATIVO",
        inicio: "20/08/2024",
        codigo: "0212121"
    };

    console.log(dados);
}

novoUsuario({nome: "Lucas", sobrenome: "Silva", cargo: "DEV"})