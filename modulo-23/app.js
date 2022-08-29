//Pilares de la programacion orientada a objetos
//1. Encapsulamiento: agrupar datos y funciones que trabajan con esos datos
//2. Abstraccion: ocultar detalles de implementacion y mostrar solo la funcionalidad al usuario
//3. Herencia: crear nuevas clases basadas en clases existentes
//4. Polimorfismo: la habilidad de tomar varias formas

//Clase
class Persona {
    //Atributos
    nombre;
    apellido;
    edad;
    //Metodos
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
    }
}

//Instanciar una clase
const persona1 = new Persona('Juan', 'Perez', 28);
const persona2 = new Persona('Carlos', 'Lara', 30);
const persona3 = new Persona('Maria', 'Gomez', 24);

persona1.saludar();
persona2.saludar();
persona3.saludar();

//Herencia
class Alumno extends Persona {
    //Atributos
    curso;
    //Metodos
    constructor(nombre, apellido, edad, curso) {
        super(nombre, apellido, edad);
        this.curso = curso;
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años y estudio ${this.curso}`);
    }
}

const alumno1 = new Alumno('Juan', 'Perez', 28, 'JavaScript');

alumno1.saludar();

//Polimorfismo
class Profesor extends Persona {
    //Atributos
    materia;
    //Metodos
    constructor(nombre, apellido, edad, materia) {
        super(nombre, apellido, edad);
        this.materia = materia;
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años y doy clases de ${this.materia}`);
    }
}

const profesor1 = new Profesor('Carlos', 'Lara', 30, 'JavaScript');

profesor1.saludar();




class Usuario{
    //declaramos una propiedad privada
    #contraseña

    //creamos el metodo constructor de la clase
    constructor(nombre,id,username,contraseña){
        this.id = id;
        this.nombre = nombre;
        this.username=username;
        this.#contraseña = contraseña;
    }

    //metodo login para validar los datos del usuario
    login(username,contraseña){
        if (username===this.username && contraseña === this.contraseña) {
            console.log('Ingreso exitoso');
        }else{
            console.log('Datos incorrectos');
        }
    }

    //metodo para cambiar la contraseña
    setPassword(newContraseña){
        this.#contraseña= newContraseña;
    }
}

const user1 = new Usuario('nicolas',01,'nicolasv','valderraman82')
user1.login('nicolasv','valderraman82')
console.log(user1);
const user2= new Usuario('mariano',02,'marianov','asdad');
console.log(user2);
