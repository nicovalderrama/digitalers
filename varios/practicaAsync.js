async function mostrarFoto(){
    let response = await fetch('https://api.github.com/users');
    let datos = await response.json();
    console.log(datos);
    let foto = document.createElement('img');
    foto.src = datos[2].avatar_url;
    document.body.appendChild(foto);
}
mostrarFoto();