function mostrar()
{
	 
	var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch (mesDelAño)
	{
		case"Febrero": 	
		alert ("este mes tiene 28 días");
			break;
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
		alert ("este mes tiene 31 días");
			break;
			default:
		alert ("si tiene 30 días");

	
   }		


}//FIN DE LA FUNCIÓN