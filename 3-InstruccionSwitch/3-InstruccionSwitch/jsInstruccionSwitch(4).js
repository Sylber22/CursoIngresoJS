function mostrar()
{
	var mes =document.getElementById('mes').value;
	switch (mes)
	{
		case "Febrero":
		alert ("Tiene 28 días");
		break;
		case "Abril":
		case "Junio":
		case "Septimebre":
		case "Noviembre":
		alert ("Este mes tiene 30 días");
		break;
		default:
		alert ("Este mes tiene 31 días");

	
}



}//FIN DE LA FUNCIÓN