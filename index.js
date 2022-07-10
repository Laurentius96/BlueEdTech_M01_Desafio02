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
                (choiceUser === 3 && choicePC === 2)
            ) {
                pointsUser++;
                console.log('|==================================|');
                console.log('|=== Você ganhou essa rodada!!! ===|');
                console.log('|==================================|');
                
            }
        }
    }

    console.log('|============= JoKenPô ============|');
    console.log('|     > Escolha (1) para Pedra     |');
    console.log('|     > Escolha (2) para Papel     |');
    console.log('|     > Escolha (3) para Tesoura   |');
    console.log('|==================================|');
    console.log(`|  Faça sua Escolha - Rodada(${i}):   |`);
    let choiceUser = +prompt(+prompt('                '));
}
