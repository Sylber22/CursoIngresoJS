/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	

	var nombre;
	var edad;	
	/*primero le doy los valores, despues programo*/
	nombre=document.getElementById('elNombre').value;
	edad=document.getElementById('laEdad').value;
	alert("Usted se llama: "+nombre+ " y tiene: "+edad+ " años");
	/*
}

