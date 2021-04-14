import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const cliente2 = new Cliente("Alice", 88822233309);

const contaRicardo = new ContaCorrente(101, cliente1);
contaRicardo.depositar(500);

const conta2 = new ContaCorrente(102, cliente2);


contaRicardo.transferir(200, conta2);

console.log(conta2, contaRicardo);
console.log(ContaCorrente.numeroDeContas);


