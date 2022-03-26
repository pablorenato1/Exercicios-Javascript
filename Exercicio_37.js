/* Crie uma classe que simule um carrinho de compras de um e-commerce
Deve ter propriedades dos itens, quantidade total e valor total
Ter metodos de adicionar e remover itens */

class Carrinho {
    constructor(itens, qt, vt) {
        this.itens = itens;
        this.qt = qt;
        this.precoTotal = vt;
    }

    adicionar(newItem) {
        for (let i = 0; i < this.itens.length; i++) {
            if (this.itens[i].id == newItem.id) {
                this.itens[i].qt += newItem.qt;
                this.qt+= newItem.qt;
                this.precoTotal += newItem.preco * newItem.qt;
                return;
            }
        }
        this.itens.push(newItem);
        this.qt+= newItem.qt;
        this.precoTotal+=newItem.preco * newItem.qt;

    }
    remover(item) {
        for (let itemCarrinho in this.itens) {
            if (this.itens[itemCarrinho].id == item.id) {
                let index = this.itens.indexOf(this.itens[itemCarrinho]);
                
                this.qt -= this.itens[itemCarrinho].qt;
                this.precoTotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qt;

                this.itens.splice(index, 1);
            }
        }
    }
}

let carrinho = new Carrinho([{
    id: 01,
    nome: 'Memoria Ram 8gb',
    qt:1,
    preco: 120
}, {
    id:02,
    nome: 'Placa de video',
    qt:1,
    preco:4000
}, {
    id:03,
    nome: 'Placa mãe',
    qt:1,
    preco:700
}],3,4820);


console.log(carrinho);

carrinho.adicionar({id:4,nome:'mouse',qt:3,preco: 140})
    
console.log(carrinho)

carrinho.remover({id:4,nome:'mouse',qt:3,preco: 140});
console.log(carrinho)