/*


*/

function mostrar()
{

	var sexo;
	var nota;
	var contador=0;
	var promedio;
	var sexoNotaBaja;
	var varones;


	while (contador<5)
	{
		nota = prompt ("Ingrese su nota");
		nota =parseInt (nota);

		nota++;	
			while (isNan(nota)||nota <0 || nota >10) 
			{
				nota = prompt ("Ingrese su nota");
			}

	
		sexo = prompt ("ingrese su sexo f para femenino y o m para masculino");
			while (sexo!="f" && sexo != "m") 
			{
				sexo = prompt ("ingrese su sexo f para femenino y o m para masculino");
			}
			if (contador=1) 
			{
				notaMasBaja=nota;
				sexoNotaBaja=sexo:

				if (nota>notaMasBaja) 
				{
					sexonotaMasBaja=nota;
				}	
			}

		
	}
	promedio=nota/5;

	alert (" El promedio de las notas totales es "+promedio+
		" La nota más baja y el sexo de esa persona."+notaMasBaja+ 
 		"La cantidad de varones que su nota haya sido mayor o igual a 6.");
}





}
