const productos = [
    {id: 1,
     nombre: "Monedero hueso",
     precio: 25000,
     categoria: "monedero",
     imagen: "../assets/images/accesorio-monedero-color-hueso.png",
     descripcion: "Diseño simple y elegante, pensado para el uso diario y fácil de combinar.",
    },

    {id: 2,
     nombre: "Monedero terracota",
     precio: 25000,
     categoria: "monedero",
     imagen: "../assets/images/accesorio-monedero-color-terracota.png",
     descripcion:"Monedero compacto y funcional, ideal para llevar monedas y pequeños objetos con estilo.",
    },

    {id: 3,
     nombre: "Neceser rosa",
     precio: 38000,
     categoria: "neceser",
     imagen: "../assets/images/accesorio-nesecer-color-rosa.png",
     descripcion: "Espacioso y práctico, ideal para organizar cosméticos o artículos personales.",
    },

    {id: 4,
     nombre: "Neceser hueso",
     precio: 38000,
     categoria: "neceser",
     imagen: "../assets/images/accesorio-neseceres-color-hueso.png",
     descripcion: "Un accesorio versátil para viajes o uso diario, con un diseño limpio y moderno.",
    },

    {id: 5,
        nombre: "Funda oliva",
        precio: 30000,
     categoria: "funda-porta-libro",
     imagen: "../assets/images/accesorio-portalibro-color-verde.png",
     descripcion:"Ideal para llevar libros en la mochila sin dañarlos, con un estilo natural." ,
    },
    
    {id: 6,
     nombre: "Porta tarjeta",
     precio: 18000,
     categoria: "porta-tarjeta",
     imagen: "../assets/images/accesorio-portatarjeta-color-verde.png",
     descripcion: "Liviano y práctico, pensado para llevar tarjetas esenciales de forma ordenada.",
    },
]

console.log(productos)

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


renderProductos()

const activarBotones = document.querySelectorAll(`btn-agregar`)

