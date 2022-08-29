class Vehiculo{
    nombre;
    velocidad;
    constructor(nombre, velocidad){
        this.nombre = nombre;
        this.velocidad = velocidad;
    }

    acelerar(){
        this.velocidad += 10;
    }

    frenar(){
        this.velocidad -= 10;
    }

    getAceleramos(){
        return this.velocidad/1.6;
    }
}

class Camion extends Vehiculo{
    #combustible;
    constructor(nombre, velocidad, combustible){
        super(nombre, velocidad);
        this.#combustible = combustible;
    }

    acelerar(){
        this.velocidad += 5;
        this.combustible -= 2;
    }

    cargarCombustible(litros){
        this.combustible += litros;
    }
}

const camion01 = new Camion("001", 60, 70);
camion01.acelerar().acelerar().frenar().cargarCombustible(50);

// console.log(camion01.getAceleramos()); --> Cuando no tiene palabra adelante de get en la linea 17
console.log(camion01.getAceleramos);