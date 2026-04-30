// ===============================
// 1. Boas-vindas personalizadas
// ===============================
let nome = "Afonso Rafael";

console.log(`Olá, ${nome}! Seja bem-vindo(a) ao curso de JavaScript!`);


// ===============================
// 2. Cálculo de idade
// ===============================
let anoAtual = 2026;
let anoNascimento = 2000;

let idade = anoAtual - anoNascimento;

console.log(`Você tem ${idade} anos.`);


// ===============================
// 3. Mensagem de localização
// ===============================
let cidade = "Brasília";
let estado = "DF";
let pais = "Brasil";

console.log(`Você está em ${cidade} - ${estado}, ${pais}.`);


// ===============================
// 4. Tipo da variável
// ===============================
let temCarteira = true;

console.log(typeof temCarteira); // boolean


// ===============================
// 5. Simulação bancária simples
// ===============================
let saldo = 0;

// depósito
saldo += 200;

// saque
saldo -= 50;

console.log(`Seu saldo final é de R$ ${saldo}.`);


// ===============================
// 6. Média de notas
// ===============================
let matematica = 8;
let portugues = 7;
let ciencias = 9;

let media = (matematica + portugues + ciencias) / 3;

console.log(`Sua média final é ${media.toFixed(2)}.`);


// ===============================
// 7. Reajuste de salário
// ===============================
let salario = 3000;

let aumento = salario * 0.10;
let novoSalario = salario + aumento;

console.log(`Seu novo salário é R$ ${novoSalario}, após um aumento de 10%.`);


// ===============================
// 8. Contador de cliques
// ===============================
let cliques = 0;

// simulação de 3 cliques
cliques++;
cliques++;
cliques++;

console.log(`Total de cliques: ${cliques}`);


// ===============================
// 9. Constantes não podem ser alteradas
// ===============================
const PI = 3.14;

// PI = 3.1415; ❌ Isso gera erro!

console.log(PI);

/*
Explicação:
Constantes (const) não podem ser reatribuídas.
Ou seja, depois de definir o valor, você não pode mudar.
Isso garante segurança e evita alterações acidentais.
*/


// ===============================
// 10. Concatenando tipos diferentes
// ===============================
let mensagem = "O número é: ";
let numero = 10;

let resultado = mensagem + numero;

console.log(resultado);
console.log(typeof resultado); // string