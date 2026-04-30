// ===============================
// 1. Verificação de maioridade
// ===============================
let idade = 20;

console.log(idade >= 18); // true ou false


// ===============================
// 2. Situação do aluno
// ===============================
let nota1 = 7;
let nota2 = 8;

let media = (nota1 + nota2) / 2;

console.log(media >= 7); // true ou false


// ===============================
// 3. Simulação de troco
// ===============================
let valorCompra = 35.90;
let valorPago = 50;

let troco = valorPago - valorCompra;

console.log(`Troco: R$ ${troco.toFixed(2)}`);


// ===============================
// 4. Validação de senha
// ===============================
let senha1 = "123456";
let senha2 = "123456";

console.log(senha1 === senha2); // true ou false


// ===============================
// 5. Controle de faltas
// ===============================
let totalAulas = 100;
let faltas = 30;

let limiteFaltas = totalAulas * 0.25;

console.log(faltas > limiteFaltas); // true ou false


// ===============================
// 6. Verificação de login
// ===============================
let temLogin = true;
let temSenha = true;

console.log(temLogin && temSenha); // true se ambos forem true


// ===============================
// 7. Valor negado
// ===============================
let disponivel = true;

console.log(!disponivel); // inverte o valor


// ===============================
// 8. Condições compostas
// ===============================
let num1 = 4;
let num2 = 4;

// ambos pares
let ambosPares = (num1 % 2 === 0) && (num2 % 2 === 0);

// ambos iguais
let ambosIguais = num1 === num2;

console.log(ambosPares);
console.log(ambosIguais);


// ===============================
// 9. Calculadora de porcentagem
// ===============================
let resultado = 120 * 0.15;

console.log(`15% de 120 é igual a ${resultado}.`);


// ===============================
// 10. Ordem de operações
// ===============================
let operacao = 2 + 3 * 5;

console.log(operacao);

/*
Explicação:
A multiplicação (*) tem prioridade sobre a soma (+).
Então:
3 * 5 = 15
2 + 15 = 17
*/