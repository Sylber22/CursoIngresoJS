function mostrar()
{	
	var numero;
	numero=prompt ("Ingrese numero");
	numero= parseInt (numero);
	var contador;
	var primos;
	var divisores=0;
	
	for (contador=1;contador<=numero;contador++ )
	{
		if (numero%contador==0) 
		{
			divisores++;
		}
		
	}

	if (divisores<3) 
		{
			alert ("Numero primo");
		}
	else 
	{
		alert ("NO es numero primo");
	}
	
}//FIN DE LA FUNCIÓN