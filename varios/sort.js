arrayNumeros=[7,23,1,102,344,6,65,43]
console.log(arrayNumeros.sort());
//1,102,23,344,43,6,65,7


/**
El método sort() puede ordenar valores negativos, cero y positivos en el orden correcto. Cuando compara dos valores, los envía a nuestra función de comparación y luego ordena los valores de acuerdo al resultado devuelto.

Si el resultado es negativo, a se ordena antes que b.
Si el resultado es positivo, b se ordena antes de a.
Si el resultado es 0, nada cambia.
 */
console.log(arrayNumeros.sort((a,b)=>{
    if (a>b) {
        return 1;
    } else if (b>a) {
        return -1;
    }else{
        return 0;
    }
}))


console.log(arrayNumeros.sort((a,b) => b-a))
//ordenado al reves

arrayStrings = ['uva','anana','pera','naranja','sandia']
console.log(arrayStrings.sort().reverse())
