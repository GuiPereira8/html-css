const produtos = [
    {nome: "Bolo", price: 25},

    {nome: "Coca cola", price: 8},

    {nome: "Guarana", price: 5},

    {nome: "Chocolate", price: 20},
    
    {nome: "Agua", price: 4},
];

let resposta = produtos.find((item) => {
    if (item.price >= 20) {
        console.log(`Estes são os produtos caros! ${item.nome} = R$${item.price}`);
    }
});
console.log(resposta);

let filtroTeste = produtos.filter((valor) => {
    if (valor.price <= 8) {
        console.log(`Estes são os produtos baratos! ${valor.nome} = R$${valor.price}`);
    }
});
console.log(filtroTeste);

