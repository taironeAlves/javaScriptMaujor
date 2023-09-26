// Slice, extray um subarray, conforme o exemplo abaixo.
// ele pecorre o array por meio do indice.

let arr = [1, 2, 3, 4, 'a', 'b', 'c'];

let a = arr.slice(2,5) // extrai o valor a partir do indice 2 até o indice 5, sem remover do arr
console.log('2 e 5 =>', a);
console.log(arr);

a = arr.slice(3);
console.log('3 =>', a);

a = arr.slice(-5, 6); // o indice de um array sempre começa a contagem da esquerda pra direita -> 0,1,2,3...
console.log('-5, 6 =>', a);

a = arr.slice(-5,-1)
console.log('-6,-4', a);

