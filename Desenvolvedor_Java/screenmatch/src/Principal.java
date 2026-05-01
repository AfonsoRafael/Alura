public class Principal {
    public static void main() {
        Filme meuFilme = new Filme();
        meuFilme.nome = "Homem Aranha";
        meuFilme.dataDeLancamento = 2002;
        meuFilme.duracaoEmMinutos = 159;
        meuFilme.totalDeAvaliacoes = 0;
        meuFilme.incluidoNoPllano = true;

        meuFilme.exibeFichaTecnica();
        meuFilme.avalia(8);
        meuFilme.avalia(9);
        meuFilme.avalia(10);
        meuFilme.avalia(7);
        meuFilme.avalia(8);
        System.out.println(meuFilme.somaDasAvaliacoes);
        System.out.println(meuFilme.totalDeAvaliacoes);
        System.out.println(meuFilme.pegaMedia());

    }
}