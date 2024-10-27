

// let novoArray = arrayOriginal.filter(callback(elemento, indice,array))  -> true e false;

/* Exercício 4: Você tem uma lista de imóveis, alguns disponíveis para venda e outros não.
Utilize o método .filter() para criar uma nova lista contendo apenas os imóveis que estão
disponíveis para venda. Qual será o array resultante?
Exemplo de Saída: // [ { id: 1, tipo: 'Apartamento', valor: 400000, disponivel: true, bairro:
'Centro' }, { id: 3, tipo: 'Cobertura', valor: 900000, disponivel: true, bairro: 'Centro' }, { id: 5, tipo:
'Casa', valor: 700000, disponivel: true, bairro: 'Centro' } ] */
const imoveis = [ 
  { id: 1, tipo: 'Apartamento', valor: 400000, disponivel: true, bairro: 'Centro' }, 
  { id: 2, tipo: 'Casa', valor: 550000, disponivel: false, bairro: 'Subúrbio' }, 
  { id: 3, tipo: 'Cobertura', valor: 900000, disponivel: true, bairro: 'Centro' }, 
  { id: 4, tipo: 'Apartamento', valor: 300000, disponivel: false, bairro: 'Zona Sul' }, 
  { id: 5, tipo: 'Casa', valor: 700000, disponivel: true, bairro:'Centro' } 
];

console.log("Resolução exercício 4");
const imoveisDisponiveis = imoveis.filter(imovel => imovel.disponivel);
console.log(imoveisDisponiveis);


/* Exercício 5: Você tem uma lista de imóveis com seus respectivos valores. Utilize o método
.filter() para criar uma nova lista contendo apenas os imóveis que têm valor acima de R$
500.000. Qual será o array resultante?
Exemplo de Saída: // [ { id: 2, tipo: 'Casa', valor: 550000, disponivel: false, bairro: 'Subúrbio' }, {
id: 3, tipo: 'Cobertura', valor: 900000, disponivel: true, bairro: 'Centro' }, { id: 5, tipo: 'Casa', valor:
700000, disponivel: true, bairro: 'Centro' } ] */

console.log("Resolução exercício 5");
const imoveisDeAltoValor = imoveis.filter(imovel => imovel.valor > 500000);
console.log(imoveisDeAltoValor);


/* Exercício 6: Você tem uma lista de imóveis em diferentes bairros da cidade. Utilize o método
.filter() para criar uma nova lista contendo apenas os imóveis localizados no bairro
"Centro". Qual será o array resultante?
Exemplo de Saída: // [ { id: 1, tipo: 'Apartamento', valor: 400000, disponivel: true, bairro:
'Centro' }, { id: 3, tipo: 'Cobertura', valor: 900000, disponivel: true, bairro: 'Centro' }, { id: 5, tipo:
'Casa', valor: 700000, disponivel: true, bairro: 'Centro' } ] */

console.log("Resolução exercício 6");

const imoveisNoCentro = imoveis.filter(imovel => imovel.bairro === "Centro");
console.log(imoveisNoCentro);