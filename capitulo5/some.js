// Some(), pecorre cada elemento do array e executa uma função callback,
// esta função retornará true ou false para cada elemento.

// Diferente do every() que retorna true somente se todos os elementos satisfazerem a função callback, 
// o some() retorna true se pelo menos 1 elemento satisfazer a função callback

let arr = [21, 3, 18, 'a', 290];

function a(valor, indice, obj) {
    return typeof valor === 'string';
}

let x = arr.some(a)
console.log ('valor de X é do tipo String? =>', x); // Retorna true porque existe pelo menos 1 elemento do tipo string

function b(valor, indice, obj) {
    console.log('Type indice =>',typeof(indice))
    return typeof indice === 'string';
}

let y = arr.some(b)
console.log ('indice de Y é do tipo String? =>', y); 