function mostrar()
{
	var nombre;
	var peso;
	var temperatura;
	var contadorDeTemperaturaPares=0;
	var respuesta="si";
	var masPesado;
	var masPesadoNombre;
	var masPesadoTemperatura;
	var contadorDeAnimalesCeroGrados;
	var sumaDePesos=0;
	var pesoMinimoBajoCero;
	var pesoMaximoBajoCero;
	var banderaDelPrimerBajoCero=0;



	while (respuesta!="n")
	{

		contador++;
		nombre=prompt ("Ingrese nombre");

		peso=prompt ("Ingrese un peso");
		peso = parseInt (peso);
		while (isNaN(peso)|| peso<0||peso>1000)
		{
			peso= prompt ("Ingrese un peso");
			peso = parseInt (peso);
		}
		temperatura=prompt ("Ingrese un temperatura");
		temperatura = parseInt (temperatura);
		while (isNaN(temperatura)|| temperatura<-30||temperatura>30)
		{
			temperatura= prompt ("Ingrese un temperatura");
			temperatura = parseInt (temperatura);
		}
		suma
		if (temperatura%2==0) 
		{
			contadorDeTemperaturaPares++;
		}
		if (contador==1) 
		{
			masPesado=peso;
			masPesadoTemperatura=temperatura;
			masPesadoNombre=nombre;
		}
		else //A
		{
			if (peso>masPesado) 
			{
				masPesado=peso;
				masPesadoTemperatura=temperatura;
				masPesadoNombre=nombre;
			}
		}
		if (temperatura<0) 
		{
			contadorDeAnimalesCeroGrados++;
			if (banderaDelPrimerBajoCero==0)
			{
				banderaDelPrimerBajoCero==5;
				pesoMinimoBajoCero=peso;
				pesoMaximoBajoCero=peso;
			}
			else
			{
				if (peso<pesoMinimoBajoCero) 
				{
					pesoMinimoBajoCero=peso;
				}
				if (peso>pesoMaximoBajoCero) 
				{
					pesoMaximoBajoCero=peso;
				}
			}



		}





}
promedioDePesos=sumaDePesos/contador;

}




