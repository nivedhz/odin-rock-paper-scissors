let computerScore = document.getElementById("computer-score");
let userScore = document.getElementById("user-score");
let computerSelection = document.getElementById("computer-selection");
let userSelection = document.getElementById("user-selection");
const paperOption = document.getElementById("paper-option");
const rockOption = document.getElementById("rock-option");
const scissorsOption = document.getElementById("scissors-option");
const rightBtn = document.getElementById("right-btn");
const leftBtn = document.getElementById("left-btn");
const selectionBtn = document.getElementById("selection-btn");
const menuBtn = document.getElementById("menu-btn");
const innerScreen = document.getElementById("innerScreen");
const innerScreenNodes = [...innerScreen.childNodes];

//Default Game Options
const gameOptions = {"paper": paperOption, "rock": rockOption, "scissors": scissorsOption}
const computerBeats = {
    rock: "paper",
    paper: "scissors",
    scissors: "rock"
}
let rounds = 0;

// Selecting the 2nd element
let currentIndex = 1;

// Add the selection css class to the defaultly selected center item.
Object.values(gameOptions)[currentIndex].classList.add("selection");

// Menu Switching Audio
const menuSwitchingAudio = new Audio("audio/menu-switching.mp3");
menuSwitchingAudio.preload = "auto";
menuSwitchingAudio.volume = 0.3;

// Button/Menu Selection Audio
const menuSelectionAudio = new Audio("audio/menu-selection.mp3");
menuSelectionAudio.preload = "auto";
menuSelectionAudio.volume = 0.3;

// Add selection styles to the current selected element and remnove the selection style from the previous selection.
function addSelectionStyle(){
    Object.values(gameOptions).forEach(gameOption => {
        gameOption.classList.remove("selection");
    })
    Object.values(gameOptions)[currentIndex].classList.add("selection");
}

function playAudio(audio){
    audio.play();
    audio.currentTime = 0;
}

// D-pad Button Functions.
rightBtn.addEventListener("click", function(){
    playAudio(menuSwitchingAudio);
    currentIndex++
    if (currentIndex > (Object.keys(gameOptions).length-1)){
        currentIndex = 0;
    }    
    addSelectionStyle();
})

leftBtn.addEventListener("click", function(){
    playAudio(menuSwitchingAudio);
    currentIndex--;
    if (currentIndex < 0){
        currentIndex = (Object.keys(gameOptions).length-1);
    }
    addSelectionStyle();
})

// A-B Selection button function.
selectionBtn.addEventListener("click", function(){
    playAudio(menuSelectionAudio);
    // Very Big
    // TODO
    let computerChoiceRandom = Math.floor(Math.random()*gameOptions.length);
    computerSelection.src = gameOptions[computerChoiceRandom].getAttribute("src");
    userSelection.src = gameOptions[currentIndex].getAttribute("src");
    let computerSelectionChecker = gameOptions[computerChoiceRandom];
    let userSelectionChecker = gameOptions[currentIndex];
    let currentUserScore = Number(userScore.textContent);
    let currentComputerScore = Number(computerScore.textContent);
    if (rounds<5){
        if (userSelectionChecker === computerSelectionChecker){
            currentUserScore+= 0.5;
            currentComputerScore+= 0.5;
        }
        else if(computerBeats[userSelectionChecker.id] === computerSelectionChecker.id){
            currentComputerScore+= 1;
        }
        else{
            currentUserScore+= 1;
        }
        rounds++
        userScore.textContent = currentUserScore;
        computerScore.textContent = currentComputerScore;
    }
    else{
        innerScreen.replaceChildren();
        let message = document.createElement('div');
        if(currentUserScore === currentComputerScore){
            message.textContent = "It's a Draw!";
        }
        else if(currentUserScore < currentComputerScore){
            message.textContent = "Computer Wins!"
        }
        else{
            message.textContent = "You Win!";
        }
        message.classList.add("message");
        innerScreen.appendChild(message); 
        rounds = 0;
    }
    })

menuBtn.addEventListener("click", function(){
    playAudio(menuSelectionAudio);
    innerScreen.replaceChildren(...innerScreenNodes);
    userScore.textContent = computerScore.textContent = rounds = 0;
    currentIndex = 1;
    addSelectionStyle();
})