// Exercício 1
const produto = 200;
const descontoProduto = 40; // R$
const imposto = 12;  // R$

const precoDesconto = produto - desconto;
const precoFinal = precoDesconto + imposto;

console.log('Preço final do produto: R$', precoFinal); // Exemplo de saída: R$ 172


// Exercício 2
const custoProduto = 100;
const lucroAdicional = 30; // R$

const precoVenda = custoProduto + lucroAdicional;

console.log('Preço de venda do produto: R$', precoVenda); // Exemplo de saída: R$ 130


// Exercício 3
const precoProduto = 300;
const desconto = 50; // R$
const orcamento = 250; // R$

const precoComDesconto = precoProduto - desconto;
const dentroDoOrcamento = precoComDesconto <= orcamento;

console.log('Preço com desconto: R$', precoComDesconto); // Exemplo de saída: R$ 250
console.log('Está dentro do orçamento? ', dentroDoOrcamento); // true


// Exercício 4
const quantidadeEstoqueString = "20";
const quantidadeMinEstoque = 20;

// Conversão explícita da string para número
const quantidadeEstoque = Number(quantidadeEstoqueString);

// Verificação de igualdade estrita após conversão e comparação
const suficiente = quantidadeEstoque === quantidadeMinEstoque;

console.log('A quantidade no estoque é suficiente:', suficiente); // Exemplo de saída: true


// Exercício 5
const produtoDisponivel = true;
const estoque = 10;
const quantidadeMinimaEstoque = 15;

// Verificação de disponibilidade e quantidade suficiente usando operadores lógicos
const quantidadeSuficiente = estoque >= quantidadeMinimaEstoque;
const produtoDisponivelESuficiente = produtoDisponivel && quantidadeSuficiente;

console.log('O produto está disponível e tem quantidade suficiente:', produtoDisponivelESuficiente); // Exemplo de saída: false

// Exemplo de uso do operador lógico NOT
const produtoIndisponivel = !produtoDisponivel;

console.log('O produto está indisponível:', produtoIndisponivel); // Exemplo de saída: false
