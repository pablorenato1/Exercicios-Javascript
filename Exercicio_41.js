/* Criar uma regex que aceite só letras maiusculas */

const validarString = /[^a-z][A-Z]+/;

console.log(validarString.test("Pablo"));
console.log(validarString.test("PABLO"));
console.log(validarString.test("PaBlO"));
console.log(validarString.test("MAIUSCULOS"));