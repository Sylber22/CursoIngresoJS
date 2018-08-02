function mostrar()
{
 	
 	var nota;
 	var sexo;
 	var edad;
 	var contador=0;
 	var acumulador=0;
 	var notaMasBaja;
 	var notaMasBajaSexo;
 	var cantVarones=0;
 	var masJoven;
 	var notaMasJoven;
	var masJovenSexo;
 	var primerMujer=0;
 	var notaPrimerMujer;
 	var edadPrimerMujer;
 	var flag=0;

	

 	
 	while (contador <5)
	{
		contador ++;
		nota=prompt ("Ingrese nota");
		nota=parseInt (nota);
	
		while (isNaN(nota)|| nota <0 || nota >10)
		{
			nota=prompt ("Ingrese nota");
			nota=parseInt (nota);
		}
			acumulador=acumulador+nota;

		sexo= prompt ("Ingrese ´f´ para femenino y ´m´ para masculino");
		while (sexo!= "f" && sexo!="m")
		{
			sexo=prompt ("Ingrese ´f´ para femenino y ´m´ para masculino");
		}

		edad=prompt ("ingresar edad");
		edad= parseInt (edad);
		while (isNaN(edad)||edad<0 || edad>100 )
		{
			edad=prompt ("ingresar edad");
			edad= parseInt (edad);
		}
	
		if (contador==1) 
			{
				notaMasBaja=nota;
				notaMasBajaSexo=sexo;
				masJoven=edad;
				masJovenSexo=sexo;
				primerMujer=flag;
				notaPrimerMujer=nota;
			}
		else
			{
				if (nota<notaMasBaja) 
				{
					notaMasBaja=nota;
					notaMasBajaSexo=sexo;
				}

				if (sexo == "m" && edad >18 && nota>5)
				{
					cantVarones ++;
				}
				if (edad<masJoven)
				{
					notaMasJoven=nota;
					masJovenSexo=sexo;
				}
				if ( flag=0 && sexo=="f") 
				{
					flag=1;
					notaPrimerMujer=nota;
					edadPrimerMujer=edad;
				}
			}
	}
	promedio= acumulador/5;
	
	alert ("El promedio de las notas totales es "+promedio+" .La nota más baja es "+notaMasBaja+" y el sexo de esa persona es "+notaMasBajaSexo+ " .La cantidad de varones mayores a 18, que su nota haya sido mayor o igual a 6 es "+cantVarones+
		" El sexo y la nota del más joven es "+masJovenSexo+" y "+notaMasJoven+" La edad "+edadPrimerMujer+" y la nota de la primera mujer ingresada "+notaPrimerMujer);



}
