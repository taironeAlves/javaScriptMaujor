// Sort(), ordena os elementos em ordem alfabetica crescente.

let arr = ['maça', 'laranja', 'limão', 'abacate', 'banana'];

console.log('Ordenação sem paramentro =>', arr.sort());

let a = [2, 128, 34, 111];
console.log('Ordenação sem paramentro numeros =>', a.sort());

let at = [2, 128, -32, 7, 34, 111, -67];

function c(a, b) {

    return a - b;
}

console.log('Ordenação númerica com função callBack', at.sort(c));