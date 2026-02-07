const gameOptions = ["rock", "paper", "scissors"];

function userChoice(){
    let userChoice = prompt("Rock, Paper or Scissors: ").toLowerCase().trim();
    return userChoice;
}
function computerChoice(){
    let randomChoice = Math.floor(Math.random()*gameOptions.length);
    let computerChoice = gameOptions[randomChoice];
    return computerChoice;
}
function round(){
    let user = userChoice();
    let computer = computerChoice();
    console.log(`You Chose: ${user.toUpperCase()}`)
    console.log(`Computer Chose: ${computer.toUpperCase()}`)
    if (user == computer){
        return `So it's a draw 🤖🧑‍🦰`;
    }
    else if((user == "rock" && computer == "paper")||(user == "paper" && computer == "scissors")||(user == "scissors" && computer == "rock")){
        return `So Computer Wins 🤖`;
    }
    else if((user == "rock" && computer == "scissors") || (user == "paper" && computer == "rock") || (user == "scissors" && computer == "paper")){
        return `So You Win 🧑‍🦰`
    }
    else{
        return "Please enter a valid input 👽"
    }
}
console.log(round())