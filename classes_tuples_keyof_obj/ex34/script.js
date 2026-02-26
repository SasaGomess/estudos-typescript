"use strict";
// async function fetchData() {
//     const response = await fetch("https://api.origamid.dev/json/vendas.json");
//     const json = await response.json();
//     console.log(json);
//     handleVendas(json)
// }
// // Para grandes volumes de dados e que usam arryas fixas utilizar tupulas em vez de objetos acaba sendo mais vantajoso em utilização de memória
// type Venda = [string, number, string, DetalhesProduto]
// interface DetalhesProduto {
//     marca: string; 
//     cor: string;
// }
// function handleVendas(data: Array<Venda>){
//     const soma = data.map(v => v[1]).reduce((v1, v2) => v1 + v2)
//     console.log(soma)
//     const h1 = document.querySelector<HTMLElement>("h1")!;
//     h1.innerHTML = `Soma das vendas é R$${soma}`;
// }
// fetchData();
