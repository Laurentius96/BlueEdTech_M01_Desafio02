const prompt = require('prompt-sync')();
console.clear();

let pointsUser = 0;
let pointsPc = 0;
const options = ['', 'Pedra', 'Papel', 'Tesoura'];

while (true) {
    console.log('|============= JoKenPô ============|');
    console.log('|  Quantas rodadas iremos jogar?   |');
    let rounds = +prompt('                 ');
    console.log('|==================================|');

    for (let i = 1; i <= rounds; i++) {
        function round(choiceUser) {
            if (choiceUser === 1 || choiceUser === 2 || choiceUser === 3) {
                let choicePc = Math.floor(Math.random() * 3 + 1);
                if (
                    (choiceUser === 1 && choicePc === 3) ||
                    (choiceUser === 2 && choicePc === 1) ||
                    (choiceUser === 3 && choicePc === 2)
                ) {
                    pointsUser++;
                    console.log('|==================================|');
                    console.log('|=== Você ganhou essa rodada!!! ===|');
                    console.log('|==================================|');
                    console.log(`      Você escolheu: ${options[choiceUser]}`);
                    console.log(`      O PC escolheu: ${options[choicePc]}`);
                    console.log(`  - - - - - - - - - - - - - - - -  `);
                    console.log(`      Usuario tem: ${pointsUser} pontos`);
                    console.log(`      O PC tem: ${pointsPc} pontos`);
                    console.log('|==================================|\n\n\n');
                } else if (
                    (choiceUser === 1 && choicePc === 1) ||
                    (choiceUser === 2 && choicePc === 2) ||
                    (choiceUser === 3 && choicePc === 3)
                ) {
                    console.log('|==================================|');
                    console.log('|=== Empate! Ambos não pontuam! ===|');
                    console.log('|==================================|');
                    console.log(`       Você escolheu: ${options[choiceUser]}`);
                    console.log(`       O PC escolheu: ${options[choicePc]}`);
                    console.log(`  - - - - - - - - - - - - - - - -  `);
                    console.log(`       Usuario tem: ${pointsUser} pontos`);
                    console.log(`       O PC tem: ${pointsPc} pontos`);
                    console.log('|==================================|\n\n\n');
                } else {
                    pointsPc++;
                    console.log('|==================================|');
                    console.log('|==== O PC ganhou essa rodada! ====|');
                    console.log('|==================================|');
                    console.log(`       Você escolheu: ${options[choiceUser]}`);
                    console.log(`       O PC escolheu: ${options[choicePc]}`);
                    console.log(`  - - - - - - - - - - - - - - - -  `);
                    console.log(`       Usuario tem: ${pointsUser} pontos`);
                    console.log(`       O PC tem: ${pointsPc} pontos`);
                    console.log('|==================================|\n\n\n');
                }
            } else {
                console.log('|==================================|');
                console.log('| Escola INVÁLIDA, nova tentativa! |');
                console.log('|==================================|');
                console.log(`|  Faça sua Escolha - Rodada(${i}):   |`);
                choiceUser = round(+prompt('                 '));
            }
        }

        console.log('|============= JoKenPô ============|');
        console.log('|     > Escolha (1) para Pedra     |');
        console.log('|     > Escolha (2) para Papel     |');
        console.log('|     > Escolha (3) para Tesoura   |');
        console.log('|==================================|');
        console.log(`|  Faça sua Escolha - Rodada(${i}):   |`);
        let choiceUser = round(+prompt('                 '));
    }

    if (pointsUser > pointsPc) {
        console.log('|==================================|');
        console.log('| Parabêns, você ganhou o JoKenPô! |');
        console.log('|==================================|');
    } else if (pointsUser < pointsPc) {
        console.log('|==================================|');
        console.log('|      Que pena! O PC ganhou...    |');
        console.log('|==================================|');
    } else {
        console.log('|==================================|');
        console.log('|      Você e o PC empataram!!     |');
        console.log('|==================================|');
    }

    console.log('|      Quer jogar novamente?       |');
    console.log('|        Digite: (1) p/ SIM        |');
    console.log('|        Digite: (2) p/ NÃO        |');
    console.log('|==================================|');
    choiceUser = +prompt('                 ');
    console.log('|==================================|');

    if (choiceUser === 1) {
        console.log('|            Novo jogo!            |');
        console.log('|==================================|\n\n');
        pointsPc = 0;
        pointsUser = 0;
        continue;
    } else {
        console.log('|           Fim de jogo!           |');
        console.log('|==================================|\n\n');
        break;
    }
}
