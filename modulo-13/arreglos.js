//arreglos
let arreglo = [1, 2, 3, 4, 5];
document.getElementById("caja").innerHTML = arreglo;

arreglo.forEach((elemento) => {
    console.log(elemento*2);
});

nuevoarreglo = arreglo.map((element) => element * 2); //Permite recorrer el array y modificar los elementos presentes en él, retornando un nuevo array con la misma longitud que el original.
console.log(nuevoarreglo);

const filter= arreglo.filter((element) => element > 3); //Permite filtrar los elementos de un array, retornando un nuevo array con los elementos que cumplan con la condición.
console.log(filter);

const find = arreglo.find((element) => element > 3); //Permite buscar un elemento en un array, retornando el primer elemento que cumpla con la condición.
console.log(find);

const every = arreglo.every((element) => element > 3); //Permite verificar si todos los elementos de un array cumplen con una condición, retornando un booleano.

const some = arreglo.some((element) => element > 3); //Permite verificar si al menos un elemento de un array cumple con una condición, retornando un booleano.

const reduce = arreglo.reduce((acumulador, elemento) => acumulador + elemento); //Permite reducir un array a un único valor, retornando dicho valor.

const reduceRight = arreglo.reduceRight((acumulador, elemento) => acumulador + elemento); //Permite reducir un array a un único valor, retornando dicho valor, pero recorriendo el array de derecha a izquierda.

const includes = arreglo.includes(3); //Permite verificar si un elemento se encuentra en un array, retornando un booleano.

const indexOf = arreglo.indexOf(3); //Permite buscar un elemento en un array, retornando el índice del primer elemento que cumpla con la condición.

const lastIndexOf = arreglo.lastIndexOf(3); //Permite buscar un elemento en un array, retornando el índice del último elemento que cumpla con la condición.

const join = arreglo.join(" - "); //Permite unir todos los elementos de un array en un string, retornando dicho string.

const toString = arreglo.toString(); //Permite convertir un array en un string, retornando dicho string.

const sort = arreglo.sort(); //Permite ordenar los elementos de un array, retornando el array ordenado.

const reverse = arreglo.reverse(); //Permite invertir el orden de los elementos de un array, retornando el array invertido.

const push = arreglo.push(6); //Permite agregar un elemento al final de un array, retornando la nueva longitud del array.

const pop = arreglo.pop(); //Permite eliminar el último elemento de un array, retornando dicho elemento.

const unshift = arreglo.unshift(0); //Permite agregar un elemento al inicio de un array, retornando la nueva longitud del array.

const shift = arreglo.shift(); //Permite eliminar el primer elemento de un array, retornando dicho elemento.

const splice = arreglo.splice(2, 0, 3.5); //Permite eliminar o reemplazar elementos de un array, retornando un array con los elementos eliminados.

const slice = arreglo.slice(2, 4); //Permite extraer elementos de un array, retornando un nuevo array con los elementos extraídos.

const concat = arreglo.concat([6, 7, 8]); //Permite unir dos o más arrays, retornando un nuevo array con la unión de los arrays.

const flat = arreglo.flat(); //Permite aplanar un array, retornando un nuevo array con los elementos aplanados.

const flatMap = arreglo.flatMap((element) => [element * 2]); //Permite recorrer un array y modificar los elementos presentes en él, retornando un nuevo array con la misma longitud que el original, pero aplanado.

const copyWithin = arreglo.copyWithin(0, 3); //Permite copiar elementos de un array a otro, retornando el array modificado.

const fill = arreglo.fill(0); //Permite reemplazar todos los elementos de un array con un elemento, retornando el array modificado.

const entries = arreglo.entries(); //Permite obtener un iterador de un array, retornando dicho iterador.

const keys = arreglo.keys(); //Permite obtener un iterador de las claves de un array, retornando dicho iterador.

const values = arreglo.values(); //Permite obtener un iterador de los valores de un array, retornando dicho iterador.

const from = Array.from("Hola"); //Permite crear un array a partir de un objeto iterable, retornando un nuevo array.

const of = Array.of(1, 2, 3, 4, 5); //Permite crear un array a partir de los argumentos pasados, retornando un nuevo array.

const isArray = Array.isArray(arreglo); //Permite verificar si un objeto es un array, retornando un booleano.



