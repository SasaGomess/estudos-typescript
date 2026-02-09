"use strict";
function somar(a, b, c) {
    return a + b + (c ? c : 0);
}
somar(4, 5, 7);
somar(4, 5);
const subtrair = (a, b) => a + b;
subtrair(6, 9);
function pintarTela(cor) {
    document.body.style.background = cor;
}
// if(pintarTela("#000")){
//     console.log("pintou a tela");
// }
// else {
//     console.log("Não pintou")
// }
console.log(pintarTela("#000"));
const btn = document.querySelector("button");
btn?.click();
function isString(value) {
    if (typeof value == "string") {
        return true;
    }
}
console.log(isString("Teste"));
console.log(isString(200));
function throwError(msg) {
    throw new Error(msg);
}
throwError("Aconteceu um erro");
console.log("Tente novamente");
