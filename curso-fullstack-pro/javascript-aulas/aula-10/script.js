
//Desconstruindo um Objeto

let pessoa = {
    nome: "Guilherme",
    sobrenome: "Pereira",
    idade: 22,
    cargo: "Programador Full-Stack"
};

//console.log(pessoa.nome);
//console.log(pessoa.cargo);

/* Se caso tiver uma variável com o mesmo nome de uma propriedade do objeto é possivel renomear a propriedade
Como no exemplo abaixo. */
// let nome = 'Teste';
// const {nome:nomePessoa, cargo, idade, sobrenome} = pessoa;

// console.log(nomePessoa);
// console.log(sobrenome);

// console.log(idade);
// console.log(cargo);

//======================================================//

//Desconstruindo Arrays
let nomes = ["Guilherme", "Eduarda", "Maria", "Matheus"];

// let { 0:guilherme, 1:eduarda } = nomes

// console.log(guilherme);
// console.log(eduarda);

let [primeiroNome, segundoNome] = nomes;
console.log(segundoNome);
console.log(primeiroNome);