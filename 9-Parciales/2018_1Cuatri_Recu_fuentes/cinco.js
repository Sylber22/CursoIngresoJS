function mostrar()
{
	var diaSem= prompt ("Ingrese día de la semana");
	switch (diaSem)
	{
		case "Viernes":
		case "Sabado":
		case "Domingo":
		alert ("Buen finde");
		break;
		case "Lunes";
		case "Martes";
		case "Miércoles";
		case "Jueves";	
		alert ("a trabajar");
		break;
		default:
		alert ("No pertenece a un día dela semana")
	}
}
