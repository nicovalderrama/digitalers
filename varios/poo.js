class usuario{
    #password;
    constructor(nombre,username, password){
        this.nombre=nombre;
        this.username=username;
        this.#password=password;
    }

    login(username,password){
        if(username==this.username && password==this.#password){
            console.log("Bienvenido "+this.nombre);
        }else{
            console.log("Usuario o contraseña incorrectos");
        }
    }

    cambiarPassword(password){
        this.#password=password;
    }

    get password(){
        return this.#password;
    }

}

let usuario1 = new usuario("Juan","juan123","1234");
usuario1.login("juan123","1234");
