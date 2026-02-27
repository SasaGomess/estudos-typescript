"use strict";
function toNumber(valor) {
    if (typeof valor === "string") {
        return Number(valor);
    }
    if (typeof valor === "number") {
        return valor;
    }
    throw new Error("O valor deve ser uma String ou um Número");
}
console.log(toNumber(33));
console.log(toNumber('33'));
console.log(Number(true));
//# sourceMappingURL=script.js.map