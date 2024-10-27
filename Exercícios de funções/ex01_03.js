/* Exercício 1: Você é responsável por atualizar os salários de todos os funcionários de uma
empresa. A empresa decidiu aumentar o salário de todos em 10%. Crie um array com os
salários atuais e utilize o método .map() para calcular o novo salário de cada funcionário. Qual
será o array resultante?
Exemplo de Entrada: // [3000, 4500, 5000, 6000, 7500];
Exemplo de Saída: // [3300, 4950, 5500, 6600, 8250]; */

//  let novoArray = arrayOriginal.map(callback(elemento, indice, array));

const salarios = [3000, 4500, 5000, 6000, 7500];

// const novosSalarios = salarios.map((salario) => Number((salario * 1.1).toFixed(0)) );
const novosSalarios = salarios.map((salario) =>  Math.round(salario * 1.1));

console.log(novosSalarios);

/*
Exercício 2: Uma loja decidiu reajustar os preços de todos os produtos em 5% para cobrir os
custos operacionais. Crie um array com os preços dos produtos e utilize o método .map() para
calcular os novos preços. Quais serão os novos preços?
Exemplo de Entrada: // [50, 100, 150, 200, 250];
Exemplo de Saída: //// [52.5, 105, 157.5, 210, 262.5] */

const precosProdutos = [50, 100, 150, 200, 250];

const novosPrecos = precosProdutos.map((preco) => preco * 1.05);
console.log(novosPrecos);

/*
Exercício 3: Você precisa adicionar um identificador único (ID) a cada funcionário da empresa.
Crie um array com os nomes dos funcionários e utilize o método .map() para adicionar um ID
a cada um deles. O ID deve ser baseado na posição do funcionário no array. Como ficará o
array resultante?
Exemplo de Entrada: // ['Ana', 'Bruno', 'Carlos', 'Diana', 'Eduardo'];
Exemplo de Saída: // [ { id: 1, nome: 'Ana' }, { id: 2, nome: 'Bruno' }, { id: 3, nome: 'Carlos' }, { id:
4, nome: 'Diana' }, { id: 5, nome: 'Eduardo' } ]*/

const funcionarios = ['Ana', 'Bruno', 'Carlos', 'Diana', 'Eduardo'];

const funcionariosComID = funcionarios.map((nome, index) => ({
  id: index + 1,
  nome: nome,
}));

console.log(funcionariosComID);