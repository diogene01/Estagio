// Questão 1

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

/*----------------------------------------------------------------*/

// Questão 2

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

/*----------------------------------------------------------------*/

/*

Questão 3

 Ao final do processamento, o valor da variável SOMA será 77.


Questão 4


a) 1, 3, 5, 7, ___

Lógica: A sequência é composta por números ímpares consecutivos.
Próximo número: 9

______________________________________________________________

b) 2, 4, 8, 16, 32, 64, ____

Lógica: Cada número é o dobro do anterior.
Próximo número: 128

______________________________________________________________

c) 0, 1, 4, 9, 16, 25, 36, ____

Lógica: A sequência representa os quadrados perfeitos (n²): 0², 1², 2², 3², 4², 5², 6², ...
Próximo número: 49 (7²)

______________________________________________________________

d) 4, 16, 36, 64, ____

Lógica: A sequência representa os quadrados dos números pares: 2², 4², 6², 8², ...
Próximo número: 100 (10²)

______________________________________________________________

e) 1, 1, 2, 3, 5, 8, ____

Lógica: Esta é a sequência de Fibonacci, onde cada número é a soma dos dois anteriores.
Próximo número: 13



f) 2, 10, 12, 16, 17, 18, 19, ____

Lógica: Após o número 2, temos números consecutivos que contêm o dígito "1".
Próximo número: 20



Questão 5

Primeira etapa: Ligue o primeiro interruptor (Interruptor 1) e o deixe ligado por alguns minutos (tempo suficiente para aquecer a lâmpada). Após esse tempo, desligue o Interruptor 1 e ligue o segundo interruptor (Interruptor 2). Deixe o terceiro interruptor (Interruptor 3) desligado.

Segunda etapa: Vá até a sala das lâmpadas.

A lâmpada que está acesa é controlada pelo Interruptor 2, que ficou ligado.
A lâmpada que está apagada, mas quente, é controlada pelo Interruptor 1, pois ficou ligada por um tempo antes de ser desligada.
A lâmpada que está apagada e fria é controlada pelo Interruptor 3, que nunca foi ligado.
Com esse método, você consegue identificar qual interruptor controla cada lâmpada com apenas duas idas à sala das lâmpadas.

*/