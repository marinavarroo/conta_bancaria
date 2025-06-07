import readlinesync = require('readline-sync');
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaController } from './src/controller/ContaController';

export function main() {

    // Classe ContaController
    let contas: ContaController = new ContaController();

    // Variaveis aux
    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupanca']


    while (true) {
        console.log(colors.bg.black, colors.fg.magenta, '');
        console.log('╔══════════════════════════════════════════════╗');
        console.log('║             🏦 Banco Nova Era 🏦             ║');
        console.log('╠══════════════════════════════════════════════╣');
        console.log('║                                              ║');
        console.log('║ 1 - Criar Conta                              ║');
        console.log('║ 2 - Listar todas as Contas                   ║');
        console.log('║ 3 - Buscar Conta por Número                  ║');
        console.log('║ 4 - Atualizar Dados da Conta                 ║');
        console.log('║ 5 - Apagar Conta                             ║');
        console.log('║ 6 - Sacar                                    ║');
        console.log('║ 7 - Depositar                                ║');
        console.log('║ 8 - Transferir valores entre Contas          ║');
        console.log('║ 9 - Sair                                     ║');
        console.log('║                                              ║');
        console.log('╚══════════════════════════════════════════════╝', colors.reset);

        opcao = readlinesync.questionInt('Escolha uma opcao: ');

        if (opcao == 9) {
            console.log(colors.fg.magentastrong, '\nBanco Nova Era - O banco do futuro!');
            sobre();
            console.log(colors.reset, '');
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, 'Criar Conta', colors.reset);

                console.log('Digite o numero da agencia: ');
                agencia = readlinesync.questionInt('');

                console.log('Digite o nome do titular da conta: ');
                titular = readlinesync.question('');

                console.log('Informe o tipo de conta: ');
                tipo = readlinesync.keyInSelect(tipoContas, '', {cancel: false}) + 1;                

                console.log('\nDigite o saldo da conta (R$): ');
                saldo = readlinesync.questionFloat('');

                switch (tipo) {
                    case 1: 
                        console.log('Digite o limite da conta (R$): ');
                        limite = readlinesync.questionFloat('');
                        contas.cadastrar( new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
                        break;

                    case 2: 
                        console.log('Digite o dia do aniversario da Poupança: ');
                        aniversario = readlinesync.questionInt('');
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                        break;
                }

                keyPress();
                break;

            case 2:
                console.log(colors.fg.whitestrong, 'Listar todas as Contas', colors.reset);

                contas.listarTodas();

                keyPress();
                break;

            case 3:
                console.log(colors.fg.whitestrong, 'Buscar Conta por Número', colors.reset);

                console.log('Digite o numero da conta: ');
                numero = readlinesync.questionFloat('');
                contas.procurarPorNumero(numero)

                keyPress();
                break;

            case 4:
                console.log(colors.fg.whitestrong, 'Atualizar Dados da Conta', colors.reset);

                console.log('Digite o numero da conta que deseja atualizar: ');
                numero = readlinesync.questionInt('');

                let conta = contas.buscarNoArray(numero);

                if (conta !== null) {
                    console.log('Digite o numero da agencia: ')
                    agencia =  readlinesync.questionInt('');

                    console.log('Digite o nome do titular da conta: ')
                    titular = readlinesync.question('');

                    tipo = conta.tipo;

                    console.log('\nDigite o saldo da conta (R$): ');
                    saldo = readlinesync.questionInt('');

                    switch (tipo) {
                        case 1:
                            console.log('Digite o limite da conta (R$): ');
                            limite = readlinesync.questionInt('');
                            contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));

                            break;
                            
                        case 2:
                            console.log('Digite o dia do aniversario da conta poupanca: ');
                            aniversario = readlinesync.questionInt('');
                            contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, aniversario));

                            break;
                    } 
                } else {
                        console.log(colors.fg.red, `\n Conta numero ${numero} não foi encontrada`, colors.reset)
                    }

                keyPress();
                break;

            case 5:
                console.log(colors.fg.whitestrong, 'Apagar Conta', colors.reset);

                console.log('Digite o numero da conta: ');
                numero = readlinesync.questionInt('');
                contas.deletar(numero);

                keyPress();
                break;

            case 6:
                console.log(colors.fg.whitestrong, 'Sacar', colors.reset);

                console.log('\nDigite o numero da conta: ');
                numero = readlinesync.questionInt('');

                console.log('\nDigite o valor do saque (R$): ')
                valor = readlinesync.questionInt('');

                contas.sacar(numero, valor);

                keyPress();
                break;

            case 7:
                console.log(colors.fg.whitestrong, 'Depositar', colors.reset);

                console.log('Digite o numero da conta: ');
                numero = readlinesync.questionInt('');

                console.log('\nDigite o valo rdo deposito (R$): ')
                valor = readlinesync.questionInt('');

                contas.depositar(numero, valor);

                keyPress();
                break;

            case 8:
                console.log(colors.fg.whitestrong, 'Transferir valores entre Contas', colors.reset);

                console.log('Digite o numero da conta de origem: ');
                numero = readlinesync.questionInt('');

                console.log('Digite o numero da conta de destino: ');
                numeroDestino = readlinesync.questionInt('');

                console.log('Digite o valor do deposito (R$): ');
                valor = readlinesync.questionFloat('');

                contas.transferir(numero, numeroDestino, valor)
                
                keyPress();
                break;

            default:
                console.log(colors.fg.whitestrong, 'Opção inválida! Tente novamente.', colors.reset);
                
                keyPress();
                break;
        }
    }
}

export function sobre() {
    console.log('\n══════════════════════════════════════════════');
    console.log(' Banco Nova Era - O banco do futuro!          ');
    console.log(' Desenvolvido por: Maria Navarro              ');
    console.log(' Versão: 1.0.0                                ');
    console.log(' Generation Brasil - mariacdnavarro@gmail.com ');
    console.log(' github.com/marinavarroo                      ');
    console.log('══════════════════════════════════════════════');
}

function keyPress(): void {
    console.log(colors.reset, '');
    console.log('\nPressione enter para continuar...');
    readlinesync.prompt();
}

main();
