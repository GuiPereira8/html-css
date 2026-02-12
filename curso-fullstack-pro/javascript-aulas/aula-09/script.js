//Objetos em JavaScript

let pessoa = {
    nome: "Guilherme",
    idade: 22,
    altura: 1.82,
    pais: "Brasil",
    cargo: "Desenvolvedor Full-Stack"
};
console.log(pessoa);

//Objetos com funções
let carro = {
    nome: "Gol Polo",
    marca: "volkswagen",
    ano: 2025,
    ligado: true,

    ligar: function() {
        this.ligado = true
        console.log("Você ligou o seu carro!");
    },
    
    desligar: function() {
        this.ligado = false 
        console.log("Você desligou o seu carro!");
    }
};
console.log(carro);

//Listas de objetos
let usuarios = [
    {
        nome: "Guilherme",
        cargo: "Programador",
        status: "Ativo"
    },
    {
        nome: "Eduarda",
        cargo: "Advogada",
        status: "Ativo"
    },
    {
        nome: "Hanna",
        cargo: "Front-end",
        status: "Ativo"
    },
];
console.log(usuarios);

//Template Strings
let nome = "Guilherme";
let sobrenome = "Pereira";
let idade = 22;

//Mensagem sem Template String
let mensagem1 = "Meu nome é " + nome + " " + sobrenome + " e eu tenho " + idade + " anos de idade";
console.log(mensagem1);

//Mensagem usando Template String
let mensagem2 = `Meu nome é ${nome} ${sobrenome} e eu tenho ${idade} anos de idade!`;
console.log(mensagem2);