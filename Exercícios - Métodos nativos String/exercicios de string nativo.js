// Exercício 1-Dada a string 'javascript é divertido', converta a palavra 'javascript' para letras maiúsculas.
let string = "javascript é divertido";
let resultado = string.replace("javascript", "javascript".toUpperCase());
console.log(resultado);

// Exercício 2-Dada a string "Aprendendo Javascript", extraia a palavra "Aprendendo" e,em seguida, 
// converta essa palavra para letras minúsculas.
let str = "Aprendendo Javascript";
let palavra = str.substring(0,10).toLowerCase();
console.log(palavra);

// Exercício 3- Dada a string "Aprendendo Python", extraia a palavra "Python" e substitua por “Javascript”.
let frase = "Aprendendo Python";
let palavraExtrair = frase.slice(11);
let fraseNova = frase.replace(palavraExtrair, "Javascript");
console.log(fraseNova);

// Exercício 4-Dada a string 'cadeira, mesa, sofá, armário', divida essa string em um array de
// produtos e remova o item 'sofá' da lista.
let lista = "cadeira, mesa, sofá, armário";

let array = lista.split(", ");
console.log(array);

array.splice(array.indexOf("sofá"), 1);
console.log(array);

