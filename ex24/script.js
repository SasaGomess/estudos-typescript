"use strict";
function extractText(elemento) {
    return {
        text: elemento.innerText,
        elemento
    };
}
const link = document.querySelector("a");
if (link) {
    console.log(extractText(link).elemento.href);
}
document.querySelector;
function $(selector) {
    return document.querySelector(selector);
}
const link01 = $("a")?.href;
const link02 = document.querySelector(".link");
async function getData(url) {
    const response = await fetch(url);
    return await response.json();
}
async function handleData() {
    const notebook = await getData("https://api.origamid.dev/json/notebook.json");
    console.log(notebook);
}
handleData();
