#include <stdio.h>

int main(){
    int numero_secreto = 42,chute,tentativa=1;
    while (1)
    {
        printf("Tentativa %d\n ",tentativa);
        printf("Qual o seu chute? \n");
        scanf("%d",&chute);
        printf("Seu chute foi %d\n",chute);
        if(chute<0){
            printf("Voce nao pode chutar numeros negativos");
            continue;
        }
        int acertou = chute == numero_secreto; 
        int maior = chute > numero_secreto;
        if (acertou)
        {
            printf("Parabens voce acertou");
            break;
        }else if (maior)
        {
            printf("Seu chute foi maior que o numero secreto");
        }else{
            printf("Seu numero foi menor que o numero secreto");
        }
        
        tentativa++;
    }
    printf("Fim de jogo");
}