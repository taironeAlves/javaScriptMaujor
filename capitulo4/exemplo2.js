var livro = new Object();

livro.titulo = 'javascript gia do programador';
livro.autor = 'Mauricio Samy';
livro.paginas = 432;
livro.preco = 'R$69,00';
livro.frete = function (cepOrigem, cepDestino, peso) {
    var valorFrete = '';
    return valorFrete;
}
livro.capitulo1 = 'Revisao do ajax';

var pares = '';
for (var prop in livro) {
    pares += prop + ': ' + livro[prop] + '\n'
};
console.log(pares);