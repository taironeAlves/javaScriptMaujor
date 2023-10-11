// Funcionalidades basicas de Expressoes regulares.
let a = 'O pato chato atolou no atoliero do primeiro ato';
let b = /ato/g;
console.log(a.replace(b, '[ato]'))