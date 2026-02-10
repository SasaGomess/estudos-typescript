"use strict";
function showData(data) {
    if (Array.isArray(data)) {
        data.filter(item => isCourse(item)).forEach((item) => {
            document.body.innerHTML += `
            <div> 
            <p>${item.nome}</p>
            <p>${item.horas}</p>
            <p>${item.tags.join(", ")}</p>
            </div>
            `;
        });
    }
}
function isCourse(value) {
    if (value && typeof value === "object" && "nome" in value && "horas" in value && "tags" in value) {
        return true;
    }
    return false;
}
async function fetchCursos() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const json = await response.json();
    showData(json);
}
fetchCursos();
