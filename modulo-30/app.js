const Operaciones = require('./operaciones')

let a = 5;
let b = 21;

const operaciones = new Operaciones(a,b)
console.log(operaciones.sumar());
console.log(operaciones.resta());
console.log(operaciones.multiplicacion());
console.log(operaciones.division());