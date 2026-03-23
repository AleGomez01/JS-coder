let carrito = JSON.parse(localStorage.getItem('carrito')) || []

let productos = []

const totalCompra = document.getElementById("totalCompra");

async function cargarProductos() {
  try {
    const response = await fetch('/data/productos.json')
    const data = await response.json()

  productos = data
  renderProductos()
  activarBotones()

  } catch (error) {
    console.warn("Error cargando productos", error)
  }
}

cargarProductos()

const elcontenedorProductos = document.getElementById('contenedorProductos')


function renderProductos(){
    const cards = productos.map ((producto)=>{
        return `<div class= "card">
        <img src= "${producto.imagen}" alt ="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <h4>${producto.descripcion}</h4>
        <p>$${producto.precio}</p>
        <button data-id="${producto.id}" class = "btn-agregar"> Agregar al carrito </button>
        </div>`;
    })
    elcontenedorProductos.innerHTML = cards.join("")
}




function activarBotones(){
    const botones = document.querySelectorAll(`.btn-agregar`)
    
    botones.forEach(boton =>{
        boton.addEventListener("click", (e) => { 
            const productoid = parseInt(e.target.dataset.id,10);
            
            const añadiraCarrito = productos.find (producto => producto.id === productoid)
            
            const existe = carrito.find(p => p.id === añadiraCarrito.id)

            if (existe) {
            existe.cantidad = (existe.cantidad || 1) + 1
            } else {
            carrito.push({ ...añadiraCarrito, cantidad: 1 })
            }
            
            guardarCarrito()
            
            renderCarrito()
        });
    });
}


function guardarCarrito () {
localStorage.setItem('carrito',JSON.stringify(carrito))
}

const contenedorCarrito = document.getElementById("contenedorCarrito");

function renderCarrito() {
    contenedorCarrito.innerHTML = carrito.map(p => `
        <div>
            ${p.nombre} - $${p.precio} x${p.cantidad}
            <button class="btn-eliminar" data-id="${p.id}">❌</button>
        </div>
    `).join("");

    const total = carrito.reduce((acc, p) => acc + (p.precio * p.cantidad), 0)
    totalCompra.innerText = `Total: $${total}`

    activarBotonesEliminar() 
}

function activarBotonesEliminar() {
  const botonesEliminar = document.querySelectorAll(".btn-eliminar")

  botonesEliminar.forEach(boton => {
    boton.addEventListener("click", (e) => {
      const id = parseInt(e.target.dataset.id)
      eliminarProducto(id)
    })
  })
}

const btnFinalizar = document.getElementById("btnFinalizar");

btnFinalizar.addEventListener("click", () => {

    if(carrito.length === 0){
        Swal.fire({
            icon: 'warning',
            title: 'Carrito vacío',
            text: 'Agregá productos antes de comprar'
        })
        return
    }

    Swal.fire({
    icon: 'success',
    title: '¡Compra realizada!',
    text: 'Gracias por confiar en Felicia 👜',
})

    carrito = []
    guardarCarrito()
    renderCarrito()
})

function eliminarProducto(id) {
  carrito = carrito.filter(p => p.id !== id)
  guardarCarrito()
  renderCarrito()
}

cargarProductos()
renderCarrito()

