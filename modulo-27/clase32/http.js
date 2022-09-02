const http = require('http');

//creando un servidor
const server = http.createServer((request,response)=>{
    console.log(request.url);

    if (request.url === '/') {
        response.write('Bienvenido a la home...')
        return response.end();
    }

    if (request.url === '/contacto') {
        response.write('Nuestros canales de contacto son:')
        return response.end();
    }



    response.write(`
    <h1>Not found error 404</h1>
    <a href="/">Ir a home</a>
    `);
    response.end();
})

server.listen(3000);

console.log(`Servidor escuchando en puerto 3000`);