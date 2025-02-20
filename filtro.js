// Tenemos un li de productos

// Queremos que al hacer click en un botón de filtro, se muestren solo los productos que cumplan con el filtro
// El filtro es un input de texto, y se filtra por tipo o color
//Se cambiaron todas las declaraciones de variables a let para que no se puedan reasignar
//Se cambio el nombre de la variable li a lista para que sea mas descriptivo
//Se cambio el nombre de la variable $i a input para que sea mas descriptivo



const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

//Cambio de nombre a uno mas descriptivo
const lista = document.getElementById("lista-de-productos") //Se cambio de elementsbyname a elementbyid 
const input = document.querySelector('input');//Se quito el punto porque no es una clase la que estamos buscando
const botonDeFiltro = document.querySelector("button");


//Se hizo una funcion para poder simplificar y no repetir el codigo, mandando como parametro que lista se iba a crear, ya sea la ya filtrada o
const listaDeProductos = (listaAMostrar) => {

  for (let i = 0; i < listaAMostrar.length; i++) {


    let crearDiv = document.createElement("div")
     crearDiv.classList.add("producto")
    
    
     let tituloProducto = document.createElement("p")
     tituloProducto.classList.add("titulo")
     tituloProducto.textContent = listaAMostrar[i].nombre
     
    let imagen = document.createElement("img");
     imagen.setAttribute('src', listaAMostrar[i].img);
   
     crearDiv.appendChild(tituloProducto)  
     crearDiv.appendChild(imagen)
   
     lista.appendChild(crearDiv)

}
}

listaDeProductos(productos);

botonDeFiltro.onclick = function() {
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  const texto = input.value
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  listaDeProductos(productosFiltrados);//Se mando a llamar la funcion para que se repitiera el codigo para no repetirlo.
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  





/* Se elimino esta parte del codigo ya que se simplifico arriba y se hizo una funcion para que se repitiera el codigo */


/*
for (let i = 0; i < productos.length; i++) {


 let crearDiv = document.createElement("div")
  crearDiv.classList.add("producto")
 
 
  let tituloProducto = document.createElement("p")
  tituloProducto.classList.add("titulo")
  tituloProducto.textContent = productos[i].nombre
  
 let imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  crearDiv.appendChild(tituloProducto)  
  crearDiv.appendChild(imagen)

  lista.appendChild(crearDiv)
}; 




displayProductos = (productos)


//const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  const texto = input.value
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  listaDeProductos(productosFiltrados);
/*
  for (let i = 0; i < productosFiltrados.length; i++) {
    let crearDiv = document.createElement("div")
    crearDiv.classList.add("producto")
  
    let nombreProducto = document.createElement("p")
    nombreProducto.classList.add("titulo")
    nombreProducto.textContent = productosFiltrados[i].nombre
    
    let imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    crearDiv.appendChild(nombreProducto)
    crearDiv.appendChild(imagen)
  
    lista.appendChild(crearDiv)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  */