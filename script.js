const gameOptions = ["rock", "paper", "scissors"];
const computerBeats = {
        rock : "paper",
        paper : "scissors",
        scissors : "rock"
    }

function getUserChoice(){
    let userChoice = prompt("Rock, Paper or Scissors: ").toLowerCase().trim();
    return userChoice;
}

function getComputerChoice(){
    let randomChoice = Math.floor(Math.random()*gameOptions.length);
    let computerChoice = gameOptions[randomChoice];
    return computerChoice;
}

function round(){
    let user = getUserChoice();
    let computer = getComputerChoice();

    console.log(`You Chose: ${user.toUpperCase()}`)
    console.log(`Computer Chose: ${computer.toUpperCase()}`)
    if (!gameOptions.includes(user)){
        return "Please enter a valid input 👽"
    }
    else if (user === computer){
        return `So it's a draw 🤖🧑‍🦰`;
    }
    else if(computerBeats[user] === computer){
        return `So Computer Wins 🤖`;
    }
    else {
        return `So You Win 🧑‍🦰`
    }
}

console.log(round())