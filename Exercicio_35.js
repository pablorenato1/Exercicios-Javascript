/*Criar um objeto calculadora
Que contenha os metodos de somar, subtrair, multiplicar e dividir
Os metodos aceitam somente 2 parametros
*/

let calculadora = {
    somar: function(x,y) {
        return x + y;
    },
    subtrair: function(x,y) {
        return x- y;
    }, 
    multiplicar: function(x,y) {
        return x * y;
    },
    dividir: function(x,y) {
        return x / y;
    }
}

console.log(calculadora.somar(1,5)); // 6
console.log(calculadora.subtrair(10,2)); // 8
console.log(calculadora.multiplicar(5,5)); // 25
console.log(calculadora.dividir(81,9)); // 9