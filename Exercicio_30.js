/*Criar um array contendo 5 nomes, incluindo o de quem criou o script
verificar se o nome existe no array
caso exista, confirmar atraves de uma mensagem no console
*/

let nomes = ['João', 'Larissa', 'Maikon', 'Pablo', 'Matheus'];

if(nomes.includes('Pablo')===true) {
    console.log('O nome foi encontrado.');
} else {
    console.log('O nome não foi encontrado.')
}
