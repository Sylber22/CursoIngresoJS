function mostrar()
{
	var precio;
	var porcentajeDes;
	var descuentoDin;
	var iva;
	var resultadoFinal;

	precio= prompt ("Poner precio");
	porcentajeDes= prompt ("poner porcentaje de descuento");
	
	descuentoDin= precio*porcentajeDes/100;
	precioDes=precio-descuentoDin;
	iva=precio*0.21;

	resultadoFinal = precioDes + iva;

	alert ("1- El descuento de dinero es de $ "+descuentoDin+ " 2-el precio con descuento es de $ "+precioDes+" el IVA es de "+iva "%");
	document.getElementById('elPrecioFinal').value = resultadoFinal;



}
