"use strict";
let produto = "Livro";
let preco = 34;
const carro = {
    marca: "Audi",
    portas: 4
};
const barato = preco < 400 ? true : 'pruduto caro';
function somar(a, b) {
    return a + b;
}
const nintendo = {
    nome: "Nintendo",
    preco: "2000",
};
function transformarPreco(produto) {
    produto.preco = "R$" + produto.preco;
    return produto;
}
const produtoNovo = transformarPreco(nintendo);
// console.log(produtoNovo);
