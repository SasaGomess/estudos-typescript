abstract class Forma {
    constructor() {
    }

    abstract getPerimetro(): number;

    abstract getArea(): number; 
}

class Quadrado extends Forma {
    private readonly lados: number = 4;
    protected medida: number;

    constructor(medida: number){
        super();
        this.medida = medida;
    }

    public getPerimetro(): number {
        return this.lados * this.medida;
    }

    public getArea(): number {
        return this.medida * this.medida;
    }

    public getMedida (): number {
        return this.medida;
    }
}

class Circulo extends Forma {
    readonly PI = Math.PI;
    private raio: number;

    constructor(raio: number){
        super()
        this.raio = raio;
    }

    public getPerimetro(): number {
        return Math.round(2 * this.PI * this.raio * 100) / 100;
    }

    public getArea(): number {
        return Math.round(this.PI * Math.pow(this.raio, 2) * 100) / 100;
    }

    public getRaio (): number {
        return this.raio;
    }

}

const q1 = new Quadrado(10);
const c1 = new Circulo(4.3);

console.log(q1.getArea());
console.log(q1.getPerimetro());

console.log(c1.getArea());
console.log(c1.getPerimetro());

const formas = [2,3,20,7,6,57,36,9].map(n => {
        if(n < 15){
            return new Quadrado(n);
        }else {
            return new Circulo(n);
        }

    }
);

formas.forEach(forma => {
    if(forma instanceof Quadrado){
        console.log("É um quadrado = " + forma.getMedida());
    } 

    if(forma instanceof Circulo ){
        console.log("É um círculo = " + forma.getRaio());
    }
});
