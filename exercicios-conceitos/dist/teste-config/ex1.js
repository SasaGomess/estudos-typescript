import plugin from './plugin.js';
plugin();
function handleProduto(dados) {
}
const link = document.querySelector("a");
if (link) {
    link.innerHTML = "Teste";
}
function handleClick() {
    console.log(this.innerHTML);
}
document.documentElement.addEventListener('click', handleClick);
function trocarModo(modo) {
    if (modo === "dark") {
        return "color: black";
    }
    else {
        return "color: white";
    }
}
function maiuscula(frase) {
    const total = 100;
}
trocarModo("dark");
//# sourceMappingURL=ex1.js.map