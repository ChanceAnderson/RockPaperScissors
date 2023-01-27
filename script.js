const rock = document.querySelector("#rock");
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const response = document.querySelector('#response');
let gameScore = 0;
let gameResult = ""

rock.addEventListener('click', () => {
    const choice = "rock";
    rockPaperScissors(choice);
    response.textContent = `${gameScore} : ${gameResult}`;
});

paper.addEventListener('click', () => {
    const choice = "paper";
    rockPaperScissors(choice);
    response.textContent = `${gameScore} : ${gameResult}`;
});

scissors.addEventListener('click', () => {
    const choice = "scissors";
    rockPaperScissors(choice);
    response.textContent = `${gameScore} : ${gameResult}`;
});



function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    if (num===0){
        return "Rock";
    } 
    else if (num === 1){
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

//function getPlayerChoice(){
    //let userChoice = prompt("Rock, paper, scissors?");
    //return userChoice;
//}

function rockPaperScissors(choice){
    let computerChoice = getComputerChoice().toLowerCase();
    if (computerChoice === "rock" && choice === "scissors"){
        console.log("Computer wins.");
        gameScore -=1;
    }
    else if (computerChoice === "paper" && choice === "scissors"){
        console.log("You win.");
        gameScore += 1;
    }
    else if (computerChoice === "scissors" && choice === "paper"){
        console.log("Computer wins.");
        gameScore -=1;
    }
    else if (computerChoice === "rock" && choice === "paper"){
        console.log("You win.");
        gameScore += 1;
    }
    else if (computerChoice=== "scissors" && choice === "rock"){
        console.log("You win.");
        gameScore += 1;
    }
    else {
        console.log("Draw");
        gameScore = gameScore;
    }

    if (gameScore == 5){
        gameScore = 0;
        gameResult = "You won!"
    } else if (gameScore == -5) {
        gameScore = 0;
        gameResult = "You lose!"
    } else {
        gameResult = gameResult;
    }
    
}