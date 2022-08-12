/**
 * Desafio de Expresiones Regulares
 * Alumno: Nicolás Valderrama
 * Código: 802924
 * 
 * tenemos un cliente que nos esta pidiendo que el sistema que estamos desarrollando tenga una contraseña segura pero con las siguientes caracteristicas:
 * 1) Que tenga una longitud de 12 caracteres como minimo
 * 2) Debe contener al menos una letra mayuscula
 * 3) Debe contener al menos una letra minuscula
 * 4) No puede contener espacios
 */


let form = document.querySelector('form');
let input = document.querySelector('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valor = input.value;
    let contraseña = /^[a-z+A-Z+0-9*]{12,30}$/
    if (contraseña.test(valor)) {
        console.log('valido');
    }else{
        console.log('invalido');
    }
});

