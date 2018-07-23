/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantLamp=document.getElementById('Cantidad').value;
 	var precioDescuento;
 	var marca=document.getElementById('Marca').value;
 	var ingresosBrutos;
 	var precio=cantLamp*35;

 	if (cantLamp>5)
 	 {
 	 	precioDescuento=precio-(precio*50/100);
 	 }
 	else 
 	{
 		if (cantLamp==5) 
 		{ switch (marca)

 			{	case "ArgentinaLuz":
 					precioDescuento= precio-(precio*40/100);
 					document.getElementById('precioDescuento').value=precioDescuento;

 				break;
 				default:
				precioDescuento=precio-(precio*30/100);
 			}
		}
 		if (cantLamp==4) 
 			{switch (marca)
 				{
 				case "ArgentinaLuz":
 				case "FelipeLamparas":
 				precioDescuento=precio-(precio*25/100);
 			 	break;
 			 	default:		
 					precioDescuento=precio-(precio*20/100);
 				}
 			}	
 		if (cantLamp==3) 
 		{
 			switch (marca)
 			{
 			case "ArgentinaLuz":
 				precioDescuento=precio-(precio*15/100);
 			break;
 			case "FelipeLamparas":
 				precioDescuento=precio-(precio*10/100);
 			break;
 			default:
 				precioDescuento=precio-(precio*5/100);
 			}
 		}	
 			else
 			{
 				precioDescuento=precio;
 			}
 		
 	}


 	if (precioDescuento>120) 
 	{
 		ingresosBrutos=precioDescuento*10/100;
 		precioDescuento=precioDescuento+ingresosBrutos;
 		alert (ingresosBrutos+" paga de IIBB");
 	}
document.getElementById('precioDescuento').value=precioDescuento;
}