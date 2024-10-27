/* Exercício 1: Você está desenvolvendo uma aplicação que exibe informações de clientes. Cada
cliente pode ter uma lista de endereços, e você precisa extrair as cidades de todos os
endereços. Use encadeamento opcional, operador de coalescência nula e os métodos map e
filter para criar uma lista com as cidades.
Exemplo de Saída: // ['São Paulo', 'Campinas', 'Rio de Janeiro'] */

// ?.  Encadeamento opcional
// ?? coalescência nula
const clientes = [
  { nome: 'Ana', enderecos: [{ cidade: 'São Paulo' }, {cidade: 'Campinas' }] }, 
  { nome: 'Pedro', enderecos: [{ cidade: 'Rio de Janeiro' }] },
  { nome:'Maria', enderecos: []} 
];
 // Extrair cidades 
 const cidades = clientes
    .filter(cliente =>  cliente.enderecos?.length > 0) // Filtrar clientes que têm endereço 
    .map(cliente => cliente.enderecos?.map(endereco => endereco.cidade) ?? []) // Mapeia cada cliente para a lista de cidades
    .reduce((acumulador, cidadesCliente) => acumulador.concat(cidadesCliente), []); // unindo todos os arrays de cidades em único array

    console.log(cidades);

// Refatoração
const cidadesRefator = clientes
    .map(cliente => cliente.enderecos?.map(endereco => endereco.cidade) ?? []) // Mapeia cada cliente para a lista de cidades
    .reduce((acumulador, cidadesCliente) => acumulador.concat(cidadesCliente), []); // unindo todos os arrays de cidades em único array

    console.log(cidadesRefator);

/*Exercício 2: Você está desenvolvendo uma aplicação para filtrar produtos em estoque com
base na disponibilidade. Alguns produtos podem não ter um valor definido para a quantidade
em estoque. Use o operador de coalescência nula e o método filter para obter uma lista de
produtos com quantidade em estoque maior que 0.
Exemplo de Saída: //[ { nome: 'Camiseta', quantidade: 10 }, { nome: 'Tênis', quantidade: 5 } ];*/

const produtos = [
  { nome: 'Camiseta', quantidade: 10 },
  { nome:'Calça', quantidade: null },
  { nome: 'Tênis', quantidade: 5 },
  { nome: 'Jaqueta', quantidade: 0 },
  { nome: 'Jaqueta de Couro'}  
];

const produtosDisponiveis = produtos.filter(produto => (produto.quantidade ?? 0) > 0);

console.log(produtosDisponiveis);