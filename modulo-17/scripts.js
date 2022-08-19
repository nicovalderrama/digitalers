//accedemos al objeto evento
let btn=document.getElementById('btn');
btn.addEventListener('click',function(e){
    console.log(e);
});


let estatico = document.getElementById('estatico');

//creamos un boton de manera dinamica que se agrega al html pero no lo podemos controlar de la misma forma que el boton estatico
estatico.addEventListener('click', function() {
    let dinamico = document.createElement('button');
    dinamico.innerHTML = 'Dinamico';
    dinamico.id='dinamico';
    document.body.appendChild(dinamico);
});

//accedemos al objeto evento para eliminar el boton dinamicamente
document.addEventListener('click', function(e) {
    console.log(e.target.id);
    if(e.target.id == 'dinamico'){
        console.log('click en dinamico');
        e.target.remove();
    }
});

//cancelamos el evento por defecto
let link = document.getElementById('link');
link.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('click en link');
});

// manipulando el dom y el bom
let parrafo=document.getElementById('parrafo');

window.addEventListener('resize',()=>{
    console.log("cambio el tamaño")
    parrafo.innerHTML=`el ancho del navegador es: ${window.innerWidth} y el alto del navegador es: ${window.innerHeight}`;
})

