// toLocaleString() é semelhante ao toString, porém, aceita argumentos regionais como formatação de data, hora e moeda

const numero = 1234.1234;
const numeroFormatado = numero.toLocaleString('pt-BR');

console.log(numeroFormatado)