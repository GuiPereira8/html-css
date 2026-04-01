
// FIND()

let listagem = [5, 3, "Guilherme", 8, "Sofia"];

let busca = listagem.find((item) => {
    return item === "Guilherme";
});/*
console.log(busca);
*/

// METÓDO FILTER()

let frutas = ["Melancia", "Maçã", "Uva", "Banana", "Tangerina", "Uva", "Uva roxa"];

let resultado = frutas.filter((item) => {
    //return item.length >= 5
    return item === 'Uva'
});
console.log(resultado);