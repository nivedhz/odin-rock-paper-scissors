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
const menuBtn = document.getElementById("menu-btn");
const innerScreen = document.getElementById("innerScreen");
const innerScreenElemets = [...innerScreen.children];

//Default Game Options
const gameOptions = [paperOption, rockOption, scissorsOption]
const computerBeats = {
    rockOption : paperOption,
    paperOption : scissorsOption,
    scissorsOption : rockOption
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
    if (computerSelection.src === userSelection.src){
        innerScreen.replaceChildren();
        const drawMessage = document.createElement('div');
        drawMessage.textContent = "It's a Draw!";
        Object.assign(drawMessage.style, {
            color: "inherit",
            fontSize: "32px",
            display: "flex",
            justifyContent: "center",
            alignItems: "centrer",
            textAlign: "center"
          });
        innerScreen.appendChild(drawMessage);
        setTimeout(() => {
            innerScreen.replaceChildren(...innerScreenElemets);
        }
        , 1000);
    }
    else {
        innerScreen.replaceChildren();
        const notDrawMessage = document.createElement('div');
        notDrawMessage.textContent = "It's NOT a Draw!";
        Object.assign(notDrawMessage.style, {
            color: "inherit",
            fontSize: "32px",
            display: "flex",
            justifyContent: "center",
            alignItems: "centrer",
            textAlign: "center"
          });
        innerScreen.appendChild(notDrawMessage);
        setTimeout(() => {
            innerScreen.replaceChildren(...innerScreenElemets);
        }
        , 1000);
    }
})
let menuBtnClick = menuBtn.addEventListener("click", function(){
    playSelectionAudio();
})

// Round results
/*
Determine result.
Display the result in the entire inner screen element.
Update the score on the top according to the result.
*/
