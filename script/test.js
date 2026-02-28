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
const innerScreenElemets = [...innerScreen.children];

//Default Game Options
const gameOptions = [paperOption, rockOption, scissorsOption]
const computerBeats = {
    "rock-option" : "paper-option",
    "paper-option" : "scissors-option",
    "scissors-option" : "rock-option"
}

// Selecting the 2nd element
let currentIndex = 1;

// Add the selection css class to the defaultly selected center item.
gameOptions[currentIndex].classList.add("selection");

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
    gameOptions.forEach(gameOption => {
        gameOption.classList.remove("selection");
    })
    gameOptions[currentIndex].classList.add("selection");
}

// Plays selection and switching audios.
function playSwitchingAudio(){
    menuSwitchingAudio.currentTime = 0;
    menuSwitchingAudio.play();
}
function playSelectionAudio(){
    menuSelectionAudio.currentTime = 0;
    menuSelectionAudio.play();
}
// D-pad Button Functions.
let rightBtnClick = rightBtn.addEventListener("click", function(){
    playSwitchingAudio();
    currentIndex++
    if (currentIndex > (gameOptions.length-1)){
        currentIndex = 0;
    }    
    addSelectionStyle();
})

let leftBtnClick = leftBtn.addEventListener("click", function(){
    playSwitchingAudio();
    currentIndex--;
    if (currentIndex < 0){
        currentIndex = (gameOptions.length -1);
    }
    addSelectionStyle();
})

// A-B Selection button function.
let selectionBtnClick = selectionBtn.addEventListener("click", function(){
    playSelectionAudio();
    let computerChoiceRandom = Math.floor(Math.random()*gameOptions.length);
    computerSelection.src = gameOptions[computerChoiceRandom].getAttribute("src");
    userSelection.src = gameOptions[currentIndex].getAttribute("src");
    let computerSelectionChecker = gameOptions[computerChoiceRandom];
    let userSelectionChecker = gameOptions[currentIndex];
    let currentUserScore = Number(userScore.textContent);
    let currentComputerScore = Number(computerScore.textContent);
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
    userScore.textContent = currentUserScore;
    computerScore.textContent = currentComputerScore;
    })

let menuBtnClick = menuBtn.addEventListener("click", function(){
    playSelectionAudio();
})