function mostrar()
{
//tomo la edad  


	var edad;
	edad=document.getElementById('edad').value;
/*
	if (edad<18)
	{
	
		if (edad>12)
		{
			alert (" Adolescente");
		}	
			
	}
	*/

if (edad<18 && edad>12)/* && significa un if dentro de otro if*/

	{
		alert (" Adolescente");
	}	




}