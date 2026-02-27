interface ProdutoInterface { 
    nome: string;
    quantidade: number;
}

const produto20 = {
    nome: "Notebook",
    quantidade: 30,
    preco: 34.40
}

const produto21 = {
    nome: "Geladeira",
    quantidade: 30,
    freezer: true
}

// não pode ter menos propriedade que a interface
const servico = {
    nome: "Instalação"  
}

function mostrarQuantidade(produto: ProdutoInterface) {
    console.log(produto.quantidade + 20);
    console.log(produto.nome)
}

mostrarQuantidade(produto20);
mostrarQuantidade(produto21);
// mostrarQuantidade(servico);


function mostrarQuantidadePartial(produto: Partial<ProdutoInterface>) {
    if(produto.quantidade){
        console.log(produto.quantidade + 20);
    }
    console.log(produto.nome?.concat(", esse é um produto"));
}

// Adiciona uma propriedade generica para permitir flexibilidade das propriedades de um objeto do tipo da Interface

interface Post {
    titulo: string;
    visualizacoes: number;
    tags: string[];
    [key: string]: unknown;
}

const artigo: Post = {
    titulo: "Como aprender React",
    visualizacoes: 3000,
    tags: ['React', 'Componentes', 'Context'],
    autor: "André"
}

if(typeof artigo.autor === "string"){
    artigo.autor.toLowerCase();
}

artigo.descricao;

// Record



// Pode receber como parametro qualquer tipo
// function mostrarTitulo(obj: unknown) {
//     if(obj && typeof obj === "object" && ('titulo' in obj && typeof obj.titulo === "string")) {
//         obj.titulo.toLowerCase();
//     }
// }

// interface ObjetoLiteral {
//     [key: string]: unknown;
// }

// function mostrarTitulo(obj: ObjetoLiteral) {
//     if('titulo' in obj && typeof obj.titulo === "string")  {
//         obj.titulo.toLowerCase();
//     }
// }

// typescript executa mas me mostra o erro em tempo de compilação para saber qual é o erro
// mostrarTitulo("Ola");

type ObjetoLiteral2 = Record<'titulo' | 'autor', unknown>;

function mostrarTitulo(obj: ObjetoLiteral2) {
    if('titulo' in obj && typeof obj.titulo === "string")  {
        obj.titulo.toLowerCase();
        obj.titulo
    }
}

mostrarTitulo({titulo: "Hábitos Atômicos", autor: "James Clear"});



