const choices = ["rock", "paper", "scissors"];
let userChoice = "";
let computerChoice = "";

document.getElementById("user-rock").addEventListener("click", () => makeChoice("rock"));
document.getElementById("user-paper").addEventListener("click", () => makeChoice("paper"));
document.getElementById("user-scissors").addEventListener("click", () => makeChoice("scissors"));

function makeChoice(choice) {
    userChoice = choice;
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    displayChoices();
    determineWinner();
}

function displayChoices() {
    document.getElementById("result").innerText = "You chose " + userChoice + ". Computer chose " + computerChoice + ".";
}

function determineWinner() {
    if (userChoice === computerChoice) {
        document.getElementById("result").innerText += " It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        document.getElementById("result").innerText += " You win!";
    } else {
        document.getElementById("result").innerText += " Computer wins!";
    }
}
