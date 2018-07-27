/*


*/

function mostrar()
{
	var nombre;
	var sexo;
	var nota;
	var datos=0;
	var contador=0;
	var resultado;

	while (datos<5)
	{
	
	nombre= prompt ("ingrese nombre");
	sexo = prompt ("ingrese su sexo f para femenino y o m para masculino");
		while (sexo!="f" && sexo != "m") 
		{
			if (sexo=="m" && nota>6) 
			{
				NotaVarones++;
			}
		}
			
	nota = prompt ("Ingrese su nota");
	nota =parseInt (nota);
	
		while (nota<0 && nota >10) 
		{
			if (nota>0 && nota<10) 
				{
					nota++;
				} 
		}


		
	}


promedio=nota/5;


alert ("El promedio de las notas totales es: "+promedio);
alert ("Nota varones: "+NotaVarones);

}
