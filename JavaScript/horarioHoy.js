function mostrarHorarioHoy(){
const meses = [
"Enero","Febrero","Marzo","Abril","Mayo","Junio",
"Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
];
const mesActual = new Date().getMonth(); // 0 = Enero
const contenedor = document.getElementById("horarioHoy");
// Meses de vacaciones
if(mesActual === 5 || mesActual === 6 || mesActual === 11){
    contenedor.innerHTML = `
        <h3>${meses[mesActual]}</h3>
        <p><b>Actualmente estás en vacaciones.</b></p>
        <p>😄 Disfruta tu descanso y prepárate para el próximo semestre.</p>
    `;
    return;
}
const dias = [
"Domingo",
"Lunes",
"Martes",
"Miércoles",
"Jueves",
"Viernes",
"Sábado"
];
const hoy = dias[new Date().getDay()];
const clasesHoy = materias.filter(materia => materia.dia === hoy);
if(clasesHoy.length === 0){
    contenedor.innerHTML = `
        <h3>Hoy es ${hoy}</h3>
        <p>No tienes clases hoy.</p>
        <p>📚 Aprovecha para estudiar o descansar.</p>
    `;
    return;
}
let html = `<h3>Hoy es ${hoy}</h3>`;
if(clasesHoy.length === 1){
    html += `<p>📖 Hoy tienes <b>1 clase</b>.</p>`;
}else{
	html += `<p>📖 Hoy tienes <b>${clasesHoy.length} clases</b>.</p>`;
}
html += `<p>✨ ¡Muchos éxitos en la universidad!</p><br>`;
clasesHoy.forEach(materia=>{
html += `
<div class="materia">
    <h4>${materia.nombre}</h4>
    <p><b>Hora:</b> ${materia.hora}</p>
    <p><b>Bloque:</b> ${materia.bloque}</p>
    <p><b>Salón:</b> ${materia.salon}</p>
</div>
<hr>
`;
});
contenedor.innerHTML = html;
}
mostrarHorarioHoy();
