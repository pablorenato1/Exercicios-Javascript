/*Criar um array com 5 elementos
e fazer uma iteração entre todos eles e imprimir no console os valores
*/

let arr = [5,10,15,20,25];

// Utilizando o metodo forEach
arr.forEach(num => {
    console.log(num);
})
// Utilizando o For
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
