//DRAG Y DROP
//dragenter - dragleave - dragover - drop

let drop = document.getElementById('drop')
let input = document.getElementById('archivo')

//este evento se dispara cuando el input cambia su valor
//con la propiedad files capturamos el archivo
input.addEventListener('change',()=>{
    manejarArchivos(input.files)
})

//este evento se lanza cuando coloco un archivo adentro de la zona de dropeo
drop.addEventListener('dragenter',(e)=>{
    e.preventDefault();
})

//este evento se lanza cuando saco un achivo de la zona de dropeo
drop.addEventListener('dragleave',(e)=>{
    e.preventDefault();
})

//este evento se lanza cada vez que tenga el archivo sobre la zona de dropeo
drop.addEventListener('dragover',(e)=>{
    e.preventDefault();
})

//este evento se lanza cuando suelto el archivo dentro de la zona de dropeo
//accediendo a la propiedad dataTransfer del evento drop, podemos capturar el archivo
drop.addEventListener('drop',(e)=>{
    e.preventDefault();
    manejarArchivos(e.dataTransfer.files)
})

function manejarArchivos(archivo){
    console.log(archivo);
}