function computerPlay () {
    let number = Math.floor(Math.random() *3);
    let computerSelection;
    switch (number) {
        case 0:
        computerSelection = "Rock";
        break;
        case 1:
        computerSelection = "Paper";
        break;
        case 2:
        computerSelection = "Scissors";
    }
    return computerSelection;
}
// Another way to do it with arrays
// function computerPlay () {
//     let computerSelection = ["Rock", "Paper", "Scissors"];
//     return computerSelection(Math.floor(Math.random() *3))
// }

console.log(computerPlay ());

function playRound (computerSelection, playerSelection) {
    playerSelection = playerSelection.toLowerCase(playerSelection);
    computerSelection = computerSelection.toLowerCase(computerSelection);
    let result;
    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    result = "tie";
                    break;
                case "paper":
                    result = "computer";
                    break;
                case "scissors":
                    result = "player";
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "rock":
                    result = "player";
                    break;
                case "paper":
                    result = "tie";
                    break;
                case "scissors":
                    result = "computer";
            }
            break;
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    result = "computer";
                    break;
                case "paper":
                    result = "player";
                    break;
                case "scissors":
                    result = "tie";
            }
    }
return result;
}

// Trying playRound
// console.log(playRound(computerPlay(), "roCK"));
// console.log(playRound(computerPlay(), "roCK"));
// console.log(playRound(computerPlay(), "PapEr"));


function game(){
    let score = 0;
    let computerSelection;
    let playerSelection;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Choose Rock, Paper or Scissors");
        playerSelection = playerSelection.toLowerCase(playerSelection);
        computerSelection = computerPlay();
        //VALIDATION
        while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
            playerSelection = prompt ("please choose rock, paper or scissors");
            playerSelection = playerSelection.toLowerCase(playerSelection);          
        }
        console.log(playerSelection);
        console.log(computerSelection);
        if(playRound(computerSelection, playerSelection) == "player"){
            console.log("Player wins this round!");
            score++;
        } else {
            console.log("Computer wins this round!");
        }
    }
    if (score >= 3) {
        console.log("You win!");
    } else {
        console.log("Computer wins, you lose :(");
    }
    console.log(`Final result: Player ${score} points, Computer ${5-score} points`);
}
// game();
