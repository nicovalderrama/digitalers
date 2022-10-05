const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const Article = require('../models/article');
const methodOverride = require('method-override');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));


//ruta principal
app.get('/', async(req, res) => {
    const articles = await Article.find().sort({createdAt: 'desc'});
    res.render('articles/index', {articles: articles});
});

//conexion a la base de datos
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado a la base de datos'))
    .catch((err) => console.log(err));

//puerto
const PORT = process.env.PORT || 3000;

//escuchando el puerto
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
