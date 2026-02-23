// function retorno <T>(a: T): T{
//     return a;
// }

// console.log(retorno<string>("A game"));

// console.log(retorno(200));

// console.log(retorno(true));

// const numeros = [1,2,3,4,5,6,7,8,9];
// const frutas = ["Banana", "Uva", "Pêra", "Laranja", "Limão", "Maçã"];


// function firstFive<T>(lista: Array<T>): Array<T> {
//     return lista.slice(0, 5);
// }

// console.log(firstFive(numeros));
// console.log(firstFive(frutas));


// function notNull<T>(arg: T): T | null {
//     if(arg !== null) return arg;
//     else return null;
// }

// console.log(notNull("Amanda")?.toUpperCase());
// console.log(notNull(200)?.toFixed());

// interface Dados <T> {
//     dado: T;
//     tipo: string;
// }

// function tipoDado<T>(dado: T ): Dados<T> {
//     const resultado = {
//         dado: dado,
//         tipo: typeof dado,
//     };
//     return resultado;
// }

// console.log(tipoDado(200).dado);
