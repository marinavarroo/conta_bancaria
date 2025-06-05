import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';

export function main() {
    
    let opcao: number;

    while (true) {
        console.log(colors.bg.black, colors.fg.magenta,
                    "");
        console.log("╔══════════════════════════════════════════════╗")
        console.log("║             🏦 Banco Nova Era 🏦             ║");
        console.log("╠══════════════════════════════════════════════╣");
        console.log("║                                              ║");    
        console.log("║ 1 - Criar Conta                              ║");
        console.log("║ 2 - Listar todas as Contas                   ║");
        console.log("║ 3 - Buscar Conta por Número                  ║");
        console.log("║ 4 - Atualizar Dados da Conta                 ║");
        console.log("║ 5 - Apagar Conta                             ║");
        console.log("║ 6 - Sacar                                    ║");
        console.log("║ 7 - Depositar                                ║");
        console.log("║ 8 - Transferir valores entre Contas          ║");
        console.log("║ 9 - Sair                                     ║");
        console.log("║                                              ║");
        console.log("╚══════════════════════════════════════════════╝", colors.reset);

        opcao = readlinesync.questionInt("Escolha uma opcao: ");

        if (opcao == 9) {
            console.log(colors.fg.magentastrong,
                "\nBanco Nova Era - O banco do futuro!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "Criar Conta", colors.reset);

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "Listar todas as Contas", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "Buscar Conta por Número", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "Atualizar Dados da Conta", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "Apagar Conta", colors.reset);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong,
                    "Sacar", colors.reset);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong,
                    "Depositar", colors.reset);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong,
                    "Transferir valores entre Contas", colors.reset);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong,
                    "Opção inválida! Tente novamente.", colors.reset);

                keyPress()
                break;
        }
    }
}

export function sobre() {
    console.log("\n══════════════════════════════════════════════");
    console.log(" Banco Nova Era - O banco do futuro!          ");
    console.log(" Desenvolvido por: Maria Navarro              ");
    console.log(" Versão: 1.0.0                                ");
    console.log(" Generation Brasil - mariacdnavarro@gmail.com ");
    console.log(" github.com/marinavarroo                      ");
    console.log("══════════════════════════════════════════════");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();
