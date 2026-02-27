import plugin from  './plugin.js'
// import slide from './slide.js'

plugin();
// slide();

interface Produto {
    nome: string;
    preco: number;
}

function handleProduto(dados: any) {
    
}

// Sem adicionar o DOM como lib nas configurações
const link = document.querySelector("a")

if (link) {
    link.innerHTML = "Teste"
}

//This faz referencia ao elemento que foi adicionado documentElement (HTMLElement)
function handleClick(this: HTMLElement) {
    console.log(this.innerHTML);
}

document.documentElement.addEventListener('click', handleClick);


function trocarModo(modo: string) {
    if(modo === "dark"){
        return "color: black"
    } else {
        return "color: white"
    }
}

function maiuscula(frase: string) {
    const total = 100;
}

trocarModo("dark")