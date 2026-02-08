class Produto {
    nome:string;
    preco: number;

    constructor(nome: string, preco: number){
        this.nome = nome;
        this.preco = preco
    }

    precoReal(){
        return `R$ ${this.preco}`;
    }
}

class Livro extends Produto{
    autor: string;

    constructor(autor: string, nome: string, preco: number){
        super(nome, preco);
        this.autor = autor;
    }
}

class Jogo extends Produto{
    jogadores: number;

    constructor(jogadores: number, nome:string, preco: number){
        super(nome, preco);
        this.jogadores = jogadores;
    }
}

const livro = new Produto("A Guerra dos Tronos", 40);

console.log(livro);
console.log(livro.preco);

console.log(livro.precoReal);

console.log(livro instanceof Produto);

const produto02 = new Livro("J. R. R. Tolkienn", "O Hobbit", 50);

if(produto02 instanceof Livro){
    console.log(produto02.autor)
}

function buscarProduto(busca: string){
    if(busca === "O Hobbit"){
        return new Livro("J. R. R. Tolkienn", "O Hobbit", 40);
    } 

    if(busca === "Hollow Knight"){
        return new Jogo(500000000, "Hollow Knight", 34.56);
    }

    return null;
}

const produto = buscarProduto("Hollow Knight");

if(produto instanceof Jogo){
    console.log(produto.jogadores);
}

if(produto instanceof Livro){
    console.log(produto.autor);
}

if(produto instanceof Produto){
    console.log(produto.preco);
}
interface Carro {
    nome: string;
}
const honda: Carro = {
    nome: "honda"
}

console.log(honda instanceof Carro);



