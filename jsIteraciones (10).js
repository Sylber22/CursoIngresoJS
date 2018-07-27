function mostrar()
{

	var contador=0;
	var numero=0;
	var negativos=0;
	var positivos=0;
	var cantPos=0;
	var cantNeg=0;
	var cantidadCeros=0;
	var cantidadPares=0;
	var promedioNegativos;
	var promedioPositivos;
	var difPosNeg;

	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		numero =prompt ("Ingrese un numero");
		numero = parseInt (numero);
	
		if (numero<0) 
		{
			negativos=negativos+numero;
			cantNeg ++;
		}
		else
		{
			if (numero>0)
			 {
			 	positivos=positivos+numero;
			 	cantPos ++;
			 }
			 else
			 {
			 	cantidadCeros ++;
			 }
		}
		if (numero%2==0) 
		{
			cantidadPares ++;
		}
		




		respuesta = prompt ("ingrese no para salir");
	}

	promedioPositivos=positivos/cantPos;
	promedioNegativos=negativos/cantNeg;
	 //los promedio se hacen afuera del while
	 difPosNeg=positivos-negativos;

	document.write ("la suma de los negativos es: "+negativos);
	document.write (" la suma de los positivos es: "+positivos);
	document.write (" la cantidad de  negativos es: "+cantNeg);
	document.write (" la cantidad de  positivos es: "+cantPos);
	document.write (" la cantidad de  ceros es: "+cantidadCeros);
	document.write (" la cantidad de  numeros pares es: "+cantidadPares);
	document.write (" el promedio de negativos es: "+promedioNegativos);
	document.write (" el promedio de positivos es: "+promedioPositivos);
	document.write (" la diferencia entre positivos y negativos es: "+difPosNeg);





}//FIN DE LA FUNCIÓN