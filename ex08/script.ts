// type Produto = {
//     nome:string;
//     preco:number;
//     teclado:boolean
// }

// function preencherDados(dados:Produto) {
//     document.body.innerHTML += `
//         <h2>${dados.nome}</h2> 
//         <p>R$ ${dados.preco}</p> 
//         <p>Inclui teclado? ${dados.teclado ? "Sim tem teclado" : "Não tem teclado"}</p> 
//     `;   
// }

// const produto01 = {
//     nome: "Tablet",
//     preco: 1500,
//     teclado: false
// }

// preencherDados(produto01);

// preencherDados({
//     nome: "Computador",
//     preco: 3000,
//     teclado: true
// });

// preencherDados({
//     nome: "Notebook",
//     preco: 2400,
//     teclado: false
// });

// type Categorias = "alimenticio" | "eletrodomesticos" | "eletronicos";

// function pintarCategoria(categoria: Categorias) {
//     if(categoria === 'alimenticio'){
//         console.log("Pintar de azul");
//     }

//     if(categoria === 'eletrodomesticos'){
//         console.log("Pintar de vermelho");
//     }

//     if(categoria === 'eletronicos'){
//         console.log("Pintar de laranja");
//     }
    
// }

// pintarCategoria("eletronicos");

// type NumberOrString = string | number;
