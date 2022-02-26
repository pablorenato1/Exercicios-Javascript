/*Criar dois arrays, um com mais de 5 elementos e outro com menos
Depois, criar uma função que verifica o número de elementos
Se possuir menos do que 5, mostrar a mensagem 'Poucos elementos' no console
Se tiver mais, mostrar 'Muitos elementos'
*/

function verifyLength(arr) {
    if(arr.length > 5) {
        console.log('Muitos Elementos');
    } else if(arr.length < 5) {
        console.log('Poucos Elementos');
    } else {
        console.log('Tamanho perfeito');
    }
}
let arr1 = [9536,1,23,23,22,42,425,353];
let arr2 = [13,62,45];
let arr3 = [1,2,5,4,6];

verifyLength(arr1); //Muitos Elementos
verifyLength(arr2); //Poucos Elementos
verifyLength(arr3); //Tamanho Perfeito