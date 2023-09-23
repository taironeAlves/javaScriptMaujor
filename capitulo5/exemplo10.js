// Redunce reduz um array em um único valor, frequentemente utilizando para fazer soma, multiplicação e concatenação

let arr = [1, 4, 7, 15];

function a(valor1, valor2, indice, arr){
    return valor1 + valor2;
}

let x = arr.reduce(a);
console.log(x)

const transacoes = [
    { descricao: 'Compra de comida', valor: -50 },
    { descricao: 'Depósito', valor: 1000 },
    { descricao: 'Pagamento de aluguel', valor: -700 },
    { descricao: 'Recebimento de salário', valor: 2000 }
  ];
  
  const saldoTotal = transacoes.reduce(function(acumulador, transacao) {
    return acumulador + transacao.valor;
  }, 0);
  
  console.log(`O saldo total é: $${saldoTotal}`);
  