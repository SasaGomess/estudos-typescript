"use strict";
const numeros = [43, 25, 6, 3, 81];
const valores = [10, 'Taxas', 20, 'Imposto', 40, 'Saldo'];
function maiorQue10(data) {
    return data.filter(n => n > 10);
}
function filtrarValor(data) {
    return data.filter(item => typeof item === "string");
}
console.log(filtrarValor(valores));
console.log(maiorQue10(numeros));
const dados = [
    ['senhor dos aneis', 40],
    ['guerra dos tronos', 180],
    ['dexter', 140]
];
function pegaLivrosPrecoMaior50(data) {
    return data.flatMap(n => n.filter(i => typeof i === "number" && i >= 50));
}
console.log(pegaLivrosPrecoMaior50(dados));
