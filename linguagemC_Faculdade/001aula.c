#include <stdio.h>

int main(){
    printf("Ola mundo\n");

    int num1,num2,mult;
    printf("Digite o primeiro numero: \n");
    scanf("%d",&num1);
    printf("Digite o segundo numero: \n");
    scanf("%d", &num2);
    mult = num1*num2;

    printf("Os numeros digitados foram: %d e %d e sua multiplicacao e %d\n\n\n tudo certo",num1,num2,mult);
    return 0;
}