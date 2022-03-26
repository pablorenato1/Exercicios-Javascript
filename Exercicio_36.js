/* Criar uma classe que simule uma conta no banco
Deve conter a propriedade saldo e metodo de deposito e saque */

class Conta {
    constructor(saldo) {
        this.saldo = saldo;
    }
    get extrato() {
        return 'Seu saldo é de ' + this.saldo;
    }
    set deposito(valor) {
        this.saldo += valor;
    }
    set saque(valor) {
        this.saldo -= valor;
    }
}

let Pablo = new Conta(3000);

console.log(Pablo.extrato);
Pablo.deposito = 300;
console.log(Pablo.extrato);
Pablo.saque = 1000;
console.log(Pablo.extrato);