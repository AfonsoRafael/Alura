// ===============================
// 1. Lista de nomes
// ===============================
let nomes = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}


// ===============================
// 2. Adicionar e remover itens
// ===============================
let frutas = ["Maçã", "Banana", "Uva"];

console.log("Antes:", frutas);

// adiciona no final
frutas.push("Laranja");

// remove o primeiro
frutas.shift();

console.log("Depois:", frutas);


// ===============================
// 3. Contar itens do array
// ===============================
let cidades = ["Brasília", "São Paulo", "Rio", "Salvador"];

console.log(`Total de cidades: ${cidades.length}`);


// ===============================
// 4. Somar todos os números
// ===============================
let numeros = [1,2,3,4,5,6,7,8,9,10];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log(`Soma total: ${soma}`);


// ===============================
// 5. Média de notas
// ===============================
let notas = [7, 8, 6, 9];
let somaNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
}

let media = somaNotas / notas.length;

if (media >= 7) {
    console.log(`Média: ${media} - Aprovado`);
} else {
    console.log(`Média: ${media} - Reprovado`);
}


// ===============================
// 6. Mensagens com forEach
// ===============================
let usuarios = ["João", "Maria", "Pedro"];

usuarios.forEach(function(nome) {
    console.log(`Olá, ${nome}!`);
});


// ===============================
// 7. Descontos com map
// ===============================
let precos = [100, 200, 300];

let precosComDesconto = precos.map(function(preco) {
    return preco * 0.9; // 10% de desconto
});

console.log("Preços com desconto:", precosComDesconto);


// ===============================
// 8. Filtrar valores altos
// ===============================
let idades = [12, 18, 25, 15, 30];

let maiores = idades.filter(function(idade) {
    return idade >= 18;
});

console.log("Maiores de idade:", maiores);


// ===============================
// 9. Carrinho de compras
// ===============================
let carrinho = [50, 30, 20];
let total = 0;

// usando for...of
for (let valor of carrinho) {
    total += valor;
}

// aplica desconto de 20%
let totalFinal = total * 0.8;

console.log(`Total: R$ ${total}`);
console.log(`Total com desconto: R$ ${totalFinal}`);


// ===============================
// 10. Lista de tarefas
// ===============================
let tarefas = ["Estudar", "Treinar", "Ler", "Dormir"];
let concluido = [true, false, false, true];

// filtrar tarefas pendentes
let tarefasPendentes = tarefas.filter(function(tarefa, index) {
    return concluido[index] === false;
});

console.log("Tarefas pendentes:", tarefasPendentes);