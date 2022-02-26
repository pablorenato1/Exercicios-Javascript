var idade = 15;
var cnh = true;

if (cnh == true && idade >= 18) {
    console.log("Você pode dirigir");
} else if (idade < 18 && cnh == false) {
    console.log(`Você não pode dirigir`);
} else {
    console.log("Você não pode dirigir");
}