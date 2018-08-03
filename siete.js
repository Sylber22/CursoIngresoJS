/*


*/

function mostrar()
{

	var sexo;
	var nota;
	var promedio;
	var sexoNotaMasBaja;
	var notaMasBaja;
	var varones=0;
	var acumulador=0;
	var contador=0;
	var acumuladorDeNotas=0;


	while (contador<2)
	{
		contador++;
		nota = prompt ("Ingrese su nota");
		nota = parseInt (nota);
				
			while (isNaN(nota)|| nota <0 || nota >10) 
			{
				nota = prompt ("Ingrese su nota");
				nota = parseInt (nota);
			}

		acumulador=acumulador+nota;
		acumuladorDeNotas++;	

		sexo = prompt ("ingrese su sexo f para femenino y o m para masculino");
			while (sexo!="f" && sexo != "m") 
			{
				sexo = prompt ("ingrese su sexo f para femenino y o m para masculino");
			}


			if (contador==1) 
			{
				notaMasBaja=nota;
				sexoNotaMasBaja=sexo;
		
			}
			else
			{

				if (nota<notaMasBaja) 
				{
					notaMasBaja=nota;
					sexoNotaMasBaja=sexo;
				}	
				
			}

			if (sexo=="m"&& nota>5 )
				{
					varones++;
				}
	}
			
	promedio=acumuladorDeNotas/5;

	alert (" El promedio de las notas totales es "+promedio+" La nota más baja y el sexo de esa persona."+notaMasBaja+" y "+sexoNotaMasBaja+" La cantidad de varones que su nota haya sido mayor o igual a 6 es "+varones);
}






