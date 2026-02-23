"use strict";
function salvaFuncionario(dados) {
    localStorage.setItem("Nome", dados.nome);
    localStorage.setItem("Idade", String(dados.idade));
    localStorage.setItem("Cargo", dados.cargo);
    localStorage.setItem("Setor", dados.setor);
    localStorage.setItem("Salario", String(dados.salario));
}
salvaFuncionario({ nome: "Julia", cpf: "765.653.346-21", idade: 21, cargo: "Analista de Dados Jr", setor: "TI", salario: 4000 });
function handleInterfaceCarro(carro) {
    carro.portas;
    carro.preco;
    carro.rodas;
}
window.userId = 200;
