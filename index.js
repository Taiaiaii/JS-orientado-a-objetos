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
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente,"123");

console.log(diretorEstaLogado, gerenteEstaLogado);



