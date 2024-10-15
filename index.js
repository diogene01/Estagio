function isFibonacci(num) {
    let a = 0, b = 1, next = 0;

    // Gera a sequência até ultrapassar ou encontrar o número informado
    while (next < num) {
        next = a + b;
        a = b;
        b = next;
    }

    // Verifica se o número é igual a algum termo da sequência
    if (num === 0 || num === 1 || next === num) {
        console.log(`${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${num} não pertence à sequência de Fibonacci.`);
    }
}

// Exemplo de uso
let number = 21; // Pode ser alterado para entrada do usuário
isFibonacci(number);


//
function countLetterA(str) {
    let count = 0;

    // Loop para contar as ocorrências de 'a' e 'A'
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'A') {
            count++;
        }
    }

    if (count > 0) {
        console.log(`A letra 'a' aparece ${count} vezes na string.`);
    } else {
        console.log("A letra 'a' não aparece na string.");
    }
}

// Exemplo de uso
let text = "Aprendizado de Análise de Sistemas"; // Pode ser alterado para entrada do usuário
countLetterA(text);