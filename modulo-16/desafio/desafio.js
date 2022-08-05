function producto(id, nombre, precio, cantidad) {
    const producto = { id: id, nombre: nombre, precio: precio, cantidad: cantidad };
    return producto;
}



/*
vamos a diseñar una función llamada Carrito, que
nos permita diseñar un carrito de compra, independientemente de su presentación. ¿Qué
significa esto? Esto significa que su código no debe gestionar nada de HTML ni de eventos ni
nada por el estilo. Los requisitos del carrito son:
1. Incrementar la cantidad de un producto ya existente en el carrito.
2. Agregar un nuevo producto al carrito.
3. Quitar un producto ya existente.
4. Obtener un reporte con el precio total y el detalle. Cada fila de del detalle debe tener
el nombre del producto, el precio del producto, la cantidad pedida y el total por fila.
*/
function Carrito() {
    this.productos = [];
    this.agregarProducto = function (producto) {
        this.productos.push(producto);
    }
    this.quitarProducto = function (id) {
        this.productos = this.productos.filter(function (producto) {
            return producto.id !== id;
        });
    }
    this.incrementarCantidad = function (id) {
        this.productos.forEach(function (producto) {
            if (producto.id === id) {
                producto.cantidad++;
            }
        });
    }
    this.obtenerReporte = function () {
        let total = 0;
        let reporte = "";
        this.productos.forEach(function (producto) {
            total += producto.precio * producto.cantidad;
            reporte += `${producto.nombre} - ${producto.precio} x ${producto.cantidad} = ${producto.precio * producto.cantidad}\n`;
        });
        return `Total: ${total}\n${reporte}`;
    }
}

