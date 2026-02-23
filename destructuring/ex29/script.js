"use strict";
const { body } = document;
function handleData({ nome, idade }) {
    nome.toLowerCase();
    idade.toFixed();
}
handleData({
    nome: "Maria",
    idade: 25,
});
function handleClickDes({ currentTarget, pageX }) {
    if (currentTarget instanceof HTMLElement) {
        currentTarget.innerHTML = `<h1>Mouse click em x: ${pageX}</h1>`;
    }
}
document.documentElement.addEventListener("click", handleClickDes);
function handleClickInterface({ currentTarget, pageX }) {
    if (currentTarget instanceof HTMLElement) {
        currentTarget.innerHTML = `<h1>Mouse click em x: ${pageX}</h1>`;
    }
}
document.documentElement.addEventListener("click", handleClickInterface);
function handleClick({ currentTarget }) {
    if (currentTarget instanceof HTMLElement) {
        currentTarget.innerHTML = `<h1>Clicando</h1>`;
    }
}
function comparar(tipo, ...numeros) {
    if (tipo === "Menor") {
        return Math.min(...numeros);
    }
    if (tipo === "Maior") {
        return Math.max(...numeros);
    }
    console.log(numeros);
}
comparar("Menor", 1, 3, 5, 7, 8, 6, 5, 6, 5);
comparar("Maior", 15, 13, 45, 57, 78, 64, 52, 64, 56);
