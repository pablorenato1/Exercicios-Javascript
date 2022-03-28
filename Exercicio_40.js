/* 
Crie uma classe conta bancaria
Propriedades: Saldo da conta corrente, Saldo da poupança e juros da poupança
Criar metodos de deposito e saque, além de metodo para transferir dinheiro da
poupança para conta corrente.
Criar uma conta especial que herda a conta normal, as caracteristicas da conta
especial é que os juros são dobrados em relação a conta normal.
*/

class ContaPadrao {
    constructor(saldo, cp) {
        this.saldo = saldo; // Conta corrente
        this.contaPoupanca = cp; // Conta Poupança
        this.poupancaJuros = 0.8; // Juros da Poupança
    }
    get extrato() {
        return 'Seu saldo é de ' + this.saldo;
    }
    get extratoPoupanca() {
        return 'Seu saldo na poupança é de ' + this.contaPoupanca;
    }
    set depositocc(valor) {
        this.saldo += valor;
    }
    set saquecc(valor) {
        this.saldo -= valor;
    }
    transferirDaCorrente(valor) {
        if (valor > this.saldo) {
            console.log("Saldo insufiente.");
        } else {
            this.saldo -= valor;
            this.contaPoupanca += valor;
        }
    }
    transferirDaPoupanca(valor) {
        if (valor > this.contaPoupanca) {
            console.log("Saldo insufiente.");
        } else {
            this.saldo += valor;
            this.contaPoupanca -= valor;
        }
    }
}

class ContaEspecial extends ContaPadrao {
    constructor(saldo, cp) {
        super(saldo, cp);
        this.poupancaJuros = this.poupancaJuros*2;
    }
}

let Pablo = new ContaPadrao(3000, 5000);

let PabloS = new ContaEspecial(5000,10000);

console.log(Pablo);

Pablo.transferirDaPoupanca(2000);

console.log(Pablo);

console.log(PabloS);

PabloS.transferirDaPoupanca(1000);

console.log(PabloS);

PabloS.transferirDaCorrente(200);

console.log(PabloS);
