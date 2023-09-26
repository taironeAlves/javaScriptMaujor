// Uso do método forEach do Array com parametro indice e valor
// Na estrutura dos métodos do Array os parametros são (valor, indice, obj)

let arr = [21, 3, 18, 'a', 290];

let msg = '';

function a(valor, indice, obj) {
    msg += 'arr.[' + indice + '] = ' + valor + '\n';
}

arr.forEach(a);
console.log(msg);