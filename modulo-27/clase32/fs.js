const fs = require('fs');

//SINCRONA

//Leer archivos
const primero = fs.readFileSync('./data/primer.txt', 'utf-8')

console.log(primero)

//crear un archivo

fs.writeFileSync('./data/segundo.txt', 'Segundo documento de texto creado por writeFileSync')

//modificar un archivo
const titulo= 'Modifica documento de texto creado'

fs.writeFileSync('./data/segundo.txt',titulo,{
    flag: 'a'
})

//-ASINCRONO

fs.readFile('./data/primer.txt',(error,data)=>{
    console.log(error);

    if(error){
        console.log(error);
    }

    console.log(data.toString());
})
