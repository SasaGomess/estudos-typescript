"use strict";
async function fetchData(url) {
    const base = "https://api.origamid.dev/json";
    const response = await fetch(base + url);
    return await response.json();
}
function checkInterface(obj, ...keys) {
    if (obj && typeof obj === "object" && (keys.filter(k => k in obj).length === keys.length)) {
        return true;
    }
    else {
        return false;
    }
}
async function handleData() {
    const jogo = await fetchData("/jogo.json");
    if (checkInterface(jogo, "ano", "desenvolvedora", "nome", "plataformas")) {
        console.log(jogo.desenvolvedora);
    }
    const livro = await fetchData("/livro.json");
    if (checkInterface(livro, "ano", "autor", "paginas", "nome")) {
        console.log(livro.ano);
    }
}
handleData();
