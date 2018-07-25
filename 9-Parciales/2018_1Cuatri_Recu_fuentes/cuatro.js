function mostrar()
{
	var numeroUno=prompt ("Ingrese numero uno");
	var numeroDos=prompt ("Ingrese numero dos");
	var resultado;
	if (numeroUno==numeroDos) 
	{
		alert ("los numeros son: "+numeroUno+" y "+numeroDos);
	}
	else
	{
		if (numeroUno<numeroDos)
		{
			numeroUno= parseInt (numeroUno);
			numeroDos= parseInt (numeroDos); 
			resultado= numeroUno/numeroDos;

		}
		else 
		{
			if (numeroDos<numeroUno)
			{
				numeroUno= parseInt (numeroUno);
				numeroDos= parseInt (numeroDos); 
				resultado= numeroDos+numeroUno;
			}
			

		}
		if (resultado<50) 
				{
					alert ("la suma es "+ resultado +" y es menor a 50");
				}
				else
				{
						alert (resultado);
				}
	}
	
			}


