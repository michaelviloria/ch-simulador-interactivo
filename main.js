alert(`
  Este es un simulador en el cual podrás seleccionar varios productos
  de la canasta básica con su respectivo precio en Colombia (COP)
  y su cantidad, al final se te mostrará la cantidad de productos
  y su valor total de todo lo que hayas seleccionado.
`);

const valorArroz = 1200;
const valorPapa = 1100;
const valorAceite = 3000;

let usuarioArroz = false;
let usuarioPapa = false;
let usuarioAceite = false;

let totalArroz = 0;
let totalPapa = 0;
let totalAceite = 0;

let cantidadArroz = 0;
let cantidadPapa = 0;
let cantidadAceite = 0;

productos();
function productos() {
  let respuesta = prompt(`
  De los siguientes productos por favor indicar cual seleccionarás escribiendo el número del mismo.
  1. 1lb Arroz COP$${valorArroz}.
  2. 1lb Papa COP$${valorPapa}.
  3. 1l Aceite COP$${valorAceite}.
  `).toLowerCase();
  let cantidad = parseInt(prompt(`
    A continuación para establecer una cantidad por favor digite un valor númerico.
  `));

  if (isNaN(cantidad)) {
    cantidad = mensajeCantidad();
  }

  function mensajeCantidad() {
    return
      parseInt(prompt(`
        Por favor digite nuevamente un "VALOR NÚMERICO" para establecer la cantidad del producto.
      `));
  }
  
  if (respuesta == "1" || respuesta == "uno") {
    if (usuarioArroz === false) {
      usuarioArroz = true;
      cantidadArroz = cantidad;
      totalArroz = sumaCantidad(valorArroz, cantidadArroz);
    }
  } 
  else if (respuesta == "2" || respuesta == "dos") {
    if (usuarioPapa === false) {
      usuarioPapa = true;
      cantidadPapa = cantidad;
      totalPapa = sumaCantidad(valorPapa, cantidadPapa);
    }
  }
  else if (respuesta == "3" || respuesta == "tres") {
    if (usuarioAceite === false) {
      usuarioAceite = true;
      cantidadAceite = cantidad;
      totalAceite = sumaCantidad(valorAceite, cantidadAceite);
    }
  }

  function sumaCantidad(valorProducto, cantidadProducto) {
    return valorProducto * cantidadProducto;
  }

  let reiniciarProceso = prompt(`
    Deseas seleccionar un producto diferente al que ya has seleccionado?
    Si es asi escribe "1" si deseas finalizar el proceso escribe "2".
  `).toLocaleLowerCase();

  if (reiniciarProceso == "1" || reiniciarProceso == "uno") {
    productos();
  } else {
    mostrarProductos();
  }

  function mostrarProductos() {
    if (usuarioArroz === true) {
      console.log(`Arroz: COP $${valorArroz} Cantidad:${cantidadArroz} Total:COP $${totalArroz}`);
    } 
    
    if (usuarioPapa === true) {
      console.log(`Papa: COP $${valorPapa} Cantidad:${cantidadPapa} Total:COP $${totalPapa}`);
    } 
    
    if (usuarioAceite === true) {
      console.log(`Aceite: COP $${valorAceite} Cantidad:${cantidadAceite} Total:COP $${totalAceite}`);
    }
  }
}