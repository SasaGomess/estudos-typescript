"use strict";
const produto1 = ["Notebook", 2500];
const produto2 = ["Olá", 34, true];
if (typeof produto1[0] === "string") {
    produto1[0].toUpperCase();
}
produto2[0].toUpperCase();
produto2[1].toFixed();
// Facilita a desestruturação de um array, pois sei quais são os elementos
const [nome, preco1] = produto2;
const [nome2, preco2] = produto1;
console.log(typeof nome);
console.log(typeof preco1);
console.log(typeof nome2);
console.log(typeof preco2);
function getText(selector) {
    const el = document.querySelector(selector);
    if (el) {
        // retorna uma tupula com htmlElement e string de forma imutável (readonly)
        return [el, el.innerText];
    }
    else {
        return null;
    }
}
const button = getText("button");
console.log(button);
