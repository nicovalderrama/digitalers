async function cargarDatos(){
    try {
        let url = await fetch('https://pokeapi.co/api/v2/pokemon/');
        let response = await url.json();
        console.log(response)

        let pokemonName = response.results[0].name;
        let peticion = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`) 
        let res = await peticion.json();
        console.log(res);

        let imagen = document.createElement('img');
        let foto = res.sprites.front_default;
        imagen.src = foto;
        let parrafo = document.createElement('p')
        let name = res.name
        parrafo.textContent=name;
        document.body.append(imagen,parrafo);
    } catch (error) {
        console.log(error);
    }
    
}   
cargarDatos();