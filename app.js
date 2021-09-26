
// const precio = 100;
// const descuento = 15;
function onClickButtonDescuentoPrecio()
{
  const Iprecio = document.getElementById("Inputprecio");
  const precio = Iprecio.value;
  const Idescuento = document.getElementById("Inputdescuento");
  const precio = Idescuento.value;
}

function descuentoPrecio(precio, descuento)
{
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * descuento)/100;
  return precioConDescuento;

}
// # Taller 3

// -1: definir las formulas
// -2: Implementar las formulas en Js
// -3: Crear funciones
// -4: Integrar con HTML
