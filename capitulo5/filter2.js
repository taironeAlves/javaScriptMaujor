// Uso do método filter do Array com parametro indice
// filter não trabalha com array multidirecional

let arr = [21, 3, 18, 290,40,22,'a'];

function testeEvery(valor, indice, obj) {
    return indice < 4 && valor >3;
}

let x = arr.filter(testeEvery);
console.log(x);