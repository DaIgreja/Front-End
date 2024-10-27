// Exercício 1: Dado o array ['Produto A', 'Produto B'], adicione 'Produto C' ao final,
// remova o primeiro item e exiba o carrinho atualizado.

let carrinho = ['Produto A', 'Produto B'];
carrinho.push("Produto C");
carrinho.shift();

console.log(carrinho);

//Exercício 2: Dado o array ['Produto X', 'Produto Y'], adicione 'Produto Z' ao final
// e una com a nova lista ['Produto A', 'Produto B']. Exiba a lista final de produtos disponíveis.

let produtos = ['Produto X', 'Produto Y'];
produtos.push("Produto Z");
console.log(produtos);

let carrinho2 = ['Produto A', 'Produto B'];

let novoArray = produtos.concat(carrinho2);
console.log(novoArray);

// Exercício 3:  Dado o array ['Caderno', 'Lápis', 'Estojo'], verifique se 'Lápis' e
// 'Agenda' estão presentes no estoque
let estoque = ['Caderno', 'Lápis', 'Estojo'];

console.log(estoque.includes("Lápis"));
console.log(estoque.includes("Agenda"));

// Exercício 4: Dado o array [2, 5, 8, 1], verifique se pelo menos um dos números é maior que 7.
let numeros = [2, 5, 8, 1];

let resultadoSome = numeros.some((numero) => numero > 7);
console.log("Resultado: ", resultadoSome);

// Exercício 5: Dado o array [4, 6, 8, 2], verifique se todos os números são maiores que 3.
let listaNumeros = [4, 6, 8, 2];

let resultadoEvery = listaNumeros.every((numero) => numero > 3);
console.log( "Resultado: ", resultadoEvery);
