const path = require('path');
// //nos devuelve la ruta absoluta

const filePath = path.join('/public', '/styles' , '/main.css');

console.log(filePath);
//nos devuelve la extension del archivo

console.log(path.basename(filePath));
//nos devuelve el nombre del archivo

console.log(path.dirname(filePath));
//nos devuelve la ruta sin el nombre del archivo

console.log(path.parse(filePath));
//nos devuelve un objeto con las claves y valores de la ruta

console.log(path.resolve(filePath));
//nos devuelve la ruta absoluta


