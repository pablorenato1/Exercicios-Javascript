/*Escreva uma função que receba a idade e caso a idade seja maior que
18, será impresso um texto no console, informando que pode se matricular
na autoescola, e caso seja menor um texto informando que não é permitido */

function verificacaoIdade(idade) {
    if(idade >= 18) {
        console.log("O individuo pode se matricular na autoescola.")
    } else {
        console.log("O individuo não pode se matricular, devido a idade ser menor de 18 anos.")
    }
}
verificacaoIdade(18);
verificacaoIdade(15);