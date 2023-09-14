var carro = {
    marca: 'Reno',
    modelo: 'logan',
    comprimento: '4.250mm',
    largura: '1.735mm',
    altura: '1.525mm'
}

var msg = '';
var k;

for (k in carro) {
    msg += k + ': ' + carro[k] + '\n';
    console.log(msg);
}