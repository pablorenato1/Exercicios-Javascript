/* Criar uma regex que valide endereços de IP
Exemplo: 127.0.0.1
*/

const validarIP = /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/;

console.log(validarIP.test("80.22.134.243"));
console.log(validarIP.test("24.5.210.144"));
console.log(validarIP.test("77.91.124.17"));
console.log(validarIP.test("225.148.206.14"));
console.log(validarIP.test("2232.36232.3232.923"));
console.log(validarIP.test("0.0.0.0"));
console.log(validarIP.test("2.36.9"));
console.log(validarIP.test("236329"));