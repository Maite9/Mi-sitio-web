


const formulario = document.getElementById("formulario")

formulario.addEventListener('submit', (e) => {

    e.preventDefault()

    const email = document.getElementById("exampleInputEmail1").value

    console.log("email: " + email)


    alert('Gracias. Tu formulario fue enviado.')
})





/*
const productos = [
    {
        id: 1,
        nombre: "Biker deportiva",
        precio: 31000
    },
    {
        id: 2,
        nombre: "Biker deportiva",
        precio: 30000
    },
    {
        id: 3,
        nombre: "Calza deportiva",
        precio: 50000
    },
    {
        id: 4,
        nombre: "Conjunto deportivo",
        precio: 80000
    },
    {
        id: 5,
        nombre: "Remera deportiva",
        precio: 12000
    },
    {
        id: 6,
        nombre: "Calza deportiva",
        precio: 60000
    },
    {
        id: 7,
        nombre: "Top deportivo",
        precio: 30000
    },
    {
        id: 8,
        nombre: "Top deportivo",
        precio: 32000
    },
    {
        id: 9,
        nombre: "Top deportivo",
        precio: 39000
    },

];
*/
/*
function mostrarProductos() {
    console.log("Bienvenido a Mariana Santana Fitness. ¡Estos son los productos disponibles!")
    productos.forEach(producto => console.log(producto))
};

mostrarProductos()
*/
/*
const productosJSON = JSON.stringify(productos)

localStorage.setItem("productos", productosJSON)


const MostrarProductos = () => {

    productos.forEach(producto => {

        let carta = document.createElement('p')
        carta.innerHTML = 'el producto es ${producto.nombre} y su precio es $${producto.precio} '


        const boton = document.createElement('button')
        boton.textContent = "Agregar al Carrito"

        boton.addEventListener('click', () => AgregarCompraCarrito(producto))

        carta.appendChild(boton)




    })




}


const AgregarCompraCarrito = producto => {


}


*/




 





//Funcion Constructora
/*
function Producto (nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;

    this.mostrarInfo = function(){
        console.log(' ${this.nombre} cuesta $${this.precio} ')
    };
}

const producto1 = new Producto("Biker deportiva", 31000);
const producto2 = new Producto("Biker deportiva", 30000);
const producto3 = new Producto("Calza deportiva", 50000);
const producto4 = new Producto("Conjunto deportivo", 80000);
const producto5 = new Producto("Remera deportiva", 12000);
const producto6 = new Producto("Calza deportiva", 60000);
const producto7 = new Producto("Top deportivo", 30000);
const producto8 = new Producto("Top deportivo", 32000);
const producto9 = new Producto("Top deportivo", 39000);


*/