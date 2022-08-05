edad = prompt("Ingrese su edad");
if (edad >= 18) {
  alert("Es mayor de edad");
} else {
  alert("Menor de edad no puede ingresar");
}
var usuario = prompt("Ingrese el nombre de usuario");
var contraseña = prompt("Ingrese su contraseña");
if (usuario == "admin" && contraseña == "1234") {
  alert("Bienvenido " + usuario);
} else {
  alert("credenciales incorrectas");
}
