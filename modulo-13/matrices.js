var personas = [
  ["nicolas", "valderrama", 20],
  ["luciana", "maldonado", 40],
];
console.log(personas[1]);
for (let i = 0; i < personas.length; i++) {
  console.log(
    `hola mi nombre es ${personas[i][0]} ${personas[i][1]} Y tengo ${personas[i][2]} años`
  );
}

var texto = "hola como estas";
var letras = texto.split("");
var resultado = "";
for (let i = 0; i < letras.length; i++) {
  if (letras[i] == "e") {
    break;
  } else {
    resultado += letras[i];
  }
}
console.log(resultado);

var array = ["pera", "manzana", "durazno", "sandia"];
array.push("naranja");
array.unshift("uva");
array.push(prompt("ingrese una fruta para agregar a la lista"));
console.log(array);
