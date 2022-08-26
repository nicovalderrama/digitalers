// //Patron singleton

// class Oficina{
//     constructor(nombre,empleados){
//         this.nombre = nombre;
//         this.empleados = empleados;
// //si la instancia esta creada retorno el objeto
//         if(typeof Oficina.instance === 'object') {
//             return Oficina.instance;
//         }
//         //asigno this a la instancia
//         Oficina.instance = this;
//         //lo retornamos
//         return this;
//     }    
// }

// //unica instancia del objeto Oficina
// const oficina01 = new Oficina('Principal','30')
// console.log(oficina01);


// Patron observador
class Publicador{
    constructor(){
        //crea un array vacio para llenarlo con los subs
        this.suscriptores = [];
    }

    suscribirse(suscriptor){
        this.suscriptores.push(suscriptor);
    }

    desuscribirse(suscriptor){
        this.suscriptores = this.suscriptores.filter(
            (item)=> item !== suscriptor
        );
    }

    notifica(evento){
        this.suscriptores.forEach(item =>{
            item.buzon.call(item,evento);
        })
    }
}

class Suscriptor{
    constructor(id,nombre){
        this.id=id;
        this.nombre=nombre;
        console.log(`Se ha creado el suscriptor Nro ${this.id} con el nombre ${this.nombre}`);
    }

    buzon(edicion){
        console.log(`Suscriptor Nro ${this.id} recibio una nueva edicion: ${edicion}`);
    }

}
const periodico = new Publicador();
console.log(periodico);
const antonia = new Suscriptor('01','Antonia');
const isabel = new Suscriptor('02','Isabel');
const maria = new Suscriptor('03','Maria')


periodico.suscribirse(antonia);
periodico.suscribirse(isabel);

periodico.notifica('Nueva edicion');

