/*Escrever uma função que ao receber um número decremente de 1 em 1
atraves de um loop e imprimir no console somente os números pares */

function contador(num) {
    for(let x=num;x>0;x--) {
        if((x%2)==0) {
            console.log(x)
        }
    }
}

contador(19);