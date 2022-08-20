// 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

// for (let index = 0; index < numbers.length; index += 1){
//     console.log(numbers[index])
// }

// 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// let sumNumbers = 0;

// for (let index = 0; index < numbers.length; index +=1){
//     sumNumbers += numbers[index];
// }
//     console.log(sumNumbers);

// 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

// let sumNumbers = 0;

// for (let index = 0; index < numbers.length; index +=1){
//     sumNumbers += numbers[index];
// }
// let medNumbers = sumNumbers / numbers.length;

// console.log(medNumbers);

// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// let sumNumbers = 0;

// for (let index = 0; index < numbers.length; index +=1){
//     sumNumbers += numbers[index];
// }

// let medNumbers = sumNumbers / numbers.length;

// if (medNumbers > 20){
//     console.log("valor maior que 20");
// } else {
//     console.log ("valor menor ou igual a 20");
// }

// 5 - 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;

// let maiorNumero = numbers[0];

// for (let index = 1; index < numbers.length; index +=1){
//     if (numbers[index] > maiorNumero){
//         maiorNumero = numbers [index];
//     }
// }
// console.log(maiorNumero);

// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let result = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 2 !== 0) {
//     result += 1;
//   }
// }

// if (result === 0) {
//   console.log('nenhum valor ímpar encontrado');
// } else {
//   console.log(result);
// }

// 7 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let menorNumero = numbers[0];

// for (index = 1; index < numbers.length; index += 1){
//     if (numbers[index] < menorNumero){
//         menorNumero = numbers[index];
//     }
// }
// console.log (menorNumero);

// 8 - Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

// let numbers = [];

// for (let index = 1; index <= 25; index += 1){
//     numbers.push(index);
// }

// console.log(numbers);