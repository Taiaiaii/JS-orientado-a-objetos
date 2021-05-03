import {
    Cliente
} from "./Cliente.js";
import {
    Gerente
} from "./funcionario/gerente.js";
import {
    Diretor
} from "./funcionario/diretor.js";
import {SistemaAutenticacao} from "./SistemadeAutenticacao.js";

const diretor = new Diretor("rodrigo", 1000, 1234567);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("ricardo", 5000, 9876543);
gerente.cadastrarSenha("123")

const cliente = new Cliente ("lais", 789789789, "456");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente,"123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);



