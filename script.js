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
    if (!userChoice) return "invalid";
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
}

//Runs the main game and loops until 5 rounds are finished.
function runGame(noOfRounds, userScore, computerScore, MAX_ROUNDS){
    while (noOfRounds < MAX_ROUNDS){
        let userChoice = getUserChoice();
        let computerChoice = getComputerChoice();
        let roundResult = playRound(userChoice, computerChoice);
        noOfRounds++;
        // Displays the round no and the no of rounds left
        console.log(`\nRound No: ${noOfRounds}     Rounds Left: ${Math.abs(noOfRounds - MAX_ROUNDS)}`);
        // Displays user's choice and computer's choice
        console.log(`\nYou Chose: ${userChoice.toUpperCase()}`);
        console.log(`Computer Chose: ${computerChoice.toUpperCase()}`);
        if (roundResult === "invalid"){
            console.log("\nPlease enter a valid input 👽");
        }    
        else if (roundResult === "draw"){
            userScore+= 0.5;
            computerScore+= 0.5;
            console.log("\nSo it's a Draw 🧑‍🦰🤖");
        }
        else if(roundResult === "lose"){
            computerScore++;
            console.log("\nSo Computer Wins 🤖");
        }
        else {
            userScore++;
            console.log("\nSo You win 🧑‍🦰");
        }
        console.log(`\nYour Points: ${userScore}  Computer Points: ${computerScore}`);
    }
    // Calls the evaluation function that logs the result.
    overallResult(userScore, computerScore);
}

function mainGame(){
    let noOfRounds = 0;
    let userScore = 0;
    let computerScore = 0;
    const MAX_ROUNDS = 5;
    runGame(noOfRounds, userScore, computerScore, MAX_ROUNDS)

}
// Evaluates the performance of user and computer in the whole game and gives an output respectively.
function overallResult(userScore, computerScore){
    if (userScore>computerScore) console.log("\nYou Won Overall🎊");
    else if (userScore<computerScore) console.log("\nComputer Won Overall🤖");
    else console.log("\nIt's a Draw Overall");
}

// mainGame();