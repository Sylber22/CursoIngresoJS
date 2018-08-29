#include <stdio.h>
#include <stdlib.h>

int suma (int,int);//prototipo declaracion
int main()
{
   int nro1,nro2,result;
   printf("Ingrese un numero");
   scanf ("%d",&nro1);
   printf("Ingrese otro numero");
   scanf("%d", &nro2);
   result=suma(nro1, nro2);//llamada
   system ("cls");//limpia pantalla
   printf("resultado:%d",result);

    return 0;
}
    int suma (int op1, int op2){
    int resultado;
    resultado=op1+op2;
    return resultado;

}
