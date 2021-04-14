import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js"
import {Conta} from "./Conta.js"

const cliente1 = new Cliente("Ricardo", 11122233309);


const contaRicardo = new ContaCorrente(1001, cliente1);
contaRicardo.depositar(500);
contaRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)


console.log(contaPoupanca);
console.log(contaRicardo);



