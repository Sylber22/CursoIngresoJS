function mostrar()
{

	var contador=0;
	var maximo;
	var minimo;
	var numero;
	var flag=false; // se usa la bandera para el primer numero
	// declarar variables
	
	var respuesta="si";

	while(respuesta!="no")
	{
		contador ++;
		numero =prompt ("Ingrese un numero");
		
		if (flag==false || numero>maximo) 
		{
			maximo=numero;
			flag= true;
		}
		/*		
		if (contador==0) 
		{
			maximo=numero;
			minimo=numero;
		}
		if (numero>maximo) 
		{
			maximo=numero;
		}
		if (numero<minimo) 
		{
			minimo=numero;
		}*/
	respuesta= prompt ("Desea continuar?");	
	}

document.getElementById('maximo').value=maximo;
document.getElementById('minimo').value=minimo;
}