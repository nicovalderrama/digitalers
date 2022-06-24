let costosFijos=0;
let costosVariables=0;
let precio=0;
//ingresar el valor de los costos fijos
costosFijos=parseInt(prompt("Ingrese el valor de los costos fijos"));
//ingresar el valor de los costos variables
costosVariables=parseInt(prompt("Ingrese el valor de los costos variables"));
//ingresar el valor del precio
precio=parseInt(prompt("Ingrese el valor del precio"));
let cv= costosFijos/(precio-costosVariables);
alert("El punto de equilibrio es: "+cv);

