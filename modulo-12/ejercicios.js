fecha = new Date(1999, 11, 31);
console.log(fecha);
const titulo = document.getElementById("titulo");
titulo.innerHTML = "Titulo cambiado";
dia = fecha.getDay();
switch (dia) {
  case 0: // Domingo
    console.log("Domingo");
    break;
  case 1: // Lunes
    console.log("Lunes");
    break;
  case 2: // Martes
    console.log("Martes");
    break;
  case 3: // Miercoles
    console.log("Miercoles");
    break;
  case 4: // Jueves
    console.log("Jueves");
    break;
  case 5: // Viernes
    console.log("Viernes");
    break;
  case 6: // Sabado
    console.log("Sabado");
    break;
  default: // Error
    console.log("Error");
    break;
}
