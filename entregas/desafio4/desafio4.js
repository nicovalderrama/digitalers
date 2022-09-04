/*
 *  Metodos de consulta
 *  SORT: ordena los objetos segun la propiedad que indicamos
 *  /users?_sort=id&_order=desc
 *  ordena los objetos segun el id de forma descendente
 *  
 *  FILTER: Filtra los objetos segun la propiedad y valor que le demos
 *  /users?first_name=Nicolas&country=Argentina
 *  filtra los objetos segun si el nombre es Nicolas y el pais es Argentina
 *  
 *  PAGE: Limita la vista en paginas, por defecto muestra 10 objetos por cada pagina
 *  /users?_page=7&_limit=20
 *  va a mostrar la pagina 7 de usuarios pero mostrando 20 por cada pagina
 *  
 *  SLICE: Delimitamos el inicio de lo que queremos que muestre con _start y el limite con _end o _limit
 *  /users/_start=20&_end=30
 *  nos va a mostrar los usuarios desde el id 21 (no toma al 20) hasta el 30
 *  
 *  RANGOS: ponemos el rango segun una propiedad y el valor de gt(mayor que),gte(mayor o igual),lt(menor que),lte(menor o igual) 
 *  /users?id_gte=10&id_lte=20
 *  va a mostrar los usuarios del id 10 al 20
 *  
 */ 
