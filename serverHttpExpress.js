const express = require('express');
const app = express();


const productos = [
    {id: 1, nombre: 'Escuadra', precio: 232.54},
    {id: 2, nombre: 'Calculadora', precio: 111.45},
    {id: 3, nombre: 'Globos', precio: 17.45},
    {id: 4, nombre: 'Paleta de pintura', precio: 500.23},
    {id: 5, nombre: 'Reloj', precio: 43.77},
    {id: 6, nombre: 'Agenda', precio: 308.69},
]


function getProductRandom (array) { 
    var rand = Math.floor(Math.random()*array.length); 
    return array[rand].nombre; 
}



const regresarProductos = (Producto) => {
    return Producto.nombre;
}

const nombreProducto = productos.map(regresarProductos);  


app.get('/productos', (req, res) => {
        res.send('<h1 style = "color:blue:"> ' + nombreProducto + '</h1>');
})

app.get('/productoRandom', (req, res) => {
    res.send('<h1 style = "color:blue;">' + getProductRandom(productos) + '</h1>');
})


const server = app.listen(8080, () => {
    console.log(`Server http escuchando en el puerto ${server.address().port}`)
})

server.on('error', error => console.log(`Error en servidor: ${error}`));