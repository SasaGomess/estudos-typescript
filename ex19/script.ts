const links = document.querySelectorAll(".link");

function mudaBordaECor(elemento: HTMLElement){
    elemento.style.color = "0f0";
    elemento.style.border = "2px solid blue";
    elemento.style.borderRadius = "4px"
}

links.forEach(link => {
    if(link instanceof HTMLElement){
        mudaBordaECor(link);
    }
})