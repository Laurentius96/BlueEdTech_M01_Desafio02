const prompt = require('prompt-sync')();
console.clear();

let pointsUs = 0;
let pointsPc = 0;
let numberPlays = 1;
const options = ['', 'Pedra', 'Papel', 'Tesoura'];

console.log('|============= JoKenPô ============|');
console.log('|  Quantas rodadas iremos jogar?   |');
let rounds = +prompt('                 ');
console.log('|==================================|');

for (let i = 1; i <= rounds; i++) {}
