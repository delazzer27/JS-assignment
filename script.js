let btn = document.querySelectorAll("button");
let playerScore = 0;
let computerScore = 0;
const input = document.querySelector("input");
const para = document.createElement("p");
const div = document.querySelector("div");
const h2 = document.createElement("h2");
const h3 = document.createElement("h3");
const header = document.querySelector("header");

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
    h3.textContent = `Computer select: ${computerSelection}`;
    h3.style.color = "aliceblue";
    h3.style.textAlign = "center";
    document.body.appendChild(h3);
    return computerSelection;
}

btn.forEach(element => {
    element.addEventListener("click", ()=>{
        let computerSelection = computerPlay();
        let playerSelection = element.value;
            if(playRound(computerSelection, playerSelection) == "player"){
                playerScore++;
                h2.textContent = "player wins this round!";
                para.textContent = ` Player ${playerScore} points, Computer ${computerScore} points`;
                document.body.appendChild(para);
                document.body.appendChild(h2);
                h2Styles ();
                paraStyles ();
            } else {
                computerScore++;
                h2.textContent = "Computer wins this round!"
                para.textContent = ` Player ${playerScore} points, Computer ${computerScore} points`;
                h2Styles ();
                document.body.appendChild(para);
                document.body.appendChild(h2);
            } 
        if (playerScore === 5) {
            h2.textContent = "You win!";
            h2Styles ();
            document.body.appendChild(para);
            div.style.display = "none";
            para.style.display = "none";
            header.style.display = "none";
            h3.style.display = "none";
        } else if (computerScore === 5) {
            h2.textContent = "Computer wins, you lose :(";
            h2Styles ();
            document.body.appendChild(para);
            div.style.display = "none";
            header.style.display = "none";
            h3.style.display = "none";
            para.style.display = "none";
        }
    })
});

function playRound (computerSelection, playerSelection) {
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

function h2Styles (){
    h2.style.color = "aliceblue";
    h2.style.textAlign = "center";
}

function paraStyles (){
    para.style.color = "aliceblue";
    para.style.textAlign = "center";
}
