// charCodeAt(), retornar a codificação UNICODE da string

function scharCodeAt() {
    let texto = 'mau%\SR=+t$@ 098mu hjor \\\a';
    let indice = Number(document.form.indice.value);

    if(isFinite(indice) && indice == 0 && indice <= texto.length-1){
        document.form.resultado.value = texto.charCodeAt(indice);
    }else{
        console.log('Indice inválido')
    }
}