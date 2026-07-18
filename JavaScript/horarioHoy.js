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
		<p class="mensaje">
		🎉 Hoy no tienes clases.
		</p>
		<p>Aprovecha para descansar o estudiar 😄</p>	
`;
	return;
}
//Contar cuántas clases hay hoy
const cantidad = clasesHoy.length;
let html = `
	<h3>Hoy es ${hoy}</h3>
`;
//Mensaje según la cantidad de clases
if(cantidad == 1){
	html += `
	<p class="mensaje">
	📚 Hoy tienes <b>1 clase</b>.
	</p>
	<p><b>¡Muchos éxitos en la universidad!</b> 💪</p>
	`;
}else{
	html += `
	<p class="mensaje">
	📚 Hoy tienes <b>${cantidad} clases</b>.
	</p>
	<p><b>¡Muchos éxitos en la universidad!</b> 💪</p>
	`;
}
//Mostrar las materias
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
