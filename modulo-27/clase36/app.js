const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 3000
const articleRouter = require('./router/index')
const path = require('path')
require('ejs');


/* 
app.use((req, res, next)=>{
    console.log("Una nueva solicitud recibida en " + Date.now());
    next();
})
*/

/*
 Settings
*/

app.set('case sensitive routing', false)

// Configurar las vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))




app.use(morgan('dev'))
app.use(articleRouter)
app.use('/public', express.static(path.join(__dirname, './public')))


app.get('/', (req, res) => {
  res.send('Home page')
})

app.get('/about', (req, res) => {
    res.send('About')
})

// Función Middleware Auth
/* 
app.use((req, res, next)=>{
  if(req.query.login === 'ana@gmail.com'){
    next()
  }else{
    res.send('Usuario no autorizado')
  }
})
*/
// Ruta sólo accede Auth
app.get('/dashboard', (req, res)=>{
  res.send('Bienvenida al Dashboard')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})