/*
cree una funcion llamada gastoConIva() que acepte un numero y devuelva ese numero más el 21% que es el valor del IVA.
Luego crea una funcion map() que tome dos parametros:
un array de valores como enteros.
una funcion callback: esta funcion se aplica a cada elemento del array (dentro de la funcion map).
haga que su funcion map() devuelva un nuevo array lleno de numeros que son el resultado de usar la funcion callback en cada elemento del array de parametro.
*/
function gastoConIva(numero) {
    return numero * 1.21;
}
console.log(gastoConIva(700))


function map(array, callback) {
    let nuevoArray= [];
    array.forEach(e => {
        nuevoArray.push(callback(e))
    });
    return nuevoArray;
}

let array = [1, 2, 3, 4, 5];
let resultado = map(array, gastoConIva);
console.log(resultado);

//otra forma
let arrayExtra = array.map(e=>e*1.21);
console.log(arrayExtra)