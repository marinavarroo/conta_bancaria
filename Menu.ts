import readlinesync = require("readline-sync");

export function main() {
    let opcao: number;

    while (true) {
        console.log("╔══════════════════════════════════════════════╗");
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
        console.log("╚══════════════════════════════════════════════╝");

        opcao = readlinesync.questionInt("Escolha uma opcao: ");

        if (opcao == 9) {
            console.log("\nBanco Nova Era - O banco do futuro!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("Criar Conta");
                break;
            case 2:
                console.log("Listar todas as Contas");
                break;
            case 3:
                console.log("Buscar Conta por Número");
                break;
            case 4:
                console.log("Atualizar Dados da Conta");
                break;
            case 5:
                console.log("Apagar Conta");
                break;
            case 6:
                console.log("Sacar");
                break;
            case 7:
                console.log("Depositar");
                break;
            case 8:
                console.log("Transferir valores entre Contas");
                break;
            default:
                console.log("Opção inválida! Tente novamente.");
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

main();
