//  Consumir la api fake de https://jsonplaceholder.typicode.com/ 
// implementando API Fetch y pintar en nuestro html (utilizando bootstrap vía cdn para los estilos)
//  una tabla de 10 usuarios y debe contener las propiedades en sus columnas de Id, name, username, email
//  y address-street.

let tbody = document.getElementById('tbody')
let table = document.getElementById('table');

async function usuarios() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);

    data.forEach(e => {
        let id = e.id;
        let nombre = e.name;
        let username = e.username;
        let email = e.email;
        let ciudad = e.address.street;

        tbody.innerHTML += `
        <tr>
            <td>${id}</td>
            <td>${nombre}</td>
            <td>${username}</td>
            <td>${email}</td>
            <td>${ciudad}</td>
        </tr>`;
        table.appendChild(tbody);

    });

    
}
usuarios()