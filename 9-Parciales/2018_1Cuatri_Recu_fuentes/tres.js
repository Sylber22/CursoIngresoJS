function mostrar()
{
	var precio;
	var porcentaje;
	var descuento;
	var iva;
		
	precio=prompt ("Ingresar precio : ");
	porcentaje=prompt ("Ingresar porcentaje: ");
	descuento= (precio*porcentaje)/100;
	
	descuento=porcentaje+precio;
	alert ("Ingresar precio y porcentaje: "+descuento);

}
