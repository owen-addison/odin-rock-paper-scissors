let pScore = 0, cScore = 0;
let i = 0;

const body = document.querySelector('body');

const score = document.createElement('div');

score.classList.add('scores');


score.textContent = "Player: " + pScore + ", Computer: " + cScore;

body.appendChild(score);


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random() * choices.length)];
};

function playRound(playerSelection, i) {
    const ps = playerSelection.toLowerCase();
    const cs = getComputerChoice();

    const round = [];
    
    // const resultDiv = document.querySelector('.results');
    const welcome = document.querySelector('#welcome');

    if (i === 0) {
        i++;

        welcome.innerText = "Round " + i + ". Player chooses " + ps + ", computer chooses " + cs + ".";
    } else if (i > 0) {
        i++;

        welcome.innerText = "Round " + i + ". Player chooses " + ps + ", computer chooses " + cs + ".";
    }

    round.push(i);
    
    if (ps == "rock" && cs == "rock") {
        round.push("Draw! Choose again.");
        round.push("draw");
        return round;
    } else if (ps == "rock" && cs == "paper") {
        round.push("You lose! Paper beats rock!");
        round.push("computer");
        return round;
    } else if (ps == "rock" && cs == "scissors") {
        round.push("You win! Rock beats scissors!");
        round.push("player");
        return round;
    } else if (ps == "paper" && cs == "rock") {
        round.push("You win! Paper beats rock!");
        round.push("player");
        return round;
    } else if (ps == "paper" && cs == "paper") {
        round.push("Draw! Choose again");
        round.push("draw");
        return round;
    } else if (ps == "paper" && cs == "scissors") {
        round.push("You lose! Scissors beat paper!");
        round.push("computer");
        return round;
    } else if (ps == "scissors" && cs == "rock") {
        round.push("You lose! Rock beats scissors!");
        round.push("computer");
        return round;
    } else if (ps == "scissors" && cs == "paper") {
        round.push("You win! Scissors beat paper!");
        round.push("player");
        return round;
    } else if (ps == "scissors" && cs == "scissors") {
        round.push("Draw! Choose again!");
        round.push("draw");
        return round;
    }
};

function updateScore(roundWinner) {
    if (roundWinner == "player") {
        pScore++;
        score.textContent = "You win! Player: " + pScore + ", Computer: " + cScore;
    } else if (roundWinner == "computer") {
        cScore++;
        score.textContent = "Computer wins! Player: " + pScore + ", Computer: " + cScore;
    } else {
        score.textContent = "Draw! Player: " + pScore + ", Computer: " + cScore;
    }
};



function endGame(result) {
    // Announce result
    alert(result);

    // Reset game
    pScore = 0, cScore = 0, i = 0;
    welcome.innerText = "Go again! First to 5 wins!";
    score.textContent = "Player: " + pScore + ", Computer: " + cScore;
};

let playerSelection, computerSelection, result;


const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        let round = playRound(button.textContent, i);

        i = round[0];

        updateScore(round[2]);

        console.log(i);

        if (pScore == 5) {
            endGame("YOU WIN!");
        } else if (cScore == 5) {
            endGame("YOU LOSE!");
        }
    });
});
