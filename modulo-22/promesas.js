//promesas es un valor eventual, que se va a resolver en un futuro, prometen un resultado positivo o negativo

//pending - resolved - rejected
let promesa = new Promise((resolve,reject) => {
    let xhr= new XMLHttpRequest;
    xhr.open('get','info.txtu')
    xhr.addEventListener('load',()=>{
        if (xhr.status==200) {
            resolve(xhr.response)
        }else{
            reject('ERROR404')
        }
    })
    xhr.send();
});

//si la promesa se ejecuta por resolve, tenemos que acceder al valor con then
promesa.then((valor)=>{
    console.log('promesa resuelta',valor);
})
//si la promesa se ejecuta por reject, tenemos que acceder al valor con catch
promesa.catch((valor)=>{
    console.log('promesa rechazada',valor);
})