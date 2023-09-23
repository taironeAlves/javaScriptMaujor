// Retorna o ultimo index mesmo que o valor esteja repetido.

var arr = [1, 2, 'a', 'b', '2', 'c', 1, 'a', '45'];

var a = arr.indexOf('a');

console.log('IndexOf =>', a);

var b = arr.lastIndexOf('a');

console.log('LastIndexOf =>', b);