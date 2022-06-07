/* Aceitar Strings que somente terminem com 'ID' */

const validarOFinal = /\w+ID\b/;

console.log(validarOFinal.test("testeID"));
console.log(validarOFinal.test("TesteSemID"));
console.log(validarOFinal.test("123312312ID"));
console.log(validarOFinal.test("Teste Teste ID"));
console.log(validarOFinal.test("ID"));
console.log(validarOFinal.test("abobrinha"));
console.log(validarOFinal.test("123312312"));
