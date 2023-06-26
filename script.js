/*
  Nesse desafio, você irá solicitar ao usuário que ele insira dois números e, a partir daí, calcular:

  - [ ]  A soma dos dois números;
  - [ ]  A subtração dos dois números;
  - [ ]  A multiplicação dos dois números;
  - [ ]  A divisão dos dois números;
  - [ ]  O resto da divisão dos dois números;

  Depois:
    - [ ]  Verifique se a soma dos dois números é par ou ímpar;
    - [ ]  Verifique se os dois números inseridos são iguais ou diferentes.

  
  Mostrar na tela o resultado de cada uma dessas operações!
*/

// alert("Insirar na tela dois número para realizar as operações!")

// 1° passo - Pedir o usuário para inserir dois números;subtração
let userNumberOne = Number(prompt("Digite o primeiro número"));
let userNumberTwo = Number(prompt("Digite o segundo número:"));

// 2° passo - Fazer as operações matemáticas;
function sumNumbers (userNumberOne, userNumberTwo) {
  let sum = userNumberOne + userNumberTwo;
  return sum;
}

function subtractionNumbers(userNumberOne, userNumberTwo) {
  let subtraction = userNumberOne - userNumberTwo;
  return subtraction;
}

function multiplicationNumbers(userNumberOne, userNumberTwo) {
  let multiplication = userNumberOne * userNumberTwo;
  return multiplication;
}

function divisionNumbers(userNumberOne, userNumberTwo) {
  let division = (userNumberOne / userNumberTwo).toFixed(2);
  return division;
}

// 3° passo - Verificar se o resultado da soma é par ou impar;
function evenOrOdd (sum) {
  if (sum % 2 === 0) {
    alert(`
      O resultado da soma de ${userNumberOne} + ${userNumberTwo} é igual a ${sumNumbers(userNumberOne, userNumberTwo)} que é Par;
    `);
  } else {
    alert(`
      O resultado da soma de ${userNumberOne} + ${userNumberTwo} é igual a ${sumNumbers(userNumberOne, userNumberTwo)} que é Impar;
    `);
  }
}

// 4° passo - Verificar se os dois valores inseridos são iguais ou diferentes;
function sameOrDifferent (number1, number2) {
  let result;
  if (number1 === number2) {
    result = "iguais";
  } else {
    result = "diferentes";
  }

  return result;
}

alert(`O resultado da soma de ${userNumberOne} + ${userNumberTwo} é igual a ${sumNumbers(userNumberOne, userNumberTwo)}`);

alert(`O resultado da subtração de ${userNumberOne} - ${userNumberTwo} é igual a ${subtractionNumbers(userNumberOne, userNumberTwo)}`);

alert(`O resultado da multiplicação de ${userNumberOne} * ${userNumberTwo} é igual a ${multiplicationNumbers(userNumberOne, userNumberTwo)}`);

alert(`O resultado da divisão de ${userNumberOne} / ${userNumberTwo} é igual a ${divisionNumbers(userNumberOne, userNumberTwo)}`);

evenOrOdd(sumNumbers(userNumberOne, userNumberTwo));

alert(`Os números ${userNumberOne} e ${userNumberTwo} são ${sameOrDifferent(userNumberOne, userNumberTwo)}`);