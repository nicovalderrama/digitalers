// //Asincronismo
// setTimeout(function(){
//     console.log("Hola Mundo con retraso!");
//     }, 1000)
    
// //que tenga 0ms de retraso no significa que se ejecute antes que el código que está antes de el tick de la pila de ejecución
// setTimeout(function(){
//     console.log("Esto debería aparecer primero");
//     }, 0);
// console.log("Sorpresa!");
    



 
/**
 *  instancia de XMLHttpRequest tiene un atributo readyState que nos indica el estado de la petición
 *  0 - no inicializado
 *  1 - objeto configurado
 *  2 - headers fueron enviados
 *  3 - descargando datos
 *  4 - Finalizado / no necesariamente exitoso
 */
let xhr = new XMLHttpRequest();
console.log(xhr); // readyState: 0
xhr.open("GET", 'https://jsonplaceholder.typicode.com/users');
xhr.send();
xhr.addEventListener("readystatechange",function(){
    console.log(xhr.readyState)

    //validamos si el header content-type es el que esperamos recibir sea correcto o sino abortar la peticion
    if (xhr.readyState===2) {
        let tipo= xhr.getResponseHeader('content-type')
        console.log(tipo)
        if (tipo!=="application/json; charset=utf-8") {
            xhr.abort();
        }
    }

    //Controlamos si el readyState es igual a 4 que muestre la response de la peticion, ya que con setTimeOut no estamos seguros cuando va a llegar la response
    
        if (xhr.readyState === 4){
            console.log(xhr.responseText);
        };
    
})

    //load se ejecuta cuando readyState es 4, no necesariamente tiene que ser exitoso por eso se valida con el status 200 que significa que fue exitoso, una vez verificado realiza una accion, en este caso muestra la respuesta
    xhr.addEventListener("load",function(){
        if (xhr.status == 200) {
        console.log(xhr.response);
        }
    })






