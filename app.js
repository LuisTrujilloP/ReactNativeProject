
// const precio = 100;
// const descuento = 15;

function descuentoPrecio(precio, descuento)
{
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
  
  return precioConDescuento;

}


function onClickButtonDescuentoPrecio()
{
  const inputPrice = document.getElementById("InputPrice");
  const Price = inputPrice.value;

  const inputDiscount = document.getElementById("InputDiscount");
  const Discount = inputDiscount.value;


  const precioConDescuento = descuentoPrecio(Price, Discount);
  
  const resultP = document.getElementById("ResultP");
  resultP.innerText ="el precio con descuento son " + precioConDescuento

}



// # Taller 3

// -1: definir las formulas
// -2: Implementar las formulas en Js
// -3: Crear funciones
// -4: Integrar con HTML
