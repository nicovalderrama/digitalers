const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/users')
const morgan = require('morgan')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000

//middeware
app.use(morgan('tiny'))
app.use(express.json())

//obtener todos los usuarios
app.get('/',(req,res)=>{
    User
        .find()
        .then((data)=>res.json(data))
        .catch((err)=>res.json({
            message : err
        }))
});

//creamos un usuario
app.post('/',(req,res)=>{
    const user = User(req.body)
    user
        .save()
        .then((data)=>res.json(data))
        .catch((err)=>res.json(err))
})

//actualizamos un usuario por ID
app.put('/:id',(req,res)=>{
    const {id} = req.params
    const {name,userName}= req.body
    User
        .updateOne({_id : id},{$set:{name,userName}})
        .then((data)=>res.json(data))
        .catch((err)=>res.json(err))
})

//eliminamos usuario por ID
app.delete('/:id',(req,res)=>{
    const {id} = req.params
    User
        .deleteOne({_id : id})
        .then((data)=>res.json(data))
        .catch((err)=>res.json(err))
})

//mongoose connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>console.log('conectado con mongoDB atlas'))
    .catch((err)=>console.log(err))

app.listen(port,()=>{
    console.log('servidor corriendo en el puerto 3000');
})