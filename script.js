function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random() * choices.length)];
};

function playRound(playerSelection, computerSelection, i, round) {
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection;
    // round = [];

    console.log("Round " + (i + 1) + ". Player chooses " + ps + ", computer chooses " + cs + ".");

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
    } else if (ps != "rock" && ps != "papers" && ps != "scissors") {
        round.push("Error! Invalid selection, choose again.");
        round.push("error");
        return round;
    }
};

function game() {
    let pScore = 0, cScore = 0;

    for (let i = 0; i < 5; i++) { 
        playerSelection = prompt("What's your choice?");
        computerSelection = getComputerChoice();
        let round = [];

        playRound(playerSelection, computerSelection, i, round);

        console.log(round[0]);

        if (round[1] == "player") {
            pScore++;
        } else if (round[1] == "computer") {
            cScore++;
        } else if (round[1] == "error") {
            i--;
        } else if (round[1] == "draw") {
            i--;
        }

        if (pScore >= 3) {
            break;
        } else if (cScore >= 3) {
            break;
        }
    }

    console.log("You scored " + pScore + ". The computer scored " + cScore + ".");

    if (pScore < cScore) {
        result = "You lose!";
    } else if (pScore > cScore) {
        result = "You win!";
    }

    return result;
};

let playerSelection, computerSelection, result;
// let round = [];

console.log(game());

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();

// console.log(playRound(playerSelection, computerSelection));


/* PSEUDOCODE

- Convert playerSelection (PS) string to lower case
- If PS is "rock" and computerSelection (CS) is "rock" return "Draw! Choose again!"
- If PS is "rock" and CS is "paper" return "You lose! Paper beats rock!"
- If PS is "rock" and CS is "scissors" return "You win! Rock beats scissors!"
- If PS is "paper" and CS is "rock" return "You win! Paper beats rock!"
- If PS is "paper" and CS is "paper" return "Draw! Choose again!"
- If PS is "paper" and CS is "scissors" return "You lose! Scissors beat paper!"
- If PS is "scissors" and CS is "rock" return "You lose! Rock beats scissors!"
- If PS is "scissors" and CS is "paper" return "You win! Scissors beat paper!"
- If PS is "scissors" and CS is "scissors" return "Draw! Choose again!"
- Else if PS isn't "rock", "paper" or "scissors" return "Error! Invalid selection!"

*/

