const gameOptions = ["rock", "paper", "scissors"]; //The Default choices of the game
// Below are the values that the computer can beat the user.
const computerBeats = {
        rock : "paper",
        paper : "scissors",
        scissors : "rock"
    }

// Gets the User's choice from a prompt window
function getUserChoice(){
    let userChoice = prompt("Rock, Paper or Scissors: ");
    if (!userChoice) return null;
    return userChoice.toLowerCase().trim();
}

// Gets the computer's choice with the gameOptions list and Math.random()
function getComputerChoice(){
    let randomChoice = Math.floor(Math.random()*gameOptions.length);
    let computerChoice = gameOptions[randomChoice];
    return computerChoice;
}

// Validates the user and computer input and returns the reletive result.
function playRound(user, computer){
    if (!gameOptions.includes(user)) return "invalid";
    else if (user === computer) return "draw";
    else if (computerBeats[user] === computer) return "lose";
    else return "win";
}

// Simulates a round which calls the getUserChoice and getComputerChoice function
// Logs the choice of user and computer into the console
// Results the representative output according to the output of the playRound() 
// TODO : Tried to implement the 5 rounds thing but failed miserably, WHY IS THE WHILE LOOP NOT WORKING????.
function game(){
    let noOfRounds = 0;
    let userScore = 0;
    let computerScore = 0;
    while (noOfRounds < 5){
        let user = getUserChoice();
        let computer = getComputerChoice();
        let results = playRound(user, computer);
        console.log(`You Chose: ${user.toUpperCase()}`);
        console.log(`Computer Chose: ${computer.toUpperCase()}`);
        if (results === "invalid"){
            noOfRounds++;
            console.log("Please enter a valid input 👽");
        }    
        else if (results === "draw"){
            noOfRounds++;
            userScore+= 0.5;
            computerScore+= 0.5;
            console.log("So it's a Draw 🧑‍🦰🤖");
        }
        else if(results === "lose"){
            noOfRounds++;
            computerScore++;
            console.log("So Computer Wins 🤖");
        }
        else if(results === "win") {
            noOfRounds++;
            userScore++;
            console.log("So You win 🧑‍🦰");
        }
    }
}

// TODO: Temporary log which prints the return value of the round function,
game();