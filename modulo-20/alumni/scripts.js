//SPA
let links=document.querySelectorAll('a');
let main=document.querySelector('main');

links.forEach((link)=>{
    link.addEventListener('click',(e)=>{
        e.preventDefault();
        let id = link.id;
        location.hash = id;
    });
});

let paginaInicial = ajax('home.html')
paginaInicial.addEventListener('load',()=>{
    if(paginaInicial.status == 200){
        main.innerHTML = paginaInicial.responseText;
    }else{
        main.innerHTML = 'Error: ' + xhr.status + ' ' + xhr.statusText;
    }
});

function ajax(url,metodo){
    //si no recibe metodo entonecs por defecto es GET
    let http_metodo = metodo || 'GET';
    let xhr = new XMLHttpRequest();
    xhr.open(http_metodo,url);
    xhr.send();
    //Retorno el objeto xhr ya que no se puede retornar la respuesta
    return xhr;
}

window.addEventListener('hashchange',()=>{
    archivo = location.hash.split('#')[1] + '.html';
    let xhr = ajax(archivo);
        xhr.addEventListener('load',()=>{
            if(xhr.status == 200){
                main.innerHTML = xhr.responseText;
            }else{
                main.innerHTML = 'Error: ' + xhr.status + ' ' + xhr.statusText;
            }
        });
});