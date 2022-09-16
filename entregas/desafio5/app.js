const express = require('express')
const app = express()
const port = 8080

const frase = 'Hola mundo como estan'

app.get('/', (req, res) => {
    res.send('Home de la aplicación')
})

app.get('/api/getFrase', (req, res) => {
    res.send(frase)
})

app.get('/api/getLetra/:num',(req,res)=>{
    const num = parseInt(req.params.num);
    const fraseSinEspacios = frase.replace(/ /g,"");
    
    const regex = /^[0-9]*$/

    if ( num<1 || num>fraseSinEspacios.length) {
        res.json({ERROR: 'El parametro esta fuera de rango'})
    }

    if (regex.test(req.params.num)==false) {
        res.json({ERROR: 'El parametro tiene que ser un numero'})
    }

    res.send(`La letra en el indice ${num} es: ${fraseSinEspacios[num-1]}`)
})

app.get('/api/getPalabra',(req,res)=>{
    const num = parseInt(req.params.num);
    const fraseSeparada= frase.split(" ");

    const regex = /^[0-9]*$/
    
    if ( num<1 || num>fraseSeparada.length) {
        res.json({ERROR: 'El parametro esta fuera de rango'})
    }

    if (regex.test(req.params.num)==false) {
        res.json({ERROR: 'El parametro tiene que ser un numero'})
    }

    res.send(`La letra en el indice ${num} es: ${fraseSeparada[num-1]}`)
})

app.listen(port, (error) => {
    if (error) {
        console.log('Error en el servidor', error)
    }
    console.log(`Servidor corriendo en el puerto ${port}`)
})