/*Criar um array a partir de uma frase
imprimir cada elemento desse array no console
*/

let text = 'JavaScript look so cool';

let arr = text.split(" ");

for(let i=0;i<arr.length;i++) {
    console.log(arr[i]);
}