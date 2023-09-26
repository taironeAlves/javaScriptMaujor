// Metodo Map gera um novo array com novos valores de acordo com o valor recebido do array pecorrido.

var arr = [21, 3, 18, 290];
 
function a(valor, indice, obj){
    return indice *= 2; 
}

var x = arr.map(a);

console.log(x)