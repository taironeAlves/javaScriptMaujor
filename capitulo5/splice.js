// Splice(), remove ou adiciona elementos no array de acordo com a posição passada. Posição não é o mesmo que índice
// Faz semelhante ao pop() que remove e o push() que adiciona
// Posição sempre começa com 1 no indice 0

let arr = [2, 5, 9, 7, 1, 6, 8, 3, 10, 4];
arr.splice(5); // apaga tudo apartir da posição 5, não gera um array novo.
console.log(arr)

arr = [2, 5, 9, 7, 1, 6, 8, 3, 10, 4];
arr.splice(3,4); // Apaga apartir da terceira posição + 4 adiante
console.log(arr);

arr = [2, 5, 9, 7, 1, 6, 8, 3, 10, 4];
arr.splice(5,0, 13, 54, 32); // Primeiro argumento é a posição inicial 5, o segundo é quantos elementos
// serão removidos em seguida, no caso, é zero, os demais argumentos serão adicionados ao array.
console.log(arr);

