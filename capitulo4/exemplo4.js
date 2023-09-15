//Trabalhando com construtores
function Cilindro(r, h){
    this.raioBase = r;
    this.altura = h;
    this.areaBase = calculaAreaBase;
}

function calculaAreaBase(){
    return Math.PI * Math.pow(this.raioBase, 2);
}
primeiroCilindro = new Cilindro(2, 5);

console.log('Raio de base', primeiroCilindro.raioBase, '\nAltura:', primeiroCilindro.altura, '\nÁrea da base:', primeiroCilindro.areaBase());