let computerScore = document.getElementById("computer-score");
let userScore = document.getElementById("user-score");
let computerSelection = document.getElementById("computer-selection");
let userSelection = document.getElementById("user-selction");
const paperOption = document.getElementById("paper-option");
const rockOption = document.getElementById("rock-option");
const scissorsOption = document.getElementById("scissors-option");
const rightBtn = document.getElementById("right-btn");
const leftBtn = document.getElementById("left-btn");
const selectionBtn = document.getElementById("selection-btn");
const menuBtn = document.getElementById("menu-btn")

//Default Game Options
const gameOptions = [paperOption, rockOption, scissorsOption]

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

// D-pad Button Functions.
let rightBtnClick = rightBtn.addEventListener("click", function(){
    menuSwitchingAudio.currentTime = 0;
    menuSwitchingAudio.play();
    currentIndex++
    if (currentIndex > (gameOptions.length-1)){
        currentIndex = 0;
    }    
    gameOptions.forEach(gameOption => {
        gameOption.classList.remove("selection");
    })
    gameOptions[currentIndex].classList.add("selection");
})

let leftBtnClick = leftBtn.addEventListener("click", function(){
    menuSwitchingAudio.currentTime = 0;
    menuSwitchingAudio.play();
    currentIndex--;
    if (currentIndex < 0){
        currentIndex = 2;
    }
    gameOptions.forEach(gameOption => {
        gameOption.classList.remove("selection");
    })
    gameOptions[currentIndex].classList.add("selection");
})

// A-B Selection button function.
let selectionBtnClick = selectionBtn.addEventListener("click", function(){
    menuSelectionAudio.currentTime = 0;
    menuSelectionAudio.play();
    let computerChoiceRandom = Math.floor(Math.random()*gameOptions.length);
    computerSelection.src = gameOptions[computerChoiceRandom].getAttribute("src")
    userSelection.src = gameOptions[currentIndex].getAttribute("src");
    
})
let menuBtnClick = menuBtn.addEventListener("click", function(){
    menuSelectionAudio.currentTime = 0;
    menuSelectionAudio.play();
})