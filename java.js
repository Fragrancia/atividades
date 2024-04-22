//Arthur Fraga, Bernardo farias
var produtos = [arroz];
var precos = [9,99]; 
var estoque = [5]; 


function buscarProduto(nomeProduto) {
}


function compras(qtdComprada, nomeProduto) {
  var indiceProduto = buscarProduto(nomeProduto);
  if (indiceProduto === null) {
    console.error("Produto não encontrado!");
    return;
  }

  if (qtdComprada <= 0) {
    console.error("Quantidade inválida!");
    return;
  }

  estoque[indiceProduto] += qtdComprada;
  console.log("Compra realizada com sucesso!");
}

// Função para registrar vendas
function vendas(qtdVendida, nomeProduto) {
  var indiceProduto = buscarProduto(nomeProduto);}
  if (indiceProduto === null) {
    console.error("Produto não encontrado!");
    return;
  }

  if (qtdVendida <= 0) {
    console.error("Quantidade inválida!");
    return;
  }

  if (estoque[indice]);
