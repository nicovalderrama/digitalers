const atras = document.querySelector("#atras")
const ir = document.querySelector("#ir")
const siguiente = document.querySelector("#siguiente")

const home = document.querySelector('#home')
const producto = document.querySelector("#producto01")
const productoActual = document.querySelector("#producto02")
const contactos = document.querySelector("#contactos")
const faqs = document.querySelector('#faqs')


//Vamos uno para atras
atras.addEventListener('click',()=>{
    window.history.back();
})


//Vamos uno para adelante
siguiente.addEventListener('click',()=>{
    window.history.forward();
})


//El metodo history.go recibe un parametro, si es positivo va para adelante o si es negativo va para atras
ir.addEventListener('click',()=>{
    let numero = parseInt(prompt('ingrese un numero'));
    history.go(numero);
})

//anexamos un registro en la sesion del historial de nuestro navegador
//1er parametro= pasamos cualquier tipo de dato
//2do parametro= asignamos un titulo
//3er parametro= asignamos la url
home.addEventListener('click',()=>{
    history.pushState(
        {
            page:'Home'
        },
        'Home',
        '/home'
    )
})

producto.addEventListener('click',()=>{
    history.pushState(
        {
            page:'Productos',
            productos: [
                {
                    id:'01',
                    nombre:'banana',
                    precio:'$300'
                },
                {
                    id:02,
                    nombre:'manzana',
                    precio:'$100'
                }
            ]
        },
        'Productos',
        '/productos'
    )
})

//replaceState() elimina la posicion anterior en el historial y la sobreescribe
productoActual.addEventListener('click',()=>{
    history.replaceState(
        {
            page:'Productos',
            productos: [
                {
                    id:'01',
                    nombre:'banana',
                    precio:'$300'
                },
                {
                    id:02,
                    nombre:'manzana',
                    precio:'$100'
                },
                {
                    id:03,
                    nombre:'pera',
                    precio:'$200'
                }
            ]
        },
        'Productos',
        '/productosActuales'
    )
})




//El evento popstate nos sirve para ver la informacion asociada al historial
window.addEventListener('popstate',()=>{
    console.log(history.state)
})

