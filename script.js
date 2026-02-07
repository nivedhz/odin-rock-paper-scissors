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
    else return "win";
}

// Simulates a round which calls the getUserChoice and getComputerChoice function
// Logs the choice of user and computer into the console
// Results the representative output according to the output of the playRound() 
function game(){
    let noOfRounds = 0;
    let userScore = 0;
    let computerScore = 0;
    const MAX_ROUNDS = 5;
    while (noOfRounds < MAX_ROUNDS){
        let user = getUserChoice();
        let computer = getComputerChoice();
        let results = playRound(user, computer);
        noOfRounds++;
        // Displays the round no and the no of rounds left
        console.log(`\nRound No: ${noOfRounds}     Rounds Left: ${Math.abs(noOfRounds - MAX_ROUNDS)}`)
        // Displays user's choice and computer's choice
        console.log(`\nYou Chose: ${user.toUpperCase()}`);
        console.log(`Computer Chose: ${computer.toUpperCase()}`);
        if (results === "invalid"){
            console.log("\nPlease enter a valid input 👽");
        }    
        else if (results === "draw"){
            userScore+= 0.5;
            computerScore+= 0.5;
            console.log("\nSo it's a Draw 🧑‍🦰🤖");
        }
        else if(results === "lose"){
            computerScore++;
            console.log("\nSo Computer Wins 🤖");
        }
        else if(results === "win") {
            userScore++;
            console.log("\nSo You win 🧑‍🦰");
        }
        console.log(`\nYour Points: ${userScore}  Computer Points: ${computerScore}`)
    }
    // Calls the evaluation function that logs the result.
    evalGame(userScore, computerScore)
}
// Evaluates the performance of user and computer in the whole game and gives an output respectively.
function evalGame(userScores, computerScores){
    if (userScores>computerScores) console.log("\nYou Won 🎊");
    else if (userScores<computerScores) console.log("\nComputer Won 🤖");
    else console.log("\nIt's a Draw");
}
game();