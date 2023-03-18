let btn = document.querySelectorAll("button");
let playerScore = 0;
let computerScore = 0;
const input = document.querySelector("input");
const para = document.createElement("p");
const div = document.querySelector("div")
const h2 = document.createElement("h2")

function computerPlay () {
    let number = Math.floor(Math.random() *3);
    let computerSelection;
    switch (number) {
        case 0:
        computerSelection = "rock";
        break;
        case 1:
        computerSelection = "paper";
        break;
        case 2:
        computerSelection = "scissors";
    }
    return computerSelection;
}

function playRound (computerSelection, playerSelection) {
    computerSelection = computerPlay();
    playerSelection = btn;
    let result;
    playerSelection.forEach(element => {
            switch (element.value) {
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
        })
return result;
}

btn.forEach(element => {
    element.addEventListener("click", ()=>{
        let computerSelection;
        let playerSelection = element.value;
            if(playRound(computerSelection, playerSelection) == "player"){
                playerScore++;
                h2.textContent = "player wins this round!"
                para.textContent = ` Player ${playerScore} points, Computer ${computerScore} points`;
                document.body.appendChild(para);
                document.body.appendChild(h2)
            } else {
                computerScore++;
                h2.textContent = "computer wins this round!"
                para.textContent = ` Player ${playerScore} points, Computer ${computerScore} points`;
                document.body.appendChild(para);
                document.body.appendChild(h2);
            } 
        if (playerScore === 5) {
            console.log("You win!");
            para.textContent = "You win!";
            document.body.appendChild(para);
            div.style.display = "none"
            h2.style.display = "none"
        } else if (computerScore === 5) {
            console.log("Computer wins, you lose :(");
            para.textContent = "Computer wins, you lose :("
            document.body.appendChild(para);
            div.style.display = "none"
            h2.style.display = "none"
        }
    })
});
