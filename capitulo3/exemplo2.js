// Utilizando throw para gerar mensagens de erro.

var x = prompt('Entre com um número maior que 0 e menor que 11', '');
try {
    if (x <= 0) {
        throw (1);
    }
    if (x >= 11) {
        throw (2);
    }
if(isNaN(parseInt(x))){
    throw (3)
}
} catch (e) {
    switch (e) {
        case 1:
            console.log('O número tem que ser maior que zero');
            break;
    
        case 2:
            console.log('O número tem que ser menor que 11');
            break;
    
        case 3:
            console.log('Digite apenas número de Zero a 11');
            break;
    
        default:
            console.log('Sem brechas');
            break;
    }
    
}