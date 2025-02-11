
//productos
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

// carrito 
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// mostrar productos en la página
const contenedorProductos = document.querySelector(".contenedor__cards .row");
productos.forEach(producto => {
    const div = document.createElement("div");
    div.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</p>
        <button class="botonCarrito" data-id="${producto.id}">Agregar al Carrito</button>
    `;
    contenedorProductos.appendChild(div);
});

document.querySelectorAll(".botonCarrito").forEach(boton => {
    boton.addEventListener("click", (e) => {
        const id = parseInt(e.target.dataset.id);
        agregarAlCarrito(id);
    });
});

// función para agregar productos al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(prod => prod.id === id);
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(`${producto.nombre} agregado al carrito!`);
}

//formulario
document.getElementById("formulario").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("exampleInputEmail1").value;
    alert(`Gracias. Te contactaremos a ${email}`);
    document.getElementById('exampleInputEmail1').value = '';
});
