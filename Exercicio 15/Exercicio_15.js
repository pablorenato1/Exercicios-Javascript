let numero = 759;
let auten = true;
let count = 0;

for (let x = 2; x < numero/2; x++) {
    count++; //ver quantas vezes o loop é executado
    if ((numero%x)==0) {
        auten = false;
        break
    }
}

console.log(count);
if (auten && numero != 0 && numero != 1) {
    console.log(`O número ${numero} é Primo`);
} else {
    console.log(`O número ${numero} NÃO é Primo`);
}
