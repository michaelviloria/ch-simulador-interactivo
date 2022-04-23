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

function mensajeVerificarCantidad() {
	return (msj = parseInt(
		prompt(`
      Por favor digite nuevamente un "VALOR NÚMERICO" para establecer la cantidad del producto.
    `)
	));
}

function sumaCantidad(valorProducto, cantidadProducto) {
	return valorProducto * cantidadProducto;
}

function mostrarProductos() {
	let mostrarArroz = "";
	let mostrarPapa = "";
	let mostrarAceite = "";
	if (usuarioArroz === true) {
		mostrarArroz = `Arroz: COP $${valorArroz} Cantidad: ${cantidadArroz} Total: COP $${totalArroz}`;
	}

	if (usuarioPapa === true) {
		mostrarPapa = `Papa: COP $${valorPapa} Cantidad: ${cantidadPapa} Total: COP $${totalPapa}`;
	}

	if (usuarioAceite === true) {
		mostrarAceite = `Aceite: COP $${valorAceite} Cantidad: ${cantidadAceite} Total: COP $${totalAceite}`;
	}
	alert(`
  ${mostrarArroz}
  ${mostrarPapa}
  ${mostrarAceite}
  `);
}

function mensajeCantidad() {
	let cantidad = parseInt(
		prompt(`
    A continuación para establecer una cantidad por favor digite un valor númerico.
  `)
	);

	while (isNaN(cantidad)) {
		cantidad = mensajeVerificarCantidad();
	}
	return cantidad;
}

function productos() {
	let msjArroz = "";
	let msjPapa = "";
	let msjAceite = "";

	if (usuarioArroz === false) {
		msjArroz = `1. 1lb Arroz COP $${valorArroz}.`;
	} else {
		msjArroz = `1. 1lb Arroz COP $${valorArroz}. Producto seleccionado.`;
	}

	if (usuarioPapa === false) {
		msjPapa = `2. 1lb Papa COP $${valorPapa}.`;
	} else {
		msjPapa = `2. 1lb Papa COP $${valorPapa}. Producto seleccionado.`;
	}

	if (usuarioAceite === false) {
		msjAceite = `3. 1l Aceite COP $${valorAceite}.`;
	} else {
		msjAceite = `3. 1l Aceite COP $${valorAceite}. Producto seleccionado.`;
	}

	let respuesta = prompt(`
  De los siguientes productos por favor indicar cual seleccionarás escribiendo el número del mismo.
  ${msjArroz}
  ${msjPapa}
  ${msjAceite}
  `).toLowerCase();

	if (respuesta == "1" || respuesta == "uno") {
		if (usuarioArroz === false) {
			usuarioArroz = true;
			cantidadArroz = mensajeCantidad();
			totalArroz = sumaCantidad(valorArroz, cantidadArroz);
		} else {
			let decision = prompt(`
      Este producto ya ha sido seleccionado anteriormente.
      Si deseas modificarlo escribe "1".
      Si deseas regresar escribe "2".
      `).toLowerCase();

			if (decision == "1" || decision == "uno") {
				cantidadArroz = mensajeCantidad();
				totalArroz = sumaCantidad(valorArroz, cantidadArroz);
			} else if (decision == "2" || decision == "dos") {
				productos();
			}
		}
	} else if (respuesta == "2" || respuesta == "dos") {
		if (usuarioPapa === false) {
			usuarioPapa = true;
			cantidadPapa = mensajeCantidad();
			totalPapa = sumaCantidad(valorPapa, cantidadPapa);
		} else {
			let decision = prompt(`
      Este producto ya ha sido seleccionado anteriormente.
      Si deseas modificarlo escribe "1".
      Si deseas regresar escribe "2".
      `).toLowerCase();

			if (decision == "1" || decision == "uno") {
				cantidadPapa = mensajeCantidad();
				totalPapa = sumaCantidad(valorPapa, cantidadPapa);
			} else if (decision == "2" || decision == "dos") {
				productos();
			}
		}
	} else if (respuesta == "3" || respuesta == "tres") {
		if (usuarioAceite === false) {
			usuarioAceite = true;
			cantidadAceite = mensajeCantidad();
			totalAceite = sumaCantidad(valorAceite, cantidadAceite);
		} else {
			let decision = prompt(`
      Este producto ya ha sido seleccionado anteriormente.
      Si deseas modificarlo escribe "1".
      Si deseas regresar escribe "2".
      `).toLowerCase();

			if (decision == "1" || decision == "uno") {
				cantidadAceite = mensajeCantidad();
				totalAceite = sumaCantidad(valorAceite, cantidadAceite);
			} else if (decision == "2" || decision == "dos") {
				productos();
			}
		}
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
}
productos();
