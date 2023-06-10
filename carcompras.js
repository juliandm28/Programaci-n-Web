document.addEventListener("DOMContentLoaded", function() {
    const itemsContainer = document.getElementById("items");
    const carritoItemsContainer = document.getElementById("carrito-items");
    const totalContainer = document.getElementById("total");
    const comprarButton = document.getElementById("comprar");
  
    let carrito = [];
  
   
    fetch("carcompras.json")
      .then(response => response.json())
      .then(catalogo => {
        catalogo.forEach(item => {
          const itemElement = document.createElement("div");
          itemElement.classList.add("item");
          itemElement.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}">
            <p><strong>${item.nombre}</strong></p>
            <p>Precio: $${item.precio}</p>
            <button class="agregar-carrito">Agregar al carrito</button>
          `;
  
          const agregarCarritoButton = itemElement.querySelector(".agregar-carrito");
          agregarCarritoButton.addEventListener("click", () => {
            agregarItemAlCarrito(item);
          });
  
          itemsContainer.appendChild(itemElement);
        });
      });
  

    
    function agregarItemAlCarrito(item) {
        carrito.push(item);
        mostrarCarrito();
    }

    
    function mostrarCarrito() {
        carritoItemsContainer.innerHTML = "";

        carrito.forEach(item => {
            const itemElement = document.createElement("div");
            itemElement.innerHTML = `
                <p>${item.nombre} - Precio: $${item.precio}</p>
            `;

            carritoItemsContainer.appendChild(itemElement);
        });

        calcularTotal();
    }

        
        function calcularTotal() {
            let total = 0;
    
            carrito.forEach(item => {
                total += item.precio;
            });
    
            totalContainer.textContent = `Total: $${total}`;
        }
        
function vaciarCarrito() {
    carrito = [];
    mostrarCarrito();
  }
  
  
  const botonVaciarCarrito = document.getElementById("vaciar-carrito");
  
  
  botonVaciarCarrito.addEventListener("click", vaciarCarrito);
  
    
       
comprarButton.addEventListener("click", () => {
    if (carrito.length > 0) {
      
      comprarButton.style.display = "none";
      document.getElementById("formulario").style.display = "block";
    } else {
      alert("El carrito está vacío. Agrega items antes de comprar.");
    }
  });
  
  
  const confirmarButton = document.getElementById("confirmar");
  confirmarButton.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    const direccion = document.getElementById("direccion").value;
  
    if (nombre && direccion) {
      alert(`¡Gracias por tu compra, ${nombre}! Tu pedido será enviado a ${direccion}.`);
      carrito = [];
      mostrarCarrito();
      comprarButton.style.display = "block";
      document.getElementById("formulario").style.display = "none";
    } else {
      alert("Por favor, ingresa tu nombre y dirección antes de confirmar la compra.");
    }
  });
  
    });
    
