/* 
Exercício:

1. Imprimir usando o console.log() todos os números de 1 a 100 com duas exceções. 
Exceção 1: Números divisíveis por 3, imprima FIZZ ao invés do número, 
Exeção 2: Números divisíveis por 5 (e não 3), imprima BUZZ.

2. Quando o programa estiver funcionando, modifique-o para imprimir FIZZBUZZ para números que são divisíveis
ambos por 3 e 5 (e continue imprimindo Fizz e Buzz para números divisíveis por apenas um deles).

Dicas:
Interar sobre os números é trabalho de um loop, e selecionar o que imprimir é uma questão de execução condicional. 
Lembre-se do truque de usar o operador restante (%) para verificar se um número é divisível por outro número 
(terá zero de resto).

Na etapa 1, existem três resultados possíveis para cada número, então você irá criar uma cadeia de if/else if/else.

Na etapa 2, o programa tem uma solução simples e uma inteligente. 
A maneira mais simples é adicionar um outro "ramo" para um teste preciso da condição dada. 
Para o método inteligente é construir uma sequência de caracteres contendo palavra ou palavras para a saída, 
que imprima a palavra ou o número, caso não haja palavra, fazendo o uso do operador elegante ||.
 */


// Etapoa 01:

let numero = 1;

for (numero; numero <= 100; numero++) {
  if (numero % 3 === 0 && numero % 5 === 0) {
    console.log('FizzBuzz');
  } else if (numero % 3 === 0) {
    console.log('Fizz');
  } else if (numero % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(numero);
  }
}
console.log(numero);


