const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const {infoCars} = require('./db');

/**
 * // routing paths
app.get('/', (req, res) => {
    res.send('Hola Mundo');
    }
);

app.get("/about", (req, res) => {
    res.send("About page");
});

app.get("/contact", (req, res) => {
    res.send("Contact page");
});
 */

app.get('/', (req, res) => {
    res.send(JSON.stringify(infoCars));
    }
);

app.get('/nacionales', (req, res) => {
    res.send(JSON.stringify(infoCars.nationals));
    }
);

app.get('/importados', (req, res) => {
    res.send(JSON.stringify(infoCars.imported));
    }
);

//parametros en la ruta

app.get('/nacionales/:car', (req, res) => {
    const car = req.params.car;
    const carFound = infoCars.nationals.find((carInfo) => carInfo.car === car);
    if(carFound){
        res.send(JSON.stringify(carFound));
    }else{
        res.send('No se encontro el auto');
    }
});

app.get('/importados/:car', (req, res) => {
    const car = req.params.car;

    const carFound = infoCars.imported.find((carInfo) => carInfo.car === car);
    if(carFound){
        res.send(JSON.stringify(carFound));
    }else{
        res.send('No se encontro el auto');
    }

    //agregar query params
    if(req.query.ordenar === 'year'){
        return res.send(JSON.stringify.sort((a,b) => a.year - b.year));
    }
});

app.get('/nacionales/:id', (req, res) => {
    const id = req.params.id;
    const car = infoCars.nationals.find(car => car.id == id);
    if(car){
        res.send(JSON.stringify(car));
    }else{
        res.send(`No se encontro el auto con id ${id}`);
    }
});


app.get('/importados/:id', (req, res) => {
    const id = req.params.id;
    const car = infoCars.imported.find(car => car.id == id);
    res.send(JSON.stringify(car));
    }
);

app.get('/:id',(req, res) => {
    const id = req.params.id;
    const car = infoCars.nationals.find(car => car.id == id);
    if(car){
        res.send(JSON.stringify(car));
    }else{
        const car = infoCars.imported.find(car => car.id == id);
        res.send(JSON.stringify(car));
    }
});

app.listen(port, () => {
    console.log(`Puerto ${port} escuchando`);
    }
);