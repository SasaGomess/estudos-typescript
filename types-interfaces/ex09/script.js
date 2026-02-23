"use strict";
function preencherDados(dados) {
    document.body.innerHTML += `
        <h2>${dados.nome}</h2> 
        <p>R$ ${dados.preco}</p> 
        <p>Inclui teclado? ${dados.teclado ? "Sim tem teclado" : "Não tem teclado"}</p> 
    `;
}
preencherDados({
    nome: "Computador",
    preco: 3000,
    teclado: true
});
preencherDados({
    nome: "Notebook",
    preco: 2400,
    teclado: false
});
