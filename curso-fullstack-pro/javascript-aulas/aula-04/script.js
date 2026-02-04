let numero = 0;
let texto = document.getElementById('saida');

// While = enquanto
/*
while (numero <= 100) {
    texto.innerHTML += `<br> O valor do número é: ${numero}`;
    numero += 1
}; */

// For = Para
for (let x = 0; x <= 20; x++ ) {
    texto.innerHTML += `<br> O valor do número é: ${x}`;
    console.log(x * 2);
}