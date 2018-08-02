function mostrar()
{	
	var numero;
	numero=prompt ("Ingrese numero");
	numero= parseInt (numero);
	var contador;
	var pares=0;

	for (contador=1;contador<=numero;contador++ )
	{
		if (contador%2==0) 
		{
			console.log (contador);
			pares++;
		}
		
	}

	console.log ("La cantidad de numeros pares es de "+pares);

}//FIN DE LA FUNCIÓN