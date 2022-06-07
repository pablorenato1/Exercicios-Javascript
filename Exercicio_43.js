/* Criar uma Regex que aceitie a seguinte expressão
"Marca: NomeDaMarca" 
Tamanho do nome da marca, pode variar.
Mas serão dentre Nike, Adidas, Puma, Asics
*/

const validarMarca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(validarMarca.test("Marca: Nike"));
console.log(validarMarca.test("Nike"));
console.log(validarMarca.test("Marca: "));
console.log(validarMarca.test("Marca: Paralelepipedo"));
console.log(validarMarca.test("Marca: Adidas"));