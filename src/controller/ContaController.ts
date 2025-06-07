import { colors } from './../util/Colors';
import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {

    private listaContas: Array<Conta> = new Array<Conta>()
    numero: number = 0

    procurarPorNumero(numero: number): void {
        let buscarConta = this.buscarNoArray(numero);

        if (buscarConta !== null) {
            buscarConta.visualizar();
        } else {
            console.log(colors.fg.red, `\nA conta numero ${numero} não foi encontrada`, colors.reset)
        }
    }

    listarTodas(): void {
        for (let conta of this.listaContas){
        conta.visualizar() ;3 
    };

    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.cyan, `\nA conta numero ${conta.numero} foi criada com sucesso!!`, colors.reset)
    }

    atualizar(conta: Conta): void {
        let buscarConta = this.buscarNoArray(conta.numero)

        if (buscarConta !== null) {
            this.listaContas[this.listaContas.indexOf(buscarConta)] = conta;
            console.log(colors.fg.magentastrong, `\nA conta numero ${conta.numero} foi atualizada com sucesso!!`, colors.reset)
        } else {
            console.log(colors.fg.red, `\n A conta numero ${conta.numero} nao foi encontrada!!`, colors.reset)
        }

    }

    deletar(numero: number): void {
        let buscarConta = this.buscarNoArray(numero);

        if (buscarConta !== null) {
            this.listaContas.splice(this.listaContas.indexOf(buscarConta),1)
            console.log(colors.fg.redstrong, `\nA conta numero ${numero} foi apagada com sucesso!!`, colors.reset)
        } else {
            console.log(`\nA conta numero ${numero} não foi encontrada`, colors.reset)
        }

    }

    sacar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta !== null) {

            if (conta.sacar(valor) == true){
                console.log(colors.fg.red, `\nO saque na conta ${numero} no valor de R$${valor} foi efetuado com sucesso!!`, colors.reset);
            }
        } else {
            console.log(colors.fg.red, `\nA conta numero ${numero} não foi encontrada!!`, colors.reset)
        }



    }

    depositar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);

        if (conta !== null) {
            conta.depositar(valor);
            console.log(colors.fg.red, `\nO deposito na conta ${numero} no valor de R$${valor} foi efetuado com sucesso`, colors.reset)
        } else {
            console.log(colors.fg.red, `\nA conta numero ${numero} nao foi encontrada`, colors.reset);
        }

    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem);
        let contaDestino = this.buscarNoArray(numeroDestino);

        if (contaOrigem !== null && contaDestino !== null) {
            if (contaOrigem.sacar(valor) == true){
                contaDestino.depositar(valor);
                console.log(colors.fg.red, `\nA transferencia no valor de R$${valor} da conta ${numeroOrigem} para ${numeroDestino} foi realizada com sucesso!!`, colors.reset)
            }
        } else {
            console.log(colors.fg.red, `\nA conta numero ${numeroOrigem} e/ou a conta ${numeroDestino} não foram encontradas!!`, colors.reset)
        }

    }

    // Gerar numero da conta
    public gerarNumero(): number {
        return ++ this.numero;
    }

    // Verificar existencia de uma conta 
    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if (conta.numero === numero){
                return conta;
            }
                
        }

        return null;

    }
    
}