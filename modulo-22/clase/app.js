//Ejercicio de clase Fetch

(()=>{
    let $fetch = document.querySelector('#listado')
    $fragment = document.createDocumentFragment();

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res)=>{
        return res.ok ? res.json() : Promise.reject(res);
    })
    .then(json=>{
        json.forEach(e=>{
            const $li = document.createElement('li')
            $li.innerText= `${e.name}`;
            $fragment.appendChild($li);
        });
        $fetch.appendChild($fragment);
    })
    .catch(err=>{
        console.log(err.status);
    })
})();
