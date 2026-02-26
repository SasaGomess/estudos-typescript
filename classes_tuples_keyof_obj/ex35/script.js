"use strict";
let chave;
chave = "nome";
let chave2;
chave2 = "a";
//Acessar o elemento da chave de um objeto ou interface eu utilizo o []
function selecionar(seletor) {
    return document.querySelector(seletor);
}
selecionar('a')?.href;
selecionar('video')?.volume;
