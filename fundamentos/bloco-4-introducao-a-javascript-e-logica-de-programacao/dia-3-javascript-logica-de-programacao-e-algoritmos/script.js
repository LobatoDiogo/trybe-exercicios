// Exercicio 1 -  crie um algoritmo que retorne o fatorial de 10:

let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
}

console.log(fatorial);

// Exercicio 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let  reverseWord = "";

for (let index = 0; index < word.length; index += 1) {
    reverseWord += word[word.length - 1 - index];
}

console.log(reverseWord);

// Exercicio 3 - Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggerWord = array [0];
let smallerWord = array [0];

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > biggerWord.length) {
        biggerWord = array[index];
      }
}

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length < smallerWord.length) {
      smallerWord = array[index];
    }
  }

  console.log (biggerWord);
  console.log (smallerWord);
