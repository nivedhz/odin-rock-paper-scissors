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
const gameOptions = ["rock", "paper", "scissors"];
const gameOptionsDOM = {
    paper : paperOption,
    rock : rockOption,
    scissors : scissorsOption
}
const computerBeats = {
    rock: "paper",
    paper: "scissors",
    scissors: "rock"
}
const MAX_ROUNDS = 5;


// Defualt Technical Options
const keyPressFunctions = {
    "ArrowRight": rightBtnFunction,
    "ArrowLeft": leftBtnFunction,
    "Enter": aBtnFunction,
    "r": bBtnFunction,
    "R": bBtnFunction
}
const DEFAULT_SELCTION_IMAGE = "images/rock.png"
let rounds = 0;
let currentUserScore = 0;
let currentComputerScore = 0;
let currentIndex = 1;
let gameOptionValue = Object.values(gameOptionsDOM);
let gameOptionKey = Object.keys(gameOptionsDOM);

// Add the selection css class to the defaultly selected center item.
gameOptionValue[currentIndex].classList.add("selection");

// Audios
let audios = {
    "menuSwitching" : new Audio("audio/menu-switching.mp3"),
    "menuSelection" : new Audio("audio/menu-selection.mp3"),
    "loseAudio" : new Audio("audio/lose-effect.mp3"),
    "winAudio" : new Audio("audio/win-effect.mp3"),
    "drawAudio" : new Audio("audio/draw-effect.mp3")
}
for (let [_, value] of Object.entries(audios)){
    value.preload = "auto";
    value.volume = 0.15;
}

function addSelectionStyle(){
    gameOptionValue.forEach(gameOption => {
        gameOption.classList.remove("selection");
    })
    gameOptionValue[currentIndex].classList.add("selection");
}

function playAudio(audio){
    audio.play();
    audio.currentTime = 0;
}

function addDefaultImage(){
    computerSelection.src = userSelection.src = DEFAULT_SELCTION_IMAGE;
}

function endMessage(){
    innerScreen.replaceChildren();
    let message = document.createElement('div');
    if(currentUserScore === currentComputerScore){
        playAudio(audios.drawAudio);
        message.textContent = "It's a Draw!";
    }
    else if(currentUserScore < currentComputerScore){
        playAudio(audios.loseAudio);
        message.textContent = "Computer Wins!";
    }
    else{
        playAudio(audios.winAudio);
        message.textContent = "You Win!";
    }
    message.classList.add("message");
    innerScreen.appendChild(message);
    rounds = currentUserScore = currentComputerScore = 0;
}

function playRound(userSelectionKey, computerSelectionKey){
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

function rightBtnFunction(){
    playAudio(audios.menuSwitching);
    currentIndex++;
    if (currentIndex > (gameOptionKey.length-1)){
        currentIndex = 0;
    }
    addSelectionStyle();
}

function leftBtnFunction(){
    playAudio(audios.menuSwitching);
    currentIndex--;
    if (currentIndex < 0){
        currentIndex = (gameOptionKey.length-1);
    }
    addSelectionStyle();
}

function aBtnFunction(){
    playAudio(audios.menuSelection);
    let computerChoiceRandom = Math.floor(Math.random()*gameOptionKey.length);
    let userSelectionKey = gameOptionKey[currentIndex];
    let computerSelectionKey = gameOptionKey[computerChoiceRandom];
    let computerSelectionClass = gameOptionValue[computerChoiceRandom];
    let userSelectionClass = gameOptionValue[currentIndex];
    computerSelection.src = computerSelectionClass.getAttribute("src");
    userSelection.src = userSelectionClass.getAttribute("src");
    rounds++;
    if (rounds>MAX_ROUNDS){
        endMessage();
    }
    else {
        playRound(userSelectionKey, computerSelectionKey);
    }
};

function bBtnFunction(){
    playAudio(audios.menuSelection);
    innerScreen.replaceChildren(...innerScreenElements);
    rounds = currentUserScore = currentComputerScore = userScore.textContent = computerScore.textContent = 0;
    currentIndex = 1;
    addDefaultImage();
    addSelectionStyle();
};

// Default Functions
addDefaultImage();

// D-pad Button Functions.
rightBtn.addEventListener("click", rightBtnFunction);
leftBtn.addEventListener("click", leftBtnFunction);


document.addEventListener("keydown", function(event) {
    if (keyPressFunctions[event.key]){
        keyPressFunctions[event.key]();
    }
});



// A-B Selection button function.
selectionBtn.addEventListener("click", aBtnFunction);
menuBtn.addEventListener("click", bBtnFunction);