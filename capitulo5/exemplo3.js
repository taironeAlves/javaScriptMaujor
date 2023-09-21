// Uso do método filter do Array
// filter não trabalha com array multidirecional

let arr = [21, 3, 18, 290,40,22,'a'];

function testeEvery(valor, indice, obj) {
    return valor != 'a' && valor >= 18;
}

let x = arr.filter(testeEvery);
console.log(x);