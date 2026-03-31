/* 
// MAP() = PERCORRER TODO O ARRAY.

let lista = ["Matheus", "Lucas", "Sofia", "Guilherme"];

lista.map((item, index) => {
    console.log(`Passando: ${item} - Está na posição: ${index}`);
});
*/

/* 
// REDUCE() = O REDUCE BUSCA REDUZIR UM ARRAY.
*/

let numeros = [7, 8, 9, 10];
//Soma todos os numeros do Array, o numero do array, a posição do numero no array, e o array original.
let total = numeros.reduce((acumulador, numero, indice, original) => {
    console.log(`${acumulador} - total até o momento`);
    console.log(`${numero} - Valor atual`);
    //console.log(`${indice} - Posição atual`);
    //console.log(`${original} - Array original`);
    console.log("<----------===----------->");

    return acumulador += numero;
});
console.log("Total do Reduce: " + total);