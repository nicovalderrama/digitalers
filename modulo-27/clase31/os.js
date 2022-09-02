const os = require('os');
console.log(os);
//nos devuelve la arquitectura del sistema operativo

console.log(os.platform());
//nos devuelve el nombre del sistema operativo

console.log(os.release());
//nos devuelve la version del sistema operativo

console.table({
    os: os.platform(),
    version: os.release(),
    memoria: os.totalmem(),
    freeMemoria: os.freemem(),
    cpu: os.cpus()
})