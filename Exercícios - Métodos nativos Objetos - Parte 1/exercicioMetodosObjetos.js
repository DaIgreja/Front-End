/* Exercício 1: Crie um objeto chamado vendas com as propriedades produto, quantidade,
precoUnitario e desconto. Adicione um método chamado calcularTotal que calcule o
valor total da venda, considerando o desconto. Adicione também um método chamado
detalharVenda que retorne uma string detalhando a venda. */
const vendas ={
  produto: "TV",
  quantidade: 2,
  precoUnitario: 1500,
  desconto: 0,
  
  calcularTotal: function() {
    const total = this.quantidade * this.precoUnitario; //3000
    return total - (total * (this.desconto / 100)); // 3000 - (3000 * (10 / 100));
  },

  detalharVenda: function() {
    return `Produto: ${this.produto}, Quantidade: ${this.quantidade}, Preço Unitário: ${this.precoUnitario}, Total: ${this.calcularTotal()}`
  }
}
// console.log(vendas.detalharVenda());

/*Exercício 2: Adicione um método ao objeto vendas chamado aplicarDesconto que recebe
um valor percentual e atualiza o desconto da venda. Aplique um desconto de 10% e verifique o
valor total com o método calcularTotal. */

vendas.aplicarDesconto = function(percentual) {
  this.desconto = percentual;
}
// vendas.aplicarDesconto(10);
// console.log(`O desconto foi de: ${vendas.desconto}, a Venda: ${vendas.detalharVenda()}`);

/*Exercício 3: Adicione um método ao objeto vendas chamado atualizarQuantidade que
recebe um número e altera a quantidade do produto na venda. Atualize a quantidade e
verifique o total da venda após a atualização.*/

vendas.atualizarQuantidade = function(novaQuantidade) {
  this.quantidade =novaQuantidade;
}
// vendas.atualizarQuantidade(3);
// vendas.aplicarDesconto(10);
// console.log(`A quantidade foi de: ${vendas.quantidade}, a Venda: ${vendas.detalharVenda()}`);

/*Exercício 4: Adicione um método chamado verificarEstoque que recebe a quantidade
disponível em estoque e retorna uma mensagem fixa indicando se a venda pode ser realizada
ou se é necessário ajustar a quantidade.*/
vendas.verificarEstoque = function(estoqueDisponivel) {
  return "Verificação concluída: " + (this.quantidade <= estoqueDisponivel)
}
// console.log(vendas.verificarEstoque(2));

// console.log(vendas);

/*Exercício 5: Retorne um array com todas as suas propriedades e valores do objeto vendas.
Exiba as propriedades e valores em um formato legível.*/
const entradas = Object.entries(vendas);
// console.log(entradas);

/*Exercício 6: Obtenha um array com os nomes de todas as propriedades do objeto vendas.
Exiba as propriedades do objeto.*/
const chaves = Object.keys(vendas);
// console.log(chaves);

/*Exercício 7: Obtenha um array com todos os valores das propriedades do objeto vendas.
Exiba os valores das propriedades.*/
const valores = Object.values(vendas);
console.log(valores);

/*Exercício 8: Verifique se o objeto vendas possui a propriedade desconto. Retorne a
verificação diretamente em uma mensagem fixa.*/
function verificarPropriedadeDesconto() {
  return "Verificação concluída: " + vendas.hasOwnProperty("desconto");
}

console.log(verificarPropriedadeDesconto());

/*Exercício 9: Crie um novo objeto novaVenda que contenha as mesmas propriedades e
valores de vendas, mas com um produto e quantidade diferentes. Exiba o novo objeto
novaVenda.*/

const novaVenda = Object.assign({}, vendas , {
  produto: "Notebook",
  quantidade: 1,
});

console.log(novaVenda);

/*Exercício 10: Adicione uma nova propriedade data ao objeto vendas, definindo-a como não
enumerável. Exiba todas as propriedades do objeto vendas e, em seguida, exiba o valor da
nova propriedade data separadamente.*/
Object.defineProperty(vendas , "data", {
  value: "2024-08-03",
  enumerable: false,
});

// console.log("Data da venda " + vendas.data)

// console.log(Object.keys(vendas));

/*Exercício 11: Crie um novo objeto DescontoEspecial que herde as propriedades do objeto
vendas, mas com um desconto fixo de 20%. Exiba as propriedades do novo objeto e verifique
se o desconto foi aplicado corretamente.*/

const descontoEspecial = Object.create(vendas);
descontoEspecial.desconto = 20;
console.log(descontoEspecial.detalharVenda());
console.log(vendas.detalharVenda());

/*Exercício 12: Remova a propriedade desconto do objeto vendas. Verifique se a propriedade
foi removida com sucesso e exiba as propriedades restantes do objeto.*/

delete vendas.desconto;


delete vendas.aplicarDesconto;
console.log(Object.keys(vendas));