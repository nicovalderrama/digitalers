const http = require('http')
const server = http.createServer((req,res)=>{

    if (req.url === '/') {
        res.write('Bienvenido a la home...')
        return res.end();
    }

    if (req.url === '/fyh') {
        const hora = new Date();
        res.write(`La hora es ${hora}`)
        return res.end();
    }

    res.write(`
    <h1>Not found error 404</h1>
    <a href="/">Ir a home</a>
    `);
    res.end
})

server.listen(8080);
console.log('escuchando en el puerto 8080');