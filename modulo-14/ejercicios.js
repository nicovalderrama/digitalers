const azul = document.getElementById("azul");
const rojo = document.getElementById("rojo");
const verde = document.getElementById("verde");
const rosa = document.getElementById("rosa");
const caja = document.getElementById("caja");

azul.onclick = function () {
  document.getElementById("caja").style.backgroundColor = "blue";
  caja.innerHTML = "El color es azul";
  caja.style.color = "white";
};
rojo.onclick = function () {
  document.getElementById("caja").style.backgroundColor = "red";
  caja.innerHTML = "El color es rojo";
  caja.style.color = "white";
};
verde.onclick = function () {
  document.getElementById("caja").style.backgroundColor = "green";
  caja.innerHTML = "El color es verde";
  caja.style.color = "white";
};
rosa.onclick = function () {
  document.getElementById("caja").style.backgroundColor = "pink";
  caja.innerHTML = "El color es rosa";
  caja.style.color = "white";
};
