
// let ano = /\d\d\d\d/;
// console.log("Ano:");
// console.log(ano.test("03"));    //False
// console.log(ano.test("1998"));  //True
// console.log(ano.test("6"));     //False
// console.log(ano.test("asda"));  //False
// console.log(ano.test(" "));     //False

// console.log("Email:");
// let nome = /Pablo/;
// console.log(nome.test('PabloEmail@email.com.br')); //True

// console.log("Estado:");
// let estado = /\w\w/;
// console.log(estado.test("Pernambuco") && "Pernambuco".length == 2); //False
// console.log(estado.test("PE"));                                     //True
// console.log(estado.test("123") && "123".length == 2);               //False
// console.log(estado.test("1"));                                      //False

// console.log("Senha:");
// let newPassword = /\w\w\w\w\w\w\w\w/;
// console.log(newPassword.test("1234567"));   //False
// console.log(newPassword.test("12345678"));  //True
// console.log(newPassword.test("123456789")); //True
// console.log(newPassword.test("1a2b3c4d5e"));//True
// // Verificar se os caracteres estão de acordo com os pedidos e ter 8 caracteres
// console.log(newPassword.test("1a2b3c4d5e") && "1a2b3c4d5e".length == 8);//False

// console.log("Estado2:");
// let estado2 = /[^gh]/;
// console.log(estado2.test("asdasdas gh"));//True
// console.log(estado2.test("gh"));        //False
// console.log(estado2.test("g"));         //False
// console.log(estado2.test("h"));         //False

// console.log("Senha2:");
// let newPassword2 = /\w\w\w\w\w\w\w\w+/;
// console.log(newPassword2.test("1234567"));      //False
// console.log(newPassword2.test("12345678"));     //True
// console.log(newPassword2.test("123456789"));    //True
// console.log(newPassword2.test("1a2b3c4d5e"));   //True
// console.log(newPassword2.test("1a2b3c4d5e"));   //True

// console.log("Telefone:");
// let Telefone = /\d{4,5}-\d{4}/;
// console.log(Telefone.test("0000-0000"));    //True
// console.log(Telefone.test("00000-0000"));   //True
// console.log(Telefone.test("00-0000"));      //False
// console.log(Telefone.test("0000000-000000"));  //True
// console.log(Telefone.test("0000-000"));     //False

//========================= Uso do .exec ============================

function testExecFunction() {

    console.log("Usando .exec()");

    console.log("Avaliação do '.'");
    console.log(/./.exec(" "));                  // True
    console.log(/./.exec("12312312"));           // True 
    console.log(/./.exec("asdas312312"));        // True
    console.log(/./.exec("asodnasndasdas"));     // True

    console.log("Avaliação do 'd'");
    console.log(/\d/.exec(" "));                  // False // Null
    console.log(/\d/.exec("12312312"));           // True 
    console.log(/\d/.exec("asdas312312"));        // True
    console.log(/\d/.exec("asodnasndasdas"));     // False // Null

    console.log("Avaliação do 'w'");
    console.log(/\w/.exec(" "));                  // False // Null
    console.log(/\w/.exec("12312312"));           // True 
    console.log(/\w/.exec("asdas312312"));        // True
    console.log(/\w/.exec("asodnasndasdas"));     // True

    console.log("Avaliação do 's'");
    console.log(/\s/.exec(" "));                  // True
    console.log(/\s/.exec("12312312"));           // False // Null
    console.log(/\s/.exec("asdas312312"));        // False // Null
    console.log(/\s/.exec("asodnasndasdas"));     // False // Null

    console.log("Avaliação do 'D'");
    console.log(/\D/.exec(" "));                  // True
    console.log(/\D/.exec("12312312"));           // False // Null
    console.log(/\D/.exec("asdas312312"));        // True
    console.log(/\D/.exec("asodnasndasdas"));     // True

    console.log("Avaliação do 'W'");
    console.log(/\W/.exec(" "));                  // True
    console.log(/\W/.exec("12312312"));           // False // Null
    console.log(/\W/.exec("asdas312312"));        // False // Null
    console.log(/\W/.exec("asodnasndasdas"));     // False // Null

    console.log("Avaliação do 'S'");
    console.log(/\S/.exec(" "));                  // False // Null
    console.log(/\S/.exec("12312312"));           // True 
    console.log(/\S/.exec("asdas312312"));        // True
    console.log(/\S/.exec("asodnasndasdas"));     // True

}
// testExecFunction();

//======================= Choice pattern ============================

// Validando dominio
console.log("========== Validar Dominio ==========");
let validarDominio = /www.\w+.com|com.br|gov.br/;

console.log(validarDominio.test("www.google.com"));     //true
console.log(validarDominio.test("www.test"));           //false
console.log(validarDominio.test("teste.com"));          //false
console.log(validarDominio.test("www.udemy.com"));      //true
console.log(validarDominio.test("www.gov.br"));         //true
console.log(validarDominio.test("www.test.gov.br"));    //true

console.log("========== Validar Email ==========");

let validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("teste@gmail.com"));   
console.log(validarEmail.test("teste1@gmail.com.br"));         
console.log(validarEmail.test("teste2@outlook.com"));
console.log(validarEmail.test("teste2@yahoo.com.br"));
console.log(validarEmail.test("teste2@gmail"));

console.log("========== Validar Data ==========");

const dataDeNascimento = /[0-9]{1,2}[/][0-9]{1,2}[/][0-9]{2,4}/;

console.log(dataDeNascimento.test("03/12/1998"));
console.log(dataDeNascimento.test("5/1/22"));
console.log(dataDeNascimento.test("2/5/2001"));
console.log(dataDeNascimento.test("123/231/2322"));
console.log(dataDeNascimento.test("23/45/1"));
console.log(dataDeNascimento.test("53/234/324"));
console.log(dataDeNascimento.test("23/43/19598"));
console.log(dataDeNascimento.test("52/2/2006"));
console.log(dataDeNascimento.test("6/0/14"));
