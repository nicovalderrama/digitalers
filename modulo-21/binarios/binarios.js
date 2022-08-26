
//trabajando xhr con imagenes - se pasa un texto binario
let xhr = new XMLHttpRequest;

//para convertir ese codigo existen varias formas unas son Blob - File
//traducen o reciben informacion sobre un archivo
xhr.responseType='blob'
xhr.addEventListener('load',()=>{
    if(xhr.status==200){
        let imagen = xhr.response;
        //para poder mostrar la imagen necesitamos la API web URL
        //nos brinda una URL donde podemos visualizar la imagen mediante una URL
        let url = URL.createObjectURL(imagen);
        console.log(url);
        let imgDom = document.createElement('img');
        imgDom.src = url;
        document.body.appendChild(imgDom);
    }
})
//este evento se lanza cuando el readyState es 3 - descargando la informacion o archivo
//e.total= es la cantidad total de bytes que se tienen que descargar
//e.loaded= es la cantidad parcial que se va descargando
let progress= document.querySelector('progress');
let p = document.querySelector('p')
xhr.addEventListener('progress',(e)=>{
    console.log(e);
    let porcentaje = e.loaded * 100 / e.total;
    progress.value=porcentaje
    p.innerText= `descargando...${Math.ceil(porcentaje)}%`;
})
xhr.open('get','boca-juniors-logo.png')
xhr.send();
console.log(xhr);


