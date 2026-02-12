//Diferenças entre VAR, LET e CONST

// Entendendo VAR
var nome = 'sujeito';
if (nome === 'sujeito') {
    var curso = 'Curso Front-end completo';
    console.log(curso);
}
//Permite ela ser alterada fora do escopo do bloco em que foi criada.
console.log(curso);
curso = 'JavaScript';
console.log(curso);

// Entendendo LET
if (nome === 'sujeito') {
    let cargo = 'Engenheiro de Software';
    console.log(cargo);
}
//A variável criada com LET so pode ser acessada dentro do escopo do bloco.
//Se tentar chamar fora dará erro!
let bonus = true;
if (bonus) {
    let salario = 4000 + 800;
    console.log(salario);
}

// Entendendo CONST
// É uma variável Constante que não pode ter seu valor alterado.
// É necessário criar e já atribuir um valor a ela.
const trabalho = "Desenvolvedor Full-Stack!";
console.log(trabalho);
trabalho = 'Programador';