// Metodos do objeto Array com retorno false

let arr = [21, 3, 18, 290, 'a'];

function testeEvery(valor, indice, obj) {
    return (typeof valor == 'number');
}

let x = arr.every(testeEvery);
console.log(x);