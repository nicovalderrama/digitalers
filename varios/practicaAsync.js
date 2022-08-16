async function mostrarFoto(){
    //leer nuestro archivo local .json
    let response = await fetch('usuario.json');
    let usuario = await response.json();

    //leer usuario github
    let githubResponse = await fetch(`https://api.github.com/users/${usuario.name}`)
    let githubUsuario = await githubResponse.json();

    //mostrar avatar en el DOM
    let foto = document.createElement('img');
    foto.src = githubUsuario.avatar_url;
    document.body.appendChild(foto);
    return githubUsuario;
}
mostrarFoto();