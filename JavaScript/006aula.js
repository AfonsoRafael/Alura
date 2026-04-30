// ===============================
// 1. Função de saudação
// ===============================
function saudacao() {
    console.log("Olá! Seja bem-vindo(a)!");
}

saudacao();


// ===============================
// 2. Função com parâmetros
// ===============================
function apresentarPessoa(nome, idade) {
    console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`);
}

apresentarPessoa("Afonso", 25);


// ===============================
// 3. Cálculo de IMC
// ===============================
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

let imc = calcularIMC(70, 1.75);

console.log(`Seu IMC é ${imc.toFixed(2)}`);


// ===============================
// 4. Verificar aprovação
// ===============================
function verificarAprovacao(nota) {
    if (nota >= 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

console.log(verificarAprovacao(8));


// ===============================
// 5. Número par ou ímpar
// ===============================
function ehPar(numero) {
    return numero % 2 === 0;
}

console.log(ehPar(4)); // true
console.log(ehPar(7)); // false


// ===============================
// 6. Função soma
// ===============================
function somar(a, b) {
    return a + b;
}

let resultadoSoma = somar(5, 10);

console.log(`A soma é ${resultadoSoma}.`);


// ===============================
// 7. Função calcular troco
// ===============================
function calcularTroco(valorCompra, valorPago) {
    return valorPago - valorCompra;
}

let troco = calcularTroco(35.90, 50);

console.log(`O troco é R$ ${troco.toFixed(2)}.`);


// ===============================
// 8. Arrow function (versão reduzida)
// ===============================
const somaArrow = (a, b) => a + b;

console.log(`Soma com arrow function: ${somaArrow(3, 7)}`);


// ===============================
// 9. Callback simples
// ===============================
function executarAcao(acao) {
    acao(); // executa a função recebida
}

// função passada como parâmetro
executarAcao(function() {
    console.log("Executando ação!");
});


// ===============================
// 10. Desafio do quiz
// ===============================
function fazerPergunta(pergunta, respostaCorreta) {
    let respostaUsuario = "A"; // simulação

    console.log(pergunta);

    if (respostaUsuario === respostaCorreta) {
        console.log("Resposta correta!");
    } else {
        console.log("Resposta errada!");
    }
}

fazerPergunta("Qual a letra correta? (A/B/C)", "A");