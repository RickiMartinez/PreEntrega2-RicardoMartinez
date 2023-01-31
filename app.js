const frutas = [
  { nombre: 'Manzana', precio: 10 },
  { nombre: 'Pera', precio: 20 },
  { nombre: 'Plátano', precio: 25 },
  { nombre: 'Uva', precio: 30 },
  { nombre: 'Naranja', precio: 35 }
  ];

  const addButtons = document.getElementsByClassName("add-button");
  const removeButtons = document.getElementsByClassName("remove-button");
  const cancelButton = document.getElementById("cancel-button");
  const finishButton = document.getElementById("finish-button");
  
  let carrito = [];
  let total = 0;
  
  function updateTotal() {
    total = 0;
    for (let i = 0; i < carrito.length; i++) {
      total += carrito[i].precio * carrito[i].cantidad;
    }
    document.getElementById("total").innerHTML = "$" + total.toFixed(2);
  }
  
  function agregarFruta(nombre, precio) {
    for (let i = 0; i < carrito.length; i++) {
      if (carrito[i].nombre === nombre) {
        carrito[i].cantidad++;
        return;
      }
    }
    carrito.push({ nombre, precio, cantidad: 1 });
  }
  
  function eliminarFruta(nombre) {
    for (let i = 0; i < carrito.length; i++) {
      if (carrito[i].nombre === nombre) {
        carrito[i].cantidad--;
        if (carrito[i].cantidad === 0) {
          carrito.splice(i, 1);
        }
        return;
      }
    }
  }
  
  function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
  
  function cargarCarrito() {
    const datosCarrito = localStorage.getItem("carrito");
    if (datosCarrito !== null) {
      carrito = JSON.parse(datosCarrito);
    }
  }
  
  for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener("click", function() {
      agregarFruta(frutas[i].nombre, frutas[i].precio);
      updateTotal();
      guardarCarrito();
    });
    removeButtons[i].addEventListener("click", function() {
      eliminarFruta(frutas[i].nombre);
      updateTotal();
      guardarCarrito();
    });
  }
  
  cancelButton.addEventListener("click", function() {
    carrito = [];
    updateTotal();
    guardarCarrito();
  });
  
  finishButton.addEventListener("click", function() {
    alert("Compra finalizada por un total de $" + total.toFixed(2));
    carrito = [];
    updateTotal();
    guardarCarrito();
  });
  
  cargarCarrito();
  updateTotal();