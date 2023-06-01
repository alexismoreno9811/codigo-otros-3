/* Tenemos un li de productos en el hatml que por medio de la función displayProductos se colocan los productos en pantalla
  y con la funcion filtrado que se llama mediante el boton se filtran dichos productos con el texto colocado en el input.
*/

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const li = document.getElementById("lista-de-productos") /* Se obtiene el elemento por id no por nombre */

const inputHtml = document.querySelector(".input1");/* Cambiar el nombre de la variable a uno más especifico y colocar la clase correspodiente  */

const displayProductos = (productos) => { /* Se creo la función desplayProductos para imprimir en el DOM los productos. */
  for (let i = 0; i < productos.length; i++) {
    let d = document.createElement("div")
    d.classList.add("producto")

    let ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productos[i].nombre
  
    let imagen = document.createElement("img");
    imagen.setAttribute("src", productos[i].img);

    d.appendChild(ti)
    d.appendChild(imagen)

    li.appendChild(d)
  }
}

displayProductos(productos)
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = inputHtml.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute("src", productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
}

const filtrado = (productos, texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  