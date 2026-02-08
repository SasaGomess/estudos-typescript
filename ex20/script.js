"use strict";
const button = document.querySelector("button");
function handleClick(event) {
    console.log(event);
}
button?.addEventListener("click", handleClick);
function ativarMenu(event) {
    console.log(event);
    if (event instanceof MouseEvent) {
        console.log(event.pageX);
    }
    if (event instanceof TouchEvent) {
        console.log(event.touches[0].pageX);
    }
}
document.documentElement.addEventListener("mousedown", ativarMenu);
document.documentElement.addEventListener("touchstart", ativarMenu);
window.addEventListener("keydown", ativarMenu);
