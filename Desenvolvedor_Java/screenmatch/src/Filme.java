public class Filme{
    String nome;
    int dataDeLancamento;
    boolean incluidoNoPllano;
    double somaDasAvaliacoes;
    int totalDeAvaliacoes=0;
    int duracaoEmMinutos;

    void exibeFichaTecnica(){
        System.out.println(nome);
        System.out.println(dataDeLancamento);
    }
    void avalia(double nota){
        somaDasAvaliacoes += nota;
        totalDeAvaliacoes++;
    }
    double pegaMedia(){
        return somaDasAvaliacoes/totalDeAvaliacoes;
    }
}