//arreglos
let arreglo = [1, 2, 3, 4, 5];
document.getElementById("caja").innerHTML = arreglo;

nuevoarreglo = arreglo.map((element) => element * 2); //Permite recorrer el array y modificar los elementos presentes en él, retornando un nuevo array con la misma longitud que el original.
console.log(nuevoarreglo);
/*filter() : Recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condición.

forEach() : Permite iterar el contenido de un array. Recibe un callback que toma como parámetro el elemento actual de la iteración y el indice del mismo.

find() : Recorre el array y retorna la primera coincidencia del elemento que se busca.

sort() : Ordena los elementos del array y retorna el arreglo ordenado. Los elementos se ordenarán en orden ascendente (de la A a la Z) por defecto.

some() : Itera el array y retorna un booleano si como mínimo uno de los elementos presentes en el array pasa una condición determinada. Recibe un callback que se encargara de preguntar aquello que queremos dentro del array.

every() : Es similar al some(), ya que itera el array y retorna un booleano. Pero esta vez, para que dicho booleano sea true todos los elementos del array deberán pasar la condición dada.

concat() : Se utiliza para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.

includes() : Determina si un array incluye un determinado elemento y retorna un booleano según corresponda.
join() : Une todos los elementos de un array en una cadena. Podemos pasarle como parámetro el carácter de separación que debe agregar entre los elementos.

reduce() : Aplica una función a un acumulador y a cada valor de una array (de izquierda a derecha) para reducirlo a un único valor.

indexOf() : Retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.

findIndex() : Retorna el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.

fill() : Cambia todos los elementos de un array por un valor estático, desde el índice de inicio hasta el índice final. Retorna el array modificado.

push() : Añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

pop() : Elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.

shift() : Elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.

unshift() : Agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.

slice() : Devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.

reverse() : Invierte el orden de los elementos de un array. El primer elemento pasa a ser el último y el último pasa a ser el primero.

splice() : Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
lastIndexOf() : Busca un elemento en un array y devuelve su posición. Comienza buscando por el final del array. Retorna -1 si el elemento no se encontrara.

flat() : Crea una nuevo array con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.

isArray() : Determina si el valor pasado es un Array.

from() : Crea una nueva instancia de Array a partir de un objeto iterable.
*/
