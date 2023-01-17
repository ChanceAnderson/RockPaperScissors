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

function getPlayerChoice(){
    let userChoice = prompt("Rock, paper, scissors?");
    return userChoice;
}

function rockPaperScissors(){
    let computerChoice = getComputerChoice().toLowerCase();
    let playerChoice = getPlayerChoice().toLowerCase();
    if (computerChoice === "rock" && playerChoice === "scissors"){
        console.log("Computer wins.");
    }
    else if (computerChoice === "paper" && playerChoice === "scissors"){
        console.log("You win.");
    }
    else if (computerChoice === "scissors" && playerChoice ==="paper"){
        console.log("Computer wins.");
    }
    else if (computerChoice === "rock" && playerChoice==="paper"){
        console.log("You win.");
    }
    else if (computerChoice=== "scissors" && playerChoice==="rock"){
        console.log("You win.");
    }
    else {
        console.log("Draw");
    }
}