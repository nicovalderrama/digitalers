let form=document.querySelector('form');
let nombre=document.querySelector('#nombre');
//Submit: click- teclado(keyup - keydown)
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let valor = nombre.value;
    let valorSinEspacios = valor.trim(); // borra los espacios en blanco antes y despues del valor
    let long = valorSinEspacios.length;
    console.log(long);
    console.log(valorSinEspacios.includes(' '));
    console.log(encodeURIComponent(valorSinEspacios)); // codifica el valor para que no contenga caracteres especiales y los transforma en otros que si podemos controlar
    
    //expresion regular para un nombre valido
    let expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/;
    if(expresion.test(valorSinEspacios) && long>=3){
        console.log('Nombre valido');
    }else{
        console.log('Nombre invalido');
    }
});








/**
 * 
 * let nombre= "EducacionIT";
console.log(nombre[0]);
console.log(nombre.length);
for (let i = 0; i < nombre.length; i++) {
    let letra = nombre[i];
    let codigo = letra.charCodeAt();
    console.log(codigo);
    console.log(letra);
}
 * 
 */

