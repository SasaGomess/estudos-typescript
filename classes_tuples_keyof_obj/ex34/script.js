"use strict";
async function fetchData() {
    const response = await fetch("https://api.origamid.dev/json/vendas.json");
    const json = await response.json();
    console.log(json);
    handleVendas(json);
}
function handleVendas(data) {
    const soma = data.map(v => v[1]).reduce((v1, v2) => v1 + v2);
    console.log(soma);
    const h1 = document.querySelector("h1");
    h1.innerHTML = `Soma das vendas é R$${soma}`;
}
fetchData();
