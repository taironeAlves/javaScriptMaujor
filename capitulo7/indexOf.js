// indexOf() retorna o numero do indice do primeiro caracter encontrado.

let texto = 'JavaScript é uma linguagem muito legal';

console.log(texto.indexOf('S', 5)); // procura o caracter a partir de um indice
console.log(texto.indexOf('legal')); // retorna o indice do primeiro caracter encontrado seguido das demais letras
console.log(texto.indexOf('legxl')); // retorna -1 porque depois do primeiro caracter não tem mais letras semelhantes.