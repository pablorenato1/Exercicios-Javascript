/*Escreva uma função que retorne um número aleatório
O número máximo retornado deve ser passado via parâmetro */

function numeroAleatorio(num) {
    return Math.floor(Math.random() * num)+1;
}

console.log(numeroAleatorio(15))
console.log(numeroAleatorio(90));
console.log(numeroAleatorio(100));