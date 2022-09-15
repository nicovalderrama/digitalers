class Operaciones{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }

    sumar(){
        return this.a+ this.b;
    }

    resta(){
        return this.a- this.b;
    }

    multiplicacion(){
        return this.a * this.b;
    }

    division(){
        return this.a/ this.b;
    }
}

module.exports= Operaciones;
