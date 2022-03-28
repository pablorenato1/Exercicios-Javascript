/* Crie um objeto que tenha o endereço do cliente
Deve ter rua, bairro, estado, cidade
Criar metodos para atualizar */

class Cliente {
    constructor(rua, bairro, estado, cidade) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = estado;
        this.estado = cidade;
    }
    set alteraRua(newRua) {
        this.rua = newRua;
    }
    set alteraBairro(newBairro) {
        this.bairro = newBairro;
    }
    set alteraCidade(newCidade) {
        this.cidade = newCidade;
    }
    set alteraEstado(newEstado) {
        this.estado = newEstado;
    }
}

let cliente = new Cliente('Rua J', 'Bairro J', 'Cidade R', 'Estado P');

cliente.alteraRua = 'Rua Nova';
cliente.alteraBairro = 'Jardim São Paulo';
cliente.alteraCidade = 'Recife';
cliente.alteraEstado = 'Pernambuco'

console.log(cliente);