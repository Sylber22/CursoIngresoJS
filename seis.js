function mostrar()
{
	var nota=document.getElementById('laHora').value;
	switch (nota)
	{
		case "0":
		case "1":
		case "2":
		case "3":
		alert (nota +" La próxima se puede");
		break;
		case "4":
		case "5":
		case "6":
		if (nota<5) 
		{
			alert (nota +" Raspando, debes preocuparte mas");
		}
		else
		{
			alert (nota +" Raspando");	
		}	
		break;
		case "7":
		case "8":
		case "9":
		case "10":
		if (nota>8) 
		{
			alert (nota +" Muy bien, aprobó");
		}
		else
		{
			alert (nota +" Aprobó");
		}
		
		break;
		default:
		alert ("Nota no valida");
	}

			
		 		
		 	
		
	
	









	
}
