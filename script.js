const gameOptions = ["rock", "paper", "scissors"];

function userChoice(){
    let userChoice = prompt("Rock, Paper or Scissors: ").toLowerCase().trim();
    console.log(`function userChoice: ${userChoice}`);
    return userChoice;
}
function computerChoice(){
    let randomChoice = Math.floor(Math.random()*gameOptions.length);
    computerChoice = gameOptions[randomChoice];
    return computerChoice;
}
function round(){
    computer = computerChoice();
    user = userChoice();
    console.log(`round computerChoice : ${computer}`)
    console.log(`round userChoice: ${user}`)
    if (user == computer){
        return `You choosed ${user} and Computer choosed ${computer}, So it's a draw`;
    }
    else if((user == "rock" && computer == "paper")||(user == "paper" && computer == "scissors")||(user == "scissors" && computer == "rock")){
        return `You choosed ${user} and Computer choosed ${computer}, So Computer Wins`;
    }
    else if((user == "rock" && computer == "scissors") || (user == "paper" && computer == "rock") || (user == "scissors" && computer == "paper")){
        return `You choosed ${user} and Computer choosed ${computer}, So You Win`
    }
    else{
        return "Please enter a valid input"
    }
}
console.log(round())