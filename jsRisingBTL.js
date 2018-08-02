/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide 
realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar 
hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	var edad= prompt ("Ingrese una edad");
	edad= parseInt (edad);
		while (isNaN(edad)|| edad<18 ||edad >91)
		{
			edad= prompt ("Ingrese una edad");
		}
 	var sexo=prompt ("Ingrese 'F' para femenino y 'M' para masculino");
 		while (sexo!="F" && sexo!="M")
 		{
 			sexo=prompt ("Ingrese 'F' para femenino y 'M' para masculino");
 		}
 	var estadoCivil=  prompt("Ingrese 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
 		estadoCivil= parseInt(estadoCivil);
 		while (estadoCivil>4 || estadoCivil<0)
 		{
 			estadoCivil=  prompt("Ingrese 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
 		}
 	var sueldoBruto=prompt ("Ingrese su sueldo bruto, no menor a $8.000");
 		sueldoBruto=parseInt (sueldoBruto);
 		while (sueldoBruto<7999)	
 		{
 			sueldoBruto=prompt ("Ingrese su sueldo bruto, no menor a $8.000");
 		}
 	var numeroLegajo= prompt ("Ingrese n° de legajo de 4 cifras, sin ceros a la izquierda");
 		numeroLegajo= parseInt (numeroLegajo);
 		while (numeroLegajo<999 || numeroLegajo>9999)
 		{
 			numeroLegajo= prompt ("Ingrese n° de legajo de 4 cifras, sin ceros a la izquierda");
 		}
 	var nacionalidad= prompt ("Ingrese “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
 		while (nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N")
 		{
 			nacionalidad= prompt ("Ingrese “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
 		}

 		if (sexo=="F") 
 		{
 			sexo="femenino";
 		}
 		else
 		{
 			sexo="masculino";
 		}
 		if (estadoCivil=="1") 
 		{
 			estadoCivil="soltero/a";
 		}
 		if (estadoCivil="2") 
 		{
 			estadoCivil="casado/a";
 		}
 		if (estadoCivil="3") 
 		{
 			estadoCivil="divorciado/a";
 		}
 		else
 		{
 			estadoCivil="vuido/a";
 		}
 		
 									
 		if (nacionalidad=="A") 
 		{
 			nacionalidad="argentino/a";
 		}
 		if (nacionalidad=="E") 
 		{
 			nacionalidad="extranjero/a";
 		}

		if (nacionalidad=="N") 
 		{
 			nacionalidad="nacionalizado/a";
 		}


 		alert ("Edad  "+edad+ ". Sexo "+sexo+ ". Estado civil "+estadoCivil+ " .Nacionalidad "+nacionalidad);

}
