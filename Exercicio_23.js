/*Escrever uma função que recebe uma String e caso o texto tenha
mais do que 10 caracteres, imprimir no console 'Texto muito longo'
caso seja menor imprimir 'Texto dentro do limite'*/

function verifyTexto(text) {
    if(text.length > 10) {
        console.log("Texto muito longo.");
    } else {
        console.log("Texto dentro do limite.")
    }
}
verifyTexto("Oi");
verifyTexto("Sorvete de Flocos");
verifyTexto("Programar");