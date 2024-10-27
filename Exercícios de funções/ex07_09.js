/* Exercício 7: Você tem um array de objetos representando as vendas de uma empresa, onde
cada objeto contém o valor da venda. Utilize o método .reduce() para calcular o faturamento
total da empresa. Qual será o valor total?
Exemplo de Entrada: // [ { id: 1, valor: 1500 }, { id: 2, valor: 2300 }, { id: 3, valor: 3200 }, { id: 4,
valor: 4100 }, { id: 5, valor: 1800 } ];
Exemplo de Saída: // 12900 */

const vendas = [ 
  { id: 1, valor: 1500 },
  { id: 2, valor: 2300 }, 
  { id: 3, valor: 3200 }, 
  { id: 4,valor: 4100 },
  { id: 5, valor: 1800 } 
];

const faturamentoTotal = vendas.reduce((total, venda) => total + venda.valor, 0);
console.log(faturamentoTotal);

// const resultado = arrayOriginal.reduce(callback(acumulador, elemento, indice, array), valorInicial);

/*Exercício 8: Você tem um array de objetos representando avaliações de clientes, onde cada
objeto contém uma pontuação de satisfação (de 1 a 5). Utilize o método .reduce() para
calcular a média de satisfação dos clientes. Qual será a média?
Exemplo de Entrada: // [ { cliente: 'João', pontuacao: 4 }, { cliente: 'Maria', pontuacao: 5 }, {
cliente: 'Pedro', pontuacao: 3 }, { cliente: 'Ana', pontuacao: 4 }, { cliente: 'Lucas', pontuacao: 5} ];
Exemplo de Saída: // 4.2 */

const avaliacões =  [ 
  { cliente: 'João', pontuacao: 4 }, 
  { cliente: 'Maria', pontuacao: 5 }, 
  { cliente: 'Pedro', pontuacao: 3 }, 
  { cliente: 'Ana', pontuacao: 4 }, 
  { cliente: 'Lucas', pontuacao: 5}
];

const totalPontos = avaliacões.reduce((total , avaliacao) => total + avaliacao.pontuacao, 0);

const media = totalPontos / avaliacões.length;
console.log(media);

/*Exercício 9: Você tem um array de objetos representando produtos vendidos, onde cada
objeto contém o nome do produto e sua categoria. Utilize o método .reduce() para criar um
objeto que conte quantos produtos foram vendidos em cada categoria. Como ficará o objeto
resultante?
Exemplo de Entrada: // [ { nome: 'Camisa', categoria: 'Vestuário' }, { nome: 'Calça', categoria:
'Vestuário' }, { nome: 'Notebook', categoria: 'Eletrônicos' }, { nome: 'Celular', categoria:
'Eletrônicos' }, { nome: 'Tênis', categoria: 'Calçados' }, { nome: 'Meias', categoria: 'Vestuário' } ];
Exemplo de Saída: // { 'Vestuário': 3, 'Eletrônicos': 2, 'Calçados': 1 }*/

const produtosVendidos = [
  { nome: 'Camisa', categoria: 'Vestuário' },
  { nome: 'Calça', categoria:'Vestuário' },
  { nome: 'Notebook', categoria: 'Eletrônicos' },
  { nome: 'Celular', categoria:'Eletrônicos' },
  { nome: 'Tênis', categoria: 'Calçados' },
  { nome: 'Meias', categoria: 'Vestuário' }
];

const contagemPorCategoria = produtosVendidos.reduce((contagem, produto) => {
  contagem[produto.categoria] = (contagem[produto.categoria] || 0) + 1;
  return contagem;
}, {});

console.log(contagemPorCategoria);