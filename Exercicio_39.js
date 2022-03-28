/* Criar uma classe que simule um carro
Propriedades: Marca, cor, gasolina restante
Criar metodos de dirigir o carro que vá diminuindo a gasolina gradativamente
e um para abastecer(que ira aumentar a gasolina).
*/

class Carro {
    constructor(marca, cor, gas) {
        this.marca = marca;
        this.cor = cor;
        this.gas = gas;
        this.gasPKm = 0.5; // Gasto de gasolina por Km (1:2)
        this.gasPrice = 5.70; // por litro
    }

    dirigir(km) {
        let percorrido = 0;
        for (let g=km;g > 0; g--) {
            if(this.gas == 0) {
                console.log('Gasolina acabou!')
                break
            };
            percorrido++;
            this.gas -= this.gasPKm;
        }
        console.log(`Foi percorrido ${percorrido} Km.`)
    }

    abastecer(valor) {
        let newGas = Number((valor/this.gasPrice).toFixed(2));
        this.gas = this.gas + newGas;
        console.log('Foi abastecido '+newGas+' Litros.');
    }
}

let carro = new Carro('Opala', 'preto', 80);

//console.log(carro);

carro.dirigir(70); // dirigir 100 km

carro.abastecer(90); // Abastecer 90 reais

console.log(`Tem ${carro.gas.toFixed(2)} litros no tanque.`);