/* Escrever uma função que detecte o tipo de dado passado
e retornar um texto para cada tipo */

function verificarTipo(item) {

    if(typeof item == 'boolean') {
        console.log(`O ${item} é Boolean`);
    } else if(typeof item == 'number') {
        console.log(`O ${item} é Number`);
    } else if(typeof item == "string") {
        console.log(`O ${item} é String`);
    } 
}

verificarTipo(15);
verificarTipo(16.5);
verificarTipo(true);
verificarTipo('Text')
