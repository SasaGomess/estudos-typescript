// function extractText<T extends HTMLElement>(elemento: T){
//     return {
//         text: elemento.innerText,
//         elemento
//     }
// }

// const link = document.querySelector("a");

// if(link){
//     console.log(extractText(link).elemento.href);
// }

// document.querySelector

// function $<T extends Element>(selector:string) {
//     return document.querySelector<T>(selector);
// }

// const link01 = $<HTMLAnchorElement>("a")?.href;


// const link02 = document.querySelector<HTMLAnchorElement>(".link");

// interface Notebook {
//     nome:  string;
//     preco: number;
// }

// async function getData<T>(url:string): Promise<T> {
//     const response = await fetch(url);
//     return await response.json();
// }

// async function handleData() {
//     const notebook = await getData<Notebook>("https://api.origamid.dev/json/notebook.json");
//     console.log(notebook);
// }

// handleData();