
// FUNÇÕES ANÔNIMAS / ARROW FUNCTION

/*
() function {}
() => {}

1- Os parênteses '()', é por onde a função recebe os argumentos (assim como funções tradicionais).
2- "Seta" =>, responsável pelo nome "Arrow".
3- As chaves '{}' o bloco de código que representa o corpo da função onde o código é escrito. 

*/

function somar(a, b) {
    let soma = a * b;
    return console.log(soma);
}
//somar(4,8);


let subtrair = (valor1, valor2) => {
    let total = valor1 - valor2;
    return console.log(total);
}
//subtrair(25, 5);

let numeros = [1, 2, 3, 4, 5, 10];

numeros.map((item) => {
    console.log(item);
});