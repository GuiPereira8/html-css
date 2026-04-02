// LISTA DE PRODUTOS

let produtos = ["Computador", "Telefone", "Mouse", "Teclado"];
console.log(produtos);
console.log(produtos.length);

produtos.splice(2, 1);
console.log(produtos);

let resultado = produtos.filter((item) => {
    return item === "Computador"
});
console.log(resultado);
produtos.splice(1, 1);
console.log(produtos);

// INCLUSÃO E EXCLUSÃO DE ITENS

/*
Método SPLICE() = Usado para alterar, inserir ou remover um elemento de um vetor.
produtos.splice(2, 1);

Método PUSH() = Adiciona um elemento ao final do vetor. 
produtos.push()

Método UNSHIFT() = Adiciona um elemento ao início do vetor e desloca os elementos existentes uma posição abaixo.
produtos.unshift()

Método POP() = Remove o último elemento do vetor.
produtos.pop()

Método SHIFT() = Remove o primeiro elemento do vetor e desloca os elementos existentes uma posição acima.
produtos.shift()
*/