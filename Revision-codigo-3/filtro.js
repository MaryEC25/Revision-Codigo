// Tenemos un li de productos

const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
]


const listaProductos = document.getElementById("lista-de-productos") //cambio de nombre a variable const, se modifica "getElementById"
const inputFiltro = document.querySelector("input"); //Se modifica el nombre de la variable.

function displayProductos(productosArray) { //se incorpora displayProductos como una función
    for (let i = 0; i < productosArray.length; i++) {
    const producto = document.createElement("div") //cambio en las variables var por const y un nombre más descriptivo
    producto.classList.add("producto")

    const titulo = document.createElement("p")
    titulo.classList.add("titulo")
    titulo.textContent = productosArray[i].nombre

    const imagen = document.createElement("img");
    imagen.setAttribute('src', productosArray[i].img);

    producto.appendChild(titulo)
    producto.appendChild(imagen)

    listaProductos.appendChild(producto) //actualización de nombre de la variable.
  }
}
displayProductos(productos); //Se llama a la funcion para mostrar los productos.


const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function () {
  while (listaProductos.firstChild) { //actualización de nombre de la variable. 
    listaProductos.removeChild(listaProductos.firstChild);
  }
  const texto = inputFiltro.value;
  console.log(texto);

  const productosFiltrados = filtrado(productos, texto);
  displayProductos(productosFiltrados); //Se utiliza fa función displayProductos para no repetir el bloque de código.
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}


