"use strict";
const produto20 = {
    nome: "Notebook",
    quantidade: 30,
    preco: 34.40
};
const produto21 = {
    nome: "Geladeira",
    quantidade: 30,
    freezer: true
};
const servico = {
    nome: "Instalação"
};
function mostrarQuantidade(produto) {
    console.log(produto.quantidade + 20);
    console.log(produto.nome);
}
mostrarQuantidade(produto20);
mostrarQuantidade(produto21);
function mostrarQuantidadePartial(produto) {
    if (produto.quantidade) {
        console.log(produto.quantidade + 20);
    }
    console.log(produto.nome?.concat(", esse é um produto"));
}
const artigo = {
    titulo: "Como aprender React",
    visualizacoes: 3000,
    tags: ['React', 'Componentes', 'Context'],
    autor: "André"
};
if (typeof artigo.autor === "string") {
    artigo.autor.toLowerCase();
}
artigo.descricao;
function mostrarTitulo(obj) {
    if ('titulo' in obj && typeof obj.titulo === "string") {
        obj.titulo.toLowerCase();
        obj.titulo;
    }
}
mostrarTitulo({ titulo: "Hábitos Atômicos", autor: "James Clear" });
//# sourceMappingURL=script.js.map