/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var alambre;

	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;

	
 	alambre=largo*ancho*3;

 	alert ("se necesitará"+alambre+" mtrs de alambre");

}
function Circulo () 
{
	var ingresarRadio;
	var resultado;
	

	ingresarRadio=document.getElementById('Radio').value;
	
	resultado=ingresarRadio/2*3.14*3;

	alert ("se necesitará "+resultado+" mtrs de alambre")
}
function Materiales () 
{
	var largo;
	var ancho;
	var cal;
	var cemento;
	var contrapiso;

	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;

	contrapiso=largo*ancho;
	cal=contrapiso*3;
	cemento=contrapiso*2;
	alert ("se necesitarán "+cemento+ " bolsas de cemento y "+cal+ " de cal");
}