let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/users/diego3g');
xhr.send(null);
/**
 *  instancia de XMLHttpRequest
 *  0 - objeto instanciado
 *  1 - objeto configurado
 *  2 - headers fueron enviados
 *  3 - descargando datos
 *  4 - Finalizado / no necesariamente exitoso
 */
