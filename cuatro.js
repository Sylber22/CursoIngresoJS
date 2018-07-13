function mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;


	numeroUno=prompt ("Ingrese un número");
	numeroDos=prompt ("Ingrese otro número");

	if (numeroUno==numeroDos) 
	{
		resultado=numeroUno+numeroDos;
	}
	else 
		numeroUno=parseInt (numeroUno);
		numeroDos=parseInt (numeroDos);

		if (numeroUno>numeroDos)  
		{
		resultado=numeroUno/numeroDos;
		}

		if (numeroUno<numeroDos)
		{
			resultado=numeroUno+numeroDos;
		}
		
	alert ("el resultado es "+resultado);
	
}
