const express = require('express');
const app = express();
const port = 3000;

//db fake
let usuarios = [
    { id: 1, nombre: 'Pepe', edad: 23, userName: 'pepe90' },
    { id: 2, nombre: 'Juan', edad: 34, userName: 'juan123' },
    { id: 3, nombre: 'Rosa', edad: 45, userName: 'rosa77' },
    { id: 4, nombre: 'María', edad: 56, userName: 'mar45' },
    { id: 5, nombre: 'Luis', edad: 67, userName: 'luis423' },
];

//settings
//antes se usaba body-parser pero ahora ya viene incluido en express
app.use(express.json());

app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

app.post('/usuarios', (req, res) => {
  const { nombre, edad, userName } = req.body;
  const id = usuarios.length + 1;
  const nuevoUsuario = { id, nombre, edad, userName };
  usuarios.push(nuevoUsuario);
  res.json(nuevoUsuario);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
