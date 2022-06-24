let ingresoTotal=0;
let gastosNecesarios=0;
let gastosVariables=0;
let ahorro=0;
ingresoTotal=parseInt(prompt("Ingrese el valor del ingreso total"));
//50% para los gastos necesarios
gastosNecesarios=ingresoTotal*0.5;
//30% para los gastos variables
gastosVariables=ingresoTotal*0.3;
//20% para el ahorro
ahorro=ingresoTotal*0.2;
alert("El modelo de presupuesto es: "+gastosNecesarios+" "+gastosVariables+" "+ahorro);