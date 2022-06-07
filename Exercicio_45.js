/* criar uma regex que valide o nome de usuario no sistema
Regras: Aceitar letras de a-z, _ e -, numeros de 0-9, minimo 3 e max 16 
*/

const validarUserName = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validarUserName.test("pablo123sads_"));
console.log(validarUserName.test("123456789101112322"));
console.log(validarUserName.test("23"));
console.log(validarUserName.test("pablo12-sads_"));