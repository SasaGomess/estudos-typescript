const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event: PointerEvent) {
    const nav = document.getElementById("nav");
    const buttonEvent = event.currentTarget;

   

    if (buttonEvent instanceof HTMLButtonElement && nav) {     
        
        const active = nav.classList.contains("active");

        if(active) {
            nav?.classList.remove("active");
            buttonEvent.setAttribute("aria-expanded", "false");
            buttonEvent.setAttribute("aria-label", "Abrir Menu");
        } else {
            nav?.classList.add("active");
            buttonEvent.setAttribute("aria-expanded", "true");
            buttonEvent.setAttribute("aria-label", "Fechar Menu");
        }

    }


    console.log(event);
}

btnMobile?.addEventListener("pointerdown", toggleMenu);

