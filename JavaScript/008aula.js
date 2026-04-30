// ===============================
// 1. Criando um objeto pessoal
// ===============================
let pessoa = {
    nome: "Afonso Rafael",
    idade: 25,
    profissao: "Desenvolvedor"
};


// ===============================
// 2. Acessando propriedades
// ===============================
console.log(pessoa.nome);


// ===============================
// 3. Atualizando valores
// ===============================
pessoa.idade = 26;

console.log("Nova idade:", pessoa.idade);


// ===============================
// 4. Adicionando nova propriedade
// ===============================
pessoa.cidade = "Brasília";

console.log(pessoa);


// ===============================
// 5. Função com objeto
// ===============================
function apresentar(pessoa) {
    return "Nome: " + pessoa.nome +
           ", Idade: " + pessoa.idade +
           ", Profissão: " + pessoa.profissao;
}

console.log(apresentar(pessoa));


// ===============================
// 6. Lista de pessoas
// ===============================
let pessoas = [
    { nome: "Ana", idade: 17 },
    { nome: "Bruno", idade: 22 },
    { nome: "Carlos", idade: 30 }
];


// ===============================
// 7. Filtrando maiores de idade
// ===============================
for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].idade >= 18) {
        console.log(pessoas[i].nome);
    }
}


// ===============================
// 8. Objeto com método
// ===============================
let usuario = {
    nome: "Afonso",
    saudacao: function() {
        console.log(`Olá, eu sou ${this.nome}!`);
    }
};

usuario.saudacao();


// ===============================
// 9. Listando propriedades (for...in)
// ===============================
for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}


// ===============================
// 10. Cálculo de compra
// ===============================
let produto = {
    preco: 50,
    quantidade: 3
};

let total = produto.preco * produto.quantidade;

console.log(`Total da compra: R$ ${total}`);