//Storage API

//session storage
//Son temporales, se borran cuando se cierra el navegador
//set session storage item
sessionStorage.setItem('name', 'John');

//local storage
//Son permanentes, se guardan en el navegador
//set local storage item
localStorage.setItem('name', 'John');

//getItem
const valor = localStorage.getItem('name');
console.log(valor);

//removeItem
localStorage.removeItem('name');

//clear
localStorage.clear();
