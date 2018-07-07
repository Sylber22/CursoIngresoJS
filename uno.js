
function mostrar()
{
	var lado;
	var superficie;
	var perimetro;

	lado= prompt ("Ingresar lado de un triangulo equilatero");
	lado= parseInt (lado);

	perimetro= lado*3;
	/*La superficie del triángulo se puede averiguar 
	multiplicando la base por una vez y media la altura.*/
	superficie= lado/2*lado;

	alert ("Superficie es de: "+superficie+ " Perimetro de: "+perimetro)






}
