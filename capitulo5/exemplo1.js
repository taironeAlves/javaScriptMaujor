// Metodos do objeto Array com return true
// every não trabalha com array multidirecional

let arr = [21, 3, 18, 290];

function testeEvery(valor, indice, obj) {
    return (typeof valor == 'number');
}

let x = arr.every(testeEvery);
console.log(x);