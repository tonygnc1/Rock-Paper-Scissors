const message = document.querySelector('.message');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('button');
let winner = [0, 0];
console.log(buttons);
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', playGame);
}

function playGame(e) {
   let playerSelection = e.target.innerText;
    let computerSelection = Math.random();

    if (computerSelection < 0.34) {
        computerSelection = 'Rock';
    } else if (computerSelection <= 0.67) {
        computerSelection = 'Paper';
    } else {
        computerSelection = 'Scissors';
    }
    console.log(playerSelection, computerSelection);
//     let result = checkWinner(playerSelection, computerSelection);
//     console.log(result);
//     if(result == 'Player') {
//         result += 'wins!';
//         winner[0]++; 
//     }else if(result == 'Computer') {
//         result += 'wins!';
//         winner[1]++;
//     }
//     score.innerHTML = 'Player 1[' +winner[0] + '] Player 2 [' + winner[1] + ']';
// }

// function checkWinner(pl, co) {
//     if(pl === co) {
//         return 'Draw';
//     }
//     if(pl === 'Rock') {
//         if(co === 'Paper') {
//             return 'Computer';
//         } else {
//             return 'Player';
//         }
//     }
//     if(pl === 'Paper') {
//         if(co === 'Scissors') {
//             return 'Computer';
//         } else {
//             return 'Player';
//         }
//     }
// }
