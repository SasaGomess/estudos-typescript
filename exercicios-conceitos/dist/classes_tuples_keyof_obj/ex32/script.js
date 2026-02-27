"use strict";
class Forma {
    constructor() {
    }
}
class Quadrado extends Forma {
    lados = 4;
    medida;
    constructor(medida) {
        super();
        this.medida = medida;
    }
    getPerimetro() {
        return this.lados * this.medida;
    }
    getArea() {
        return this.medida * this.medida;
    }
    getMedida() {
        return this.medida;
    }
}
class Circulo extends Forma {
    PI = Math.PI;
    raio;
    constructor(raio) {
        super();
        this.raio = raio;
    }
    getPerimetro() {
        return Math.round(2 * this.PI * this.raio * 100) / 100;
    }
    getArea() {
        return Math.round(this.PI * Math.pow(this.raio, 2) * 100) / 100;
    }
    getRaio() {
        return this.raio;
    }
}
const q1 = new Quadrado(10);
const c1 = new Circulo(4.3);
console.log(q1.getArea());
console.log(q1.getPerimetro());
console.log(c1.getArea());
console.log(c1.getPerimetro());
const formas = [2, 3, 20, 7, 6, 57, 36, 9].map(n => {
    if (n < 15) {
        return new Quadrado(n);
    }
    else {
        return new Circulo(n);
    }
});
formas.forEach(forma => {
    if (forma instanceof Quadrado) {
        console.log("É um quadrado = " + forma.getMedida());
    }
    if (forma instanceof Circulo) {
        console.log("É um círculo = " + forma.getRaio());
    }
});
//# sourceMappingURL=script.js.map