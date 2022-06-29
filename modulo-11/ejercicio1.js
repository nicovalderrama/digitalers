let costosFijos=2500;
let costosVariables=400;
let precio=600;

costosFijos=parseInt(prompt("Ingrese el valor de los costos fijos"));

costosVariables=parseInt(prompt("Ingrese el valor de los costos variables"));

precio=parseInt(prompt("Ingrese el valor del precio"));

let cv= costosFijos/(precio-costosVariables);

console.log("El punto de equilibrio: "+cv);


