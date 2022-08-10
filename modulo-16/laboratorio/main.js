//crear nodos
let nodoPadre = document.createElement("div");
let nodoHijo = document.createElement("p");
let nodoExtra = document.createElement("p");

//dar el valor de lo que va a llevar dentro el nodo hijo
let texto = document.createTextNode("hola como estas");
nodoExtra.innerHTML = "Nicolás";
//agregar nodos hijos a sus nodos padre

nodoPadre.appendChild(nodoHijo);
nodoHijo.appendChild(texto);
nodoPadre.insertBefore(nodoExtra, nodoHijo);

//mostrar el nodo creado en la pagina
document.body.appendChild(nodoPadre);

//eliminar nodos
nodoPadre.removeChild(nodoExtra);

//reemplazar nodos
let nuevoNodo = document.createElement("p");
let textoNuevo = document.createTextNode("Ejemplos de nodos");
nuevoNodo.appendChild(textoNuevo);
nodoPadre.replaceChild(nuevoNodo, nodoHijo);

/*Crear una lista desordenada con 10 elementos dentro usando un bucle for. Tener en cuenta que
solo se le puede hacer un único appendChild al ul creado, asi minimizamos el tiempo de
modificaciones en el DOM.*/
const lista = document.createElement("ul");
for (let i = 0; i < 10; i++) {
  const listaItem = document.createElement("li");
  listaItem.innerHTML = `Elemento ${i + 1}`;
  lista.appendChild(listaItem);
}
document.body.appendChild(lista);
