console.log("Bem Vindo")
class contaBancaria{
    constructor(agencia, numero, tipo, nome){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.nome = nome;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }
    
    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo){
            return "Operação negada"
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }
    
    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo
    }
}

class contaCorrente extends contaBancaria {
    constructor(agencia, numero, nome, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this.nome = nome;
        this.cartaoCredito = cartaoCredito;
    }
 get cartaoCredito() {
    return this._cartaoCredito
 }
 
 set cartaoCredito(valor) {
    this._cartaoCredito = valor
 }
}

class contaPoupanca extends contaBancaria {
    constructor(agencia, numero, nome)  {
        super(agencia, numero, nome);
        this.tipo = 'poupança';   
        this.nome = nome;
 }
    sacar(valor){
    if(valor > this.saldo * 0.50){
        return "Operação Negada"
    }

    return this._saldo = this._saldo - valor
 }
}

class contaUniversitaria extends contaBancaria {
    constructor(agencia, numero, nome) {
        super(agencia, numero, nome);
        this.tipo = 'universitaria';
        this.nome = nome;
 }

 sacar(valor){
    if(valor > 500){
        return "Operação Negada"
    }

   return this._saldo = this._saldo - valor
 }
}
