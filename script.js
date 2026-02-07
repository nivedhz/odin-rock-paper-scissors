const gameOptions = ["rock", "paper", "scissors"]; //The Default choices of the game
// Below are the values that the computer can beat the user.
const computerBeats = {
        rock : "paper",
        paper : "scissors",
        scissors : "rock"
    }

// Gets the User's choice from a prompt window
function getUserChoice(){
    let userChoice = prompt("Rock, Paper or Scissors: ").toLowerCase().trim();
    return userChoice;
}

// Gets the computer's choice with the gameOptions list and Math.random()
function getComputerChoice(){
    let randomChoice = Math.floor(Math.random()*gameOptions.length);
    let computerChoice = gameOptions[randomChoice];
    return computerChoice;
}

// Simulates a round which calls the getUserChoice and getComputerChoice function
// Logs the choice of user and computer into the console
// Validate the input first and then check if the input results are draw, win or lose
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

// TODO: Temporary log which prints the return value of the round function,
console.log(round())