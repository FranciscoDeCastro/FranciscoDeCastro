//Autores: Francisco de Castro

window.addEventListener("load", inicio);
let sistema = new Sistema();

function inicio(){
	document.getElementById("pestañaInicio").style.display = "block";
	document.getElementById("pestañaAcerca").style.display = "none";
	document.getElementById("pestañaServicio").style.display = "none";
	document.getElementById("pestañaPortafolio").style.display = "none";
	document.getElementById("pestañaBlog").style.display = "none";
	document.getElementById("pestañaContacto").style.display = "none";
	document.getElementById("pestañaContratameYa").style.display = "none";
	
	document.getElementById("idInicio").addEventListener("click", inicio2);
	document.getElementById("idAcerca").addEventListener("click", acerca);
	document.getElementById("idServicios").addEventListener("click", servicio);
	document.getElementById("idPortafolio").addEventListener("click", portfalio);
	document.getElementById("idBlog").addEventListener("click", blog);
	document.getElementById("idContacto").addEventListener("click", contacto);
	document.getElementById("idContratameYa").addEventListener("click", contratame);
	cargar();
}

function inicio2(){
	document.getElementById("pestañaInicio").style.display = "block";
	document.getElementById("pestañaAcerca").style.display = "none";
	document.getElementById("pestañaServicio").style.display = "none";
	document.getElementById("pestañaPortafolio").style.display = "none";
	document.getElementById("pestañaBlog").style.display = "none";
	document.getElementById("pestañaContacto").style.display = "none";
	document.getElementById("pestañaContratameYa").style.display = "none";
}
function acerca(){
	document.getElementById("pestañaInicio").style.display = "none";
	document.getElementById("pestañaAcerca").style.display = "block";
	document.getElementById("pestañaServicio").style.display = "none";
	document.getElementById("pestañaPortafolio").style.display = "none";
	document.getElementById("pestañaBlog").style.display = "none";
	document.getElementById("pestañaContacto").style.display = "none";
	document.getElementById("pestañaContratameYa").style.display = "none";
}
function servicio(){
	document.getElementById("pestañaInicio").style.display = "none";
	document.getElementById("pestañaAcerca").style.display = "none";
	document.getElementById("pestañaServicio").style.display = "block";
	document.getElementById("pestañaPortafolio").style.display = "none";
	document.getElementById("pestañaBlog").style.display = "none";
	document.getElementById("pestañaContacto").style.display = "none";
	document.getElementById("pestañaContratameYa").style.display = "none";
}
function portfalio(){
	document.getElementById("pestañaInicio").style.display = "none";
	document.getElementById("pestañaAcerca").style.display = "none";
	document.getElementById("pestañaServicio").style.display = "none";
	document.getElementById("pestañaPortafolio").style.display = "block";
	document.getElementById("pestañaBlog").style.display = "none";
	document.getElementById("pestañaContacto").style.display = "none";
	document.getElementById("pestañaContratameYa").style.display = "none";
}
function blog(){
	document.getElementById("pestañaInicio").style.display = "none";
	document.getElementById("pestañaAcerca").style.display = "none";
	document.getElementById("pestañaServicio").style.display = "none";
	document.getElementById("pestañaPortafolio").style.display = "none";
	document.getElementById("pestañaBlog").style.display = "block";
	document.getElementById("pestañaContacto").style.display = "none";
	document.getElementById("pestañaContratameYa").style.display = "none";
}
function contacto(){
	document.getElementById("pestañaInicio").style.display = "none";
	document.getElementById("pestañaAcerca").style.display = "none";
	document.getElementById("pestañaServicio").style.display = "none";
	document.getElementById("pestañaPortafolio").style.display = "none";
	document.getElementById("pestañaBlog").style.display = "none";
	document.getElementById("pestañaContacto").style.display = "block";
	document.getElementById("pestañaContratameYa").style.display = "none";
}
function contratame(){
	document.getElementById("pestañaInicio").style.display = "none";
	document.getElementById("pestañaAcerca").style.display = "none";
	document.getElementById("pestañaServicio").style.display = "none";
	document.getElementById("pestañaPortafolio").style.display = "none";
	document.getElementById("pestañaBlog").style.display = "none";
	document.getElementById("pestañaContacto").style.display = "none";
	document.getElementById("pestañaContratameYa").style.display = "block";
}




function buscar(){ //abro una nueva pestaña con el buscador de google sobre la palabra que ingrese
	let palabras = document.getElementById("idTextoSearch").value;
	let busqueda = "https://www.google.com/search?q="+palabras;
	window.open(busqueda);
}
function registarMarca(){ //registra la marca con su debido comentario
	let marca = document.getElementById("idMarca").value;
	let repetido=false;
	for(let elem of (sistema.listaMarcas)){
		if(elem.marca.toLowerCase()==marca.toLowerCase()){;
			repetido=true;
		}
	}
	if(document.getElementById("idformMarcas").reportValidity() && repetido==false){//verifico si cumple las condiciones puestas en el html y si se repite la marca o no, si estas dos se cumplen se ingresa al if
		let marca = document.getElementById("idMarca").value;
		let comentario = document.getElementById("idComentario").value;
		let nuevaMarca = new Marca(marca,comentario);
		sistema.agregarMarcaYComentario(nuevaMarca);
		limpiar();
	}
	else{
		alert("No ingreso datos en todos los campos requeridos o la marca que ingreso ya fue ingresada anteriormente");
		document.getElementById("idformMarcas").reset();
	}
}