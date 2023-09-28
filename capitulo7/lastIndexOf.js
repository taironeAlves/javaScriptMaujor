// LastIndexOf() retorna o indice do último encontrado. Ele faz o inverso do indexOf()

let texto = 'JavaScript é uma linguagem muito legal';

console.log(texto.lastIndexOf('S', 5)); // procura o caracter a partir de um indice
console.log(texto.lastIndexOf('legal')); // retorna o indice do primeiro caracter encontrado seguido das demais letras
console.log(texto.lastIndexOf('legxl')); // retorna -1 porque depois do primeiro caracter não tem mais letras semelhantes.