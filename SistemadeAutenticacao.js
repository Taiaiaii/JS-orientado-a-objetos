// ser autenticavel significa ter um metodo autenticar

export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        if (SistemaAutenticacao.ehAutenticav(autenticavel)) {

            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel) {
       return "autenticar" in autenticavel && 
        autenticavel.autenticar instanceof Function;
    }
}