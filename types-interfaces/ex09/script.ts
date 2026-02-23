interface InterfaceProduto {
    nome:string;
    preco:number;
    teclado:boolean;
}

type TypeProdutos = {
    nome:string;
    preco:number;
    teclado:boolean;
}

function preencherDados(dados:InterfaceProduto) {
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

