// ===============================
// 1. Contador de 1 a 10
// ===============================
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// ===============================
// 2. Soma de 1 a 100
// ===============================
let soma = 0;

for (let i = 1; i <= 100; i++) {
    soma += i;
}

console.log(`A soma de 1 a 100 é ${soma}.`);


// ===============================
// 3. Tabuada personalizada
// ===============================
let numero = 5; // simulação (pode trocar)

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}


// ===============================
// 4. Contagem regressiva (while)
// ===============================
let contador = 10;

while (contador >= 0) {
    console.log(contador);
    contador--;
}

console.log("Contagem finalizada!");


// ===============================
// 5. Receber números até digitar 0
// ===============================
let numeroDigitado;
let quantidade = 0;

// simulação de valores
let valores = [5, 8, 3, 0];
let index = 0;

do {
    numeroDigitado = valores[index];
    index++;

    if (numeroDigitado !== 0) {
        quantidade++;
    }

} while (numeroDigitado !== 0);

console.log(`Foram digitados ${quantidade} números diferentes de zero.`);


// ===============================
// 6. Jogo do número secreto
// ===============================
let numeroSecreto = 7;

// simulação de tentativas
let tentativas = [3, 7, 9];

for (let i = 0; i < 3; i++) {
    if (tentativas[i] === numeroSecreto) {
        console.log("Acertou!");
    } else {
        console.log("Tente novamente");
    }
}


// ===============================
// 7. Idade ao longo dos anos
// ===============================
let anoNascimento = 2000;
let anoAtual = 2026;

for (let ano = anoNascimento; ano <= anoAtual; ano++) {
    let idade = ano - anoNascimento;
    console.log(`Ano: ${ano} | Idade: ${idade}`);
}


// ===============================
// 8. Listando números pares
// ===============================
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// ===============================
// 9. Contar múltiplos de 3
// ===============================
let contadorMultiplos = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        contadorMultiplos++;
    }
}

console.log(`Existem ${contadorMultiplos} múltiplos de 3 entre 1 e 100.`);


// ===============================
// 10. Menu com repetição
// ===============================
let opcao;
let opcoesSimuladas = [1, 2, 1, 3]; // simulação
let i = 0;

do {
    opcao = opcoesSimuladas[i];
    i++;

    console.log("1 - Ver saldo");
    console.log("2 - Fazer depósito");
    console.log("3 - Sair");

    if (opcao === 1) {
        console.log("Saldo: R$ 1000");
    } else if (opcao === 2) {
        console.log("Depósito realizado!");
    } else if (opcao === 3) {
        console.log("Saindo...");
    }

} while (opcao !== 3);