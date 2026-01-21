const productos = [
    { nombre: "Remera", precio: 5000 },
    { nombre: "Pantalón", precio: 8000 },
    { nombre: "Zapatillas", precio: 15000 }
];

let carrito = [];

console.log("JS conectado correctamente");

function mostrarProductos() {
    let mensaje = "Productos disponibles:\n";

    for (let i = 0; i < productos.length; i++) {
        mensaje += (i + 1) + " - " + productos[i].nombre + 
                   " ($" + productos[i].precio + ")\n";
    }

    alert(mensaje);
}


function agregarProducto() {
    let opcion = prompt("Ingresá el número del producto que querés comprar:");

    if (opcion >= 1 && opcion <= productos.length) {
        carrito.push(productos[opcion - 1]);
        alert("Producto agregado al carrito");
    } else {
        alert("Opción inválida");
    }
}


function calcularTotal() {
    let total = 0;

    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio;
    }

    alert("Total a pagar: $" + total);
}

function iniciarSimulador() {
    let continuar = true;

    while (continuar) {
        mostrarProductos();
        agregarProducto();
        continuar = confirm("¿Querés agregar otro producto?");
    }

    calcularTotal();
    console.log("Carrito final:", carrito);
}

iniciarSimulador();
