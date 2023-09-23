// Join -> transforma valores do Array em string separadas por virgula(padrao), semelhante ao implode do PHP;

var arr = [1, 2, 'a', 'b', '2', 'c', 1, 'a', '45'];

var a = arr.join();

console.log('Join sem parametros divisor =>', a);

var b = arr.join(';');

console.log('Join com parametro divisor', b);