import {
    Cliente
} from "./Cliente.js"

import {Conta} from "./Conta.js"

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;
    
    constructor(cliente, agencia) {
        super(0, agencia, cliente)
        ContaCorrente.numeroDeContas += 1;

    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }
    get cliente() {
        return this._cliente;
    }
    get saldo() {
        return this._saldo;
    }


}