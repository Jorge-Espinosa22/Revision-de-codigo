let formulario = document.querySelector(".formulario")//Poner la clase correcta

/* Cambie todas las variables para que fueran declaradas con let en lugar de var y les cambie a un nombre mas intuitivo */

formulario.onsubmit = function (validacion) {

  validacion.preventDefault();
  
  //let valorNombre = formulario.elements[0]
  //let valorEdad = formulario.elements[1]    //Elimine estos para ahorrarnos codigo y mandando el directo el valor a la variable que vamos a ocupar.
  let valorNacionalidad = formulario.elements[2]

 let nombre = formulario.elements[0].value
 let edad = formulario.elements[1].value

  let i = formulario.elements[2].selectedIndex
  let nacionalidad = valorNacionalidad.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    nombre.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    edad.classList.add("error")
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado (nombre, edad, nacionalidad)
    }
  }
  
let botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
let corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);



function agregarInvitado (nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

  
  let lista = document.getElementById("lista-de-invitados")//Agregue esta id en el Html

let elementoLista = document.createElement("div")
elementoLista.classList.add("elemento-lista")//Era add en lugar de added
lista.appendChild(elementoLista)

/*
 let spanNombre = document.createElement("span")
 let inputNombre = document.createElement("input")
 let espacio = document.createElement("br")
 spanNombre.textContent = "Nombre: "
 inputNombre.value = nombre 
 elementoLista.appendChild(spanNombre)
 elementoLista.appendChild(inputNombre)
 elementoLista.appendChild(espacio)
 */
 /* Borre lineas de codigo que estaban repetidas  */

function crearElemento (descripcion, valor) {
let spanNombre = document.createElement("span")
let inputNombre = document.createElement("input")
let espacio = document.createElement("br")
spanNombre.textContent = `${descripcion} : `
inputNombre.value = valor 

elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}


crearElemento("Nombre", nombre)
crearElemento("Edad", edad )
crearElemento("Nacionalidad", nacionalidad )

/*Otra linea borrada de codigo repetido
let botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
let corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);
*/

botonBorrar.onclick = function() {
  //this.parentNode.style.display = 'none'; No se que hacia esto pero desaparecia toda la pagina
  //botonBorrar.parentNode.remove(elementoLista);
  elementoLista.remove();//Agregue esto porque no funcionaba el otro comando y no encontre como solucionarlo jajaa
  
}


}




