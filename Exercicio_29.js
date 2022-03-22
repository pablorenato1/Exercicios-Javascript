/*Utilizando o objeto do exercicio anterior, adicione a propriedade
janela no Onibus, com o valor de 20,
deletar a propriedade rodas
e imprimir a propriedade janela no console
*/

let onibus = {
    rodas: 8,
    limiteDePassageiros:40,
    portas:3
}


delete onibus.rodas;
console.log(onibus.rodas); //Removido

onibus.janelas = 20;
console.log(onibus.janelas);
console.log(onibus);