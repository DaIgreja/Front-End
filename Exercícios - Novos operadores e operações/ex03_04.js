/* Exercício 3: Você está criando uma função para calcular o total de vendas de uma série de
transações. Use parâmetros rest para aceitar uma lista de valores e o método reduce para
somar todos os valores.
Exemplo de Entrada: // 100, 200, 300, 400, 500;
Exemplo de Saída: // 1500;*/
function calcularTotalVendas(...transacoes) {
  return transacoes.reduce((acumalador, valor) => acumalador + valor, 0);
}

const totalVendas = calcularTotalVendas( 100, 200, 300, 400, 500);
console.log(totalVendas);

/*Exercício 4: Você está desenvolvendo uma aplicação de catálogo e precisa atualizar uma lista
de produtos adicionando uma nova propriedade emEstoque com o valor true. Use o operador
spread e o método map para criar uma nova lista com essa propriedade adicionada.
Exemplo de Entrada: // const produtos = [ { nome: 'Camiseta', preco: 50 }, { nome: 'Calça',
preco: 100 }, { nome: 'Tênis', preco: 150 } ];
Exemplo de Saída: // [ { nome: 'Camiseta', preco: 50, emEstoque: true }, { nome: 'Calça', preco:
100, emEstoque: true }, { nome: 'Tênis', preco: 150, emEstoque: true } ];*/

const produtos = [
  { nome: 'Camiseta', preco: 50 },
  { nome: 'Calça',preco: 100 },
  { nome: 'Tênis', preco: 150 }
];

const produtosAtualizados = produtos.map(produto => ({
  ...produto,
  emEstoque: true,
}));

console.log(produtosAtualizados);