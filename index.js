const prompt = require('prompt-sync')();
console.clear();

let pointsUser = 0;
let pointsPc = 0;
const options = ['', 'Pedra', 'Papel', 'Tesoura'];

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
                console.log(`Você escolheu: ${options[choiceUser]}`);
                console.log(`O PC escolheu: ${options[choicePc]}`);
                console.log(`  - - - - - - - - - - - - - - - -  `);
                console.log(`Usuario tem: ${pointsUser} pontos`);
                console.log(`O PC tem: ${pointsPc} pontos`);
                console.log('|==================================|\n\n');
            } else if (
                (choiceUser === 1 && choicePc === 1) ||
                (choiceUser === 2 && choicePc === 2) ||
                (choiceUser === 3 && choicePc === 3)
            ) {
                console.log('|==================================|');
                console.log('|=== Empate! Ambos não pontuam! ===|');
                console.log('|==================================|');
                console.log(`Você escolheu: ${options[choiceUser]}`);
                console.log(`O PC escolheu: ${options[choicePc]}`);
                console.log(`  - - - - - - - - - - - - - - - -  `);
                console.log(`Usuario tem: ${pointsUser} pontos`);
                console.log(`O PC tem: ${pointsPc} pontos`);
                console.log('|==================================|\n\n');
            } else {
                pointsPc++;
                console.log('|==================================|');
                console.log('|==== O PC ganhou essa rodada! ====|');
                console.log('|==================================|');
                console.log(`Você escolheu: ${options[choiceUser]}`);
                console.log(`O PC escolheu: ${options[choicePc]}`);
                console.log(`  - - - - - - - - - - - - - - - -  `);
                console.log(`Usuario tem: ${pointsUser} pontos`);
                console.log(`O PC tem: ${pointsPc} pontos`);
                console.log('|==================================|\n\n');
            }
        } else {
            console.log('|==================================|');
            console.log('| Escola INVÁLIDA, nova tentativa! |');
            console.log('|==================================|');
            console.log(`|  Faça sua Escolha - Rodada(${i}):   |`);
        }
    }

    console.log('|============= JoKenPô ============|');
    console.log('|     > Escolha (1) para Pedra     |');
    console.log('|     > Escolha (2) para Papel     |');
    console.log('|     > Escolha (3) para Tesoura   |');
    console.log('|==================================|');
    console.log(`|  Faça sua Escolha - Rodada(${i}):   |`);
    let choiceUser = round(+prompt('                '));
}

console.log('User;', pointsUser);
console.log('PC;', pointsPc);
