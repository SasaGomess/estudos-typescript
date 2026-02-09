"use strict";
// function somar(a: number, b:number, c?:number): number{
class Quadrado {
    perimetro(lado) {
        return lado * 4;
    }
}
function calcular(forma) {
    if (forma instanceof Quadrado) {
        return forma.perimetro(3);
    }
    return forma.perimetro(3, 5, 7);
}
const triangulo = {
    perimetro(lado, lado2, lado3) {
        return lado + lado2 + lado3;
    }
};
console.log(calcular(new Quadrado()));
console.log(calcular(triangulo));
