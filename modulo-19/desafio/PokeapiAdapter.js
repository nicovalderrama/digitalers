let boton = document.querySelector("#boton");
let dato = document.getElementById("dato");
let nombre = document.querySelector("#nombre");
let imgPoke = document.querySelector("#imgPoke")
let tipo = document.querySelector("#tipo");

    boton.addEventListener('click',()=>{
    xhr = new XMLHttpRequest;
    xhr.open("GET",`https://pokeapi.co/api/v2/pokemon/${dato.value}/`);
    xhr.send();
    xhr.addEventListener('load',()=>{
        if (xhr.status===200) {
            let datoPokemon=JSON.parse(xhr.responseText);
            console.log(datoPokemon)
            imgPoke.src = datoPokemon.sprites.front_default
            nombre.textContent= `Nombre: ${datoPokemon.name}`;
            tipo.textContent= `Tipo: ${datoPokemon.types[0].type.name}`;

                switch (datoPokemon.types[0].type.name) {
                    case "fire":
                        nombre.style.color = "orange";
                    break;

                    case "water":
                        nombre.style.color="Blue";
                    break;

                    case "grass":
                        nombre.style.color="Green";
                    break;

                    case "electric":
                        nombre.style.color="Yellow";
                    break;

                    case "ice":
                        nombre.style.color="LightBlue";
                    break;

                    case "fighting":
                        nombre.style.color="Red";
                    break;

                    case "poison":
                        nombre.style.color="Purple";
                    break;

                    case "ground":
                        nombre.style.color="Brown";
                    break;

                    case "flying":
                        nombre.style.color="LightBlue";
                    break;
                    case "psychic":
                        nombre.style.color="Pink";
                    break;
                    case "bug":
                        nombre.style.color="Green";
                    break;

                    case "rock":
                        nombre.style.color="black";
                    break;

                    case "ghost":
                        nombre.style.color="Purple";
                    break;

                    case "dragon":
                        nombre.style.color="Red";
                    break;

                    case "dark":
                        nombre.style.color="Black";
                    break;

                    case "steel":
                        nombre.style.color="Grey";
                    break;

                    case "fairy":
                        nombre.style.color="Pink";
                    break;

                    default:
                    break;
                }
        }

        
    }) 
})
