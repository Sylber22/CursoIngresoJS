function mostrar()
{
	var precio;
	var porcentaje;
	var porcentajeDeDescuento;
	var descuentoEnDinero;
	var precioConDescuento;
	var iva;
	var elPrecioFinal;

	precio= prompt("Ingrese el precio");
	precio=parseInt (precio);
	porcentaje= prompt("Ingrese el porcentaje de descuento");
	porcentaje= parseInt (porcentaje);

	porcentajeDeDescuento=porcentaje/100;
	descuentoEnDinero=precio*porcentajeDeDescuento;
	precioConDescuento=precio- descuentoEnDinero;
	iva= precioConDescuento* 0.21;
	iva =parseInt (iva);
	elPrecioFinal=precioConDescuento+iva;

	

	alert ("El descuento en $$"+ descuentoEnDinero+ " .El precio con descuento es de $$ "+precioConDescuento+" el IVA es de "+iva);
	document.getElementById('elPrecioFinal').value=elPrecioFinal;


}
