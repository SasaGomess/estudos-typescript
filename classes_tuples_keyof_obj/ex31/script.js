"use strict";
class Livro {
    //apenas leitura
    paginas = 364;
    titulo;
    autor;
    isbn;
    constructor(titulo, autor, paginas, isbn) {
        this.titulo = titulo;
        this.paginas = paginas;
        this.autor = autor;
        this.isbn = isbn;
    }
    getAutor() {
        return Livro.transformarAutor(this.autor);
    }
    setAutor(autor) {
        this.autor = autor;
    }
    static transformarAutor(autorName) {
        return autorName.toUpperCase();
    }
}
const diarioDeUmBanana = new Livro("Diário de um banana", "Jeff Kinney", 217, "448328547382");
console.log(diarioDeUmBanana);
console.log(diarioDeUmBanana.getAutor());
// console.log(Livro.transformarAutor("Diário de um banana"));
