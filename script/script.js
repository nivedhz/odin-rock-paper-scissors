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
const innerScreenElements = [...innerScreen.children];

//Default Game Options
const gameOptions = {"paper": paperOption, "rock": rockOption, "scissors": scissorsOption}
const computerBeats = {
    rock: "paper",
    paper: "scissors",
    scissors: "rock"
}
const MAX_ROUNDS = 5;
const DEFAULT_SELCTION_IMAGE = "images/rock.png"
let rounds = 0;
let currentUserScore = 0;
let currentComputerScore = 0;

// Selecting the 2nd element
let currentIndex = 1;

// Add the selection css class to the defaultly selected center item.
Object.values(gameOptions)[currentIndex].classList.add("selection");

// Menu Switching Audio
const menuSwitchingAudio = new Audio("audio/menu-switching.mp3");
menuSwitchingAudio.preload = "auto";
menuSwitchingAudio.volume = 0.15;

// Button/Menu Selection Audio
const menuSelectionAudio = new Audio("audio/menu-selection.mp3");
menuSelectionAudio.preload = "auto";
menuSelectionAudio.volume = 0.15;

// Result Audios
const loseAudio = new Audio("audio/lose-effect.mp3");
loseAudio.preload = "auto";
loseAudio.volume = 0.15;
const winAudio = new Audio("audio/win-effect.mp3");
winAudio.preload = "auto";
winAudio.volume = 0.15;
const drawAudio = new Audio("audio/draw-effect.mp3");
drawAudio.preload = "auto";
drawAudio.volume = 0.15;



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

function rightBtnFunction(){
    playAudio(menuSwitchingAudio);
    currentIndex++
    if (currentIndex > (Object.keys(gameOptions).length-1)){
        currentIndex = 0;
    }
    addSelectionStyle();
}

function leftBtnFunction(){
    playAudio(menuSwitchingAudio);
    currentIndex--;
    if (currentIndex < 0){
        currentIndex = (Object.keys(gameOptions).length-1);
    }
    addSelectionStyle();
}

function aBtnFunction(){
    playAudio(menuSelectionAudio);
    let computerChoiceRandom = Math.floor(Math.random()*Object.keys(gameOptions).length);
    let userSelectionKey = Object.keys(gameOptions)[currentIndex];
    let computerSelectionKey = Object.keys(gameOptions)[computerChoiceRandom];
    computerSelection.src = gameOptions[computerSelectionKey].getAttribute("src");
    userSelection.src = gameOptions[userSelectionKey].getAttribute("src");
    rounds++;
    if (rounds>MAX_ROUNDS){
        innerScreen.replaceChildren();
        let message = document.createElement('div');
        if(currentUserScore === currentComputerScore){
            playAudio(drawAudio);
            message.textContent = "It's a Draw!";
        }
        else if(currentUserScore < currentComputerScore){
            playAudio(loseAudio);
            message.textContent = "Computer Wins!";
        }
        else{
            playAudio(winAudio);
            message.textContent = "You Win!";
        }
        message.classList.add("message");
        innerScreen.appendChild(message);
        rounds = currentUserScore = currentComputerScore = 0;
    }
    else {
        if (userSelectionKey === computerSelectionKey){
            currentUserScore+= 0.5;
            currentComputerScore+= 0.5;
        }
        else if(computerBeats[userSelectionKey] === computerSelectionKey){
            currentComputerScore+= 1;
        }
        else{
            currentUserScore+= 1;
        }
        userScore.textContent = currentUserScore;
        computerScore.textContent = currentComputerScore;
    }
};

function bBtnFunction(){
    playAudio(menuSelectionAudio);
    innerScreen.replaceChildren(...innerScreenElements);
    computerSelection.src = userSelection.src = DEFAULT_SELCTION_IMAGE;
    rounds = currentUserScore = currentComputerScore = userScore.textContent = computerScore.textContent = 0;
    currentIndex = 1;
    addSelectionStyle();
};

// D-pad Button Functions.
rightBtn.addEventListener("click", rightBtnFunction);
leftBtn.addEventListener("click", leftBtnFunction);

// Key Press Functions
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight"){
        rightBtnFunction();
    }
    else if(event.key === "ArrowLeft"){
        leftBtnFunction();
    }
    else if(event.key === "Enter"){
        aBtnFunction();
    }
    else if(event.key === "r" || event.key === "R"){
        bBtnFunction();
    }
});



// A-B Selection button function.
selectionBtn.addEventListener("click", aBtnFunction);
menuBtn.addEventListener("click", bBtnFunction);