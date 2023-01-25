const rock = document.querySelector("#rock");
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const response = document.querySelector('#response');

rock.addEventListener('click', () => {
    const choice = "rock";
    rockPaperScissors(choice);
});

paper.addEventListener('click', () => {
    const choice = "paper";
    rockPaperScissors(choice);
});

scissors.addEventListener('click', () => {
    const choice = "scissors";
    rockPaperScissors(choice);
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
    }
    else if (computerChoice === "paper" && choice === "scissors"){
        console.log("You win.");
    }
    else if (computerChoice === "scissors" && choice === "paper"){
        console.log("Computer wins.");
    }
    else if (computerChoice === "rock" && choice === "paper"){
        console.log("You win.");
    }
    else if (computerChoice=== "scissors" && choice === "rock"){
        console.log("You win.");
    }
    else {
        console.log("Draw");
    }
}