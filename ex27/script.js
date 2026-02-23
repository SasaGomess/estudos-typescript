"use strict";
// function showData(data: unknown): void {
//     if (Array.isArray(data)) {
//         data.filter(item => isCourse(item)).forEach((item) => {
//             document.body.innerHTML += `
//             <div> 
//             <p>${item.nome}</p>
//             <p>${item.horas}</p>
//             <p>${item.tags.join(", ")}</p>
//             </div>
//             `
//         }
//         )
//     }
// }
// interface Course {
//     nome: string;
//     horas: number;
//     aulas: number;
//     gratuito: boolean;
//     tags: Array<string>;
//     idAulas: Array<number>;
//     nivel: "avancado" | "iniciante";
// }
// function isCourse(value: unknown): value is Course {
//     if (value && typeof value === "object" && "nome" in value && "horas" in value && "tags" in value) {
//         return true;
//     }
//     return false;
// }
// async function fetchCursos() {
//     const response = await fetch("https://api.origamid.dev/json/cursos.json");
//     const json = await response.json();
//     showData(json);
// }
// fetchCursos();
