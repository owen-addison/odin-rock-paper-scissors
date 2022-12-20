const getComputerChoice = function() {
    const choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random() * choices.length)];
};


const playerSelection = "rock";
const computerSelection = getComputerChoice();



/* PSEUDOCODE

- Get computer selection
- Pick a random selection from "rock", "paper" and "scissors"
- Return that selection

*/

console.log(computerSelection);
