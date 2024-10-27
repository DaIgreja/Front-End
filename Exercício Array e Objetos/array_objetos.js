/*Exercício 1: Manipulação de Array - parte 1
a. Crie um array chamado produtos contendo três nomes de produtos.
b. Acesse e imprima o segundo produto.
c. Modifique o terceiro produto para "Notebook" e imprima o array atualizado.*/
let produtos = ["Smartphone", "Tablet", "Câmera"]; // índice - 0 1 2
console.log(produtos[1]);
produtos[2] = "Notebook";
console.log(produtos);

/*Exercício 2: Manipulação de Array - parte 2
a. Crie um array chamado clientes contendo três nomes de clientes.
b. Adicione um quarto cliente ao array.
c. Remova o último cliente e imprima o array atualizado.*/

let clientes = ["João", "Maria", "Carlos"]; // indice 0 1 2
// clientes[3] = "Millene";
clientes[clientes.length] = "Millene"; // tamanho 3
console.log(clientes);

clientes.length = clientes.length - 1;
console.log(clientes);

/*Exercício 3: Manipulação de Objetos - parte 1
a. Crie um objeto chamado produto com as propriedades nome, preco e quantidade.
b. Acesse e imprima o nome do produto.
c. Modifique o preço do produto e imprima o objeto atualizado.*/

let produto = {
  nome: "Televisão",
  preco: 1500,
  quantidade: 10,
};

console.log(produto.nome);
console.log(produto["nome"]);

// produto.preco = 1400;
produto["preco"] = 1400;
console.log(produto);

/*Exercício 4: Manipulação de Objetos - parte 2
a. Crie um objeto chamado venda com as propriedades cliente, produto e valor.
b. Adicione a propriedade data ao objeto.
c. Remova a propriedade produto e imprima o objeto atualizado.*/
let venda = {
  clinte: "Carlos",
  produto: "Notebook",
  valor: 2500,
};

venda.data = "18-07-2024";
// venda["data"] = "18-07-2024";
console.log(venda);

delete venda.produto;
console.log(venda);

/*Exercício 5: Manipulação dos Tipos Referências
a. Crie um array estoque e atribua seus valores para um novo array novoEstoque.
b. Modifique um elemento de novoEstoque e mostre que estoque não foi alterado.
c. Crie um objeto funcionario e atribua seus valores para um novo objeto
novoFuncionario.
d. Modifique uma propriedade de novoFuncionario e mostre que funcionario não foi
alterado.*/

let estoque = ["WebCam", "Tablet", "Mouse"]; // indice 0 1 2
let novoEstoque = [...estoque];

novoEstoque[2] = "Televisão";
console.log(novoEstoque);
console.log(estoque);

let funcionario = {
  nome: "Lucas",
  cargo: "Vendedor",
  salario: 3000,
};

let novoFuncionario = { ...funcionario };
novoFuncionario.cargo = "Gerente";
console.log(novoFuncionario);
console.log(funcionario);
