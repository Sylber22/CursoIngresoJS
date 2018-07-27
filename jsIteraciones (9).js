function mostrar()
{

	var contador=0;
	var maximo, minimo;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		numero =prompt ("Ingrese un numero");
		numero = parseInt (numero);
		contador ++;
		respuesta= prompt ("Desea continuar?");
		if (numero>maximo) 
		{
			numero= maximo;
		}
		else
		{
			if (numero<minimo) 
			{
				numero=minimo;
			}
		}
	}

document.getElementById('maximo').value=maximo;
document.getElementById('minimo').value=minimo;

}//FIN DE LA FUNCIÓN