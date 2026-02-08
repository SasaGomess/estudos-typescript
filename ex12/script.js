"use strict";
async function fetchCourse() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const data = await response.json();
    showCourses(data);
}
fetchCourse();
function showCourses(courses) {
    courses.forEach(course => {
        let color;
        if (course.nivel === "iniciante") {
            color = "blue";
        }
        else if (course.nivel === "avancado") {
            color = "red";
        }
        document.body.innerHTML += `
        <div>
        <h2 style="color: ${color};">${course.nome}</h2>
        <p>Horas: ${course.horas}h</p>
        <p>Aulas: ${course.aulas}</p>
        <p>Tipo: ${course.gratuito ? "Gratuito" : "Pago"}</p>
        <p>Tags: ${course.tags.join(", ")}</p>
        <p>IdAulas: ${course.idAulas.join(", ")}</p>
        </div>
    `;
    });
}
