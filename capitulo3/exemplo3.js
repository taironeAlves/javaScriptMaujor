// Utilizando o throw para personalizar mensagens de erro

var x = prompt('Entre com um número maior que 0 e menor que 11', '');
try {
    if (x <= 0) {
        throw  'Numero menor que zero';
    }
    if (x >= 11) {
        throw new Error('Numero maior que 11');
    }
if(isNaN(parseInt(x))){
    throw {
        name: 'Erro de execução no JS',
        message: 'Você está errado'
    };
}
} catch (e) {
    console.log(e.name, e.message);
    
}