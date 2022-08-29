/*
4 Pilares de Poo=

1) Abstracción

2) Encapsulamiento

3) Herencia


class User {
    #password;
    constructor (email, password){
        this.email = email;
        this.#password = password
    }

    login(email, password){
        if(email === this.email && password === this.#password){
            console.log('Iniciar sesión con éxito');
        }else{
            console.log('Autenticación fallida!!!');
        }
    }

    reserPassword(newPassword){
        this.#password = newPassword;
    }

    logout() {
        console.log('Cierre de sesión con éxito');
    }
}

class Author extends User {
    #numOfPost;
    constructor(email, password){
        super(email, password);
        this.#numOfPost = 0;
    }

    createPost(content){
        this.#numOfPost++;
    }

    getNumOfPost(){
      return this.#numOfPost;  
    }
}

class Admin extends User {
    constructor(email, password){
        super(email, password);
    }

    removeUser(userId){
        console.log('Usuario eliminado con éxito.');
    }
}


const ana = new Author ('ana@gmail.com', '1234');
//ana.login('ana@gmail.com', '1234')
ana.createPost('Mi primer posteo de artículo')
ana.createPost('Mi segundo posteo de artículo')
ana.createPost('Mi tercero posteo de artículo')
ana.createPost('Mi cuarto posteo de artículo')
ana.createPost('Mi quinto posteo de artículo')

//console.log(ana.getNumOfPost());

const admin = new Admin('admin@gmail.com', "1234");
admin.login('admin@gmail.com', '1234');
admin.reserPassword('{id: 1}');

console.log(admin)


4) Poliformismo

class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    login(email, password){
        if (email === this.email && password === this.password){
            console.log('Inicio de sesión con éxito!!!')
        }else{
            console.log('Fallo inicio de sesión')
        }
    }
}

class Author extends User{
    #numOfPost;
    constructor(email, password){
        super(email, password);
        this.#numOfPost = 0;
    }

    createPost(content){
        this.#numOfPost++;
    }

    getNumOfPost(){
      return this.#numOfPost;  
    }
}

class Admin extends User {
    constructor (email, password){
        super(email, password)
    }

    login(email, password){
        const isValidAdmin = true;

        if(email === this.email && password === this.password && isValidAdmin) {
            console.log('Admin inicia sesión con éxito');
        }else{
            console.log('Autenticación faliida!!!')
        }
    }

    removeUser(userId){
        console.log('Usuario eliminado con éxito');
    }
}

const admin = new Admin ('admin@gmail.com', 'admin1234');

admin.login('admin@gmail.com', 'admin1234')
//console.log(admin)
*/

