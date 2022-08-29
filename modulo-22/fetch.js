// //Fetch API
// //es la evolucion de AJAX y con la implementacion de promesas

// //con esto guardamos el contenido de una url o archivo en una variable, con el metodo GET por default
// let texto = fetch('info.txt');

// //en este caso valor esta en forma del objeto Response, el cual contiene metodos para darle formato, en este primer then le estamos dando el formato de texto
// texto.then(valor=>{
//     return valor.text();
//     })
// //en este segundo then ya tenemos el valor de la respuesta y solo lo retornamos
//     .then(valor=>{
//     console.log(valor);
//     })


let url =`https://jsonplaceholder.typicode.com`;

let primer_pedido = fetch(`${url}/users`)
primer_pedido
    .then(valor=>valor.json())
    .then(valor=>{
        let usuario_id = valor[4].id;
        return fetch(`${url}/posts?userId=${usuario_id}`)
    })
    .then(valor=>valor.json())
    .then(valor=>{
        console.log(valor)
    })
    .catch(err=>{
        console.log(err)
    });