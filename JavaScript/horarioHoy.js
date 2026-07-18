function mostrarHorarioHoy(){
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
const contenedor = document.getElementById("horarioHoy");
const clasesHoy = materias.filter(materia => materia.dia === hoy);
if(clasesHoy.length === 0){
	contenedor.innerHTML = `
		<h3>Hoy es ${hoy}</h3>
		<p>No tienes clases hoy 😄</p>
	`;
	return;
}
let html = `<h3>Hoy es ${hoy}</h3>`;
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