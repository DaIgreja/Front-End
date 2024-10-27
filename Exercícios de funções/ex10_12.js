/* Exercício 10: Crie uma função tradicional chamada calcularDesconto que receba o preço
de um produto e a porcentagem de desconto, e retorne o valor do produto com o desconto
aplicado. Após criar a função tradicional, transforme-a em uma Arrow Function.
Exemplo de Entrada: //const precoProduto = 200; const percentualDesconto = 15;
Exemplo de Saída: // 170; */

const precoProduto = 200;
const percentualDesconto = 15;

function calcularDesconto(preco, desconto) {
  return preco - preco * (desconto / 100);
}

const precoFuncaoTradicional = calcularDesconto(precoProduto, percentualDesconto);
console.log(precoFuncaoTradicional);

// Arrow Function
const calcularDescontoArrow = (preco, desconto) => preco - preco * (desconto / 100);
const precoArrowFunction = calcularDescontoArrow(precoProduto, percentualDesconto);
console.log(precoArrowFunction);


/*Exercício 11: Crie uma função tradicional chamada filtrarPorCategoria que receba uma
lista de produtos e uma categoria, e retorne os produtos que pertencem àquela categoria. Após
criar a função tradicional, transforme-a em uma Arrow Function.
Exemplo de Entrada: // const produtos = [ { nome: 'Camisa', categoria: 'Vestuário' }, { nome:
'Notebook', categoria: 'Eletrônicos' }, { nome: 'Tênis', categoria: 'Calçados' }, { nome: 'Calça',
categoria: 'Vestuário' } ]; const categoriaDesejada = 'Vestuário';
Exemplo de Saída: // [ { nome: 'Camisa', categoria: 'Vestuário' }, { nome: 'Calça', categoria:
'Vestuário' } ]; */

const produtos = [
  { nome: 'Camisa', categoria: 'Vestuário' },
  { nome:'Notebook', categoria: 'Eletrônicos' },
  { nome: 'Tênis', categoria: 'Calçados' },
  { nome: 'Calça',categoria: 'Vestuário' } 
]; 

const categoriaDesejada = 'Vestuário';

// Tradicional
function filtrarPorCategoria(produtos, categoria) {
  return produtos.filter(function(produto) {
    return produto.categoria === categoria;
  });
}

const produtosFiltroTradicional = filtrarPorCategoria(produtos, categoriaDesejada);
console.log(produtosFiltroTradicional);

// Arrow Funciton
const filtrarPorCategoriaArrow = (produtos, categoria) => produtos.filter((produto) => produto.categoria === categoria);
console.log(filtrarPorCategoriaArrow(produtos, categoriaDesejada));

/*Exercício 12: Crie uma função tradicional chamada calcularFaturamentoTotal que
receba uma lista de vendas e retorne o faturamento total somando o valor de todas as vendas.
Após criar a função tradicional, transforme-a em uma Arrow Function.
Exemplo de Entrada: // const vendas = [ { id: 1, valor: 1500 }, { id: 2, valor: 2300 }, { id: 3, valor:
3200 } ];
Exemplo de Saída: // 7000; */

const vendas =[
  { id: 1, valor: 1500 },
  { id: 1, valor: 2300 },
  { id: 1, valor: 3200 },
];

//Tradicional
function calcularFaturamentoTotal(vendas) {
   const vendasTotal = vendas.reduce(function (total, venda) {
    return total + venda.valor;
  }, 0);
  return vendasTotal;
}

const faturamentoTotalTradicional = calcularFaturamentoTotal(vendas);
console.log(faturamentoTotalTradicional);

//Arrow Function

const calcularFaturamentoTotalArrow = vendas => vendas.reduce((total, venda) => total + venda.valor, 0);
const arrowResultado = calcularFaturamentoTotalArrow(vendas);
console.log(arrowResultado);
