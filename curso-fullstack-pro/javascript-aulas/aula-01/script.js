let nome = window.prompt("Olá, Qual é seu nome?");
let sobrenome = window.prompt("Qual é seu sobrenome?");
let saida = document.getElementById('saida');

console.log("Nome: " + nome);
console.log("Sobrenome: " + sobrenome);

saida.innerHTML = `Olá ${nome} ${sobrenome} Seja Bem-vindo(a) o site!`