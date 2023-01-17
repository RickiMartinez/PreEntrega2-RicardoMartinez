alert("Lista de Producto, Para Finalizar la compra ingrese 0")
let seleccionarProductos = [
  { id: 1, nombre: "Buzo", precio: 2000 },
  { id: 2, nombre: "Remera", precio: 1000 },
  { id: 3, nombre: "Jean", precio: 3000 },
  { id: 4, nombre: "Zapatilla", precio: 4000 },
];

let seleccionarCantidad;
let total = 0;

let carrito = [];

const cantidad = (cant, precio) => {
  return cant * precio
}


while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad= Number(prompt("El producto seleccionado es Buzo, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 2000)
      break;
      case 2:
        seleccionarCantidad = Number(prompt("El producto seleccionado es Remera, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 1000)
      break;
    case 3:
      seleccionarCantidad = Number(prompt("El producto seleccionado es Jean, indique la cantidad"))
      total += cantidad(seleccionarCantidad, 3000)
    break;
    case 4:
      seleccionarCantidad = Number(prompt("El producto seleccionado es Zapatillas, indique la cantidad"))
      total += cantidad(seleccionarCantidad, 4000)
    break;

    default:
      break;
  }
  seleccionarProductos = Number(prompt( "1-Buzo $2000 2-Remera $1000 3-Jean $3000 4-Zapatillas $4000 "))
}

alert("el total de la compra es de: " + total)


const envio = () => {
    if (total >= 10000) {
      alert("El envio es gratuito")
    }else{
      total += 1000
      alert("el costo de envio es de 1000, el total es: " + total)
    }
}

 envio()

const metodoDePago = () => {
  let metodo = prompt("Ingrese el metodo de pago, tarjeta o efectivo" )
  if (metodo == "tarjeta") {
    total *= 1.1
    console.log(total);
  }else if ( metodo == "efectivo") {
    total -= 1000
    alert("tenes un descuento de 1000, el total es:" + total)
  }

  
}

metodoDePago()