//Objetos aninhados
var livro = new Object();

livro.titulo = 'javascript gia do programador';
livro.autor = 'Mauricio SamyTTTT';
livro.paginas = 432;
livro.preco = 'R$69,00';
livro.frete = function (cepOrigem, cepDestino, peso) {
    var valorFrete = '';
    return valorFrete;
}

livro.capitulos = new Object();
livro.capitulos.capitulo1 = 'Revisão do Ajax';
livro.capitulos.capitulo2 = 'Funções para requisisção ajax';
livro.capitulos.capitulo3 = 'Teste 3';
livro.capitulos.capitulo4 = 'Teste 4';
livro.capitulos.capitulo5 = 'Teste 5';
livro.capitulos.capitulo6 = 'Teste 6';
livro.capitulos.capitulo7 = 'Teste 7';

console.log(livro.capitulos.capitulo5);
