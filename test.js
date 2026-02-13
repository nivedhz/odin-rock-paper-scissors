let computerScore = document.getElementById("computer-score");
let userScore = document.getElementById("user-score");
let computerSelection = document.getElementById("computer-selection");
let userSelection = document.getElementById("user-selction");
const paperOption = document.getElementById("paper-option");
const rockOption = document.getElementById("rock-option");
const scissorsOption = document.getElementById("scissors-option");
const rightBtn = document.getElementById("right-btn");
const leftBtn = document.getElementById("left-btn");

//Default Game Options
const gameOptions = [paperOption, rockOption, scissorsOption]

let currentIndex = 1;
gameOptions[currentIndex].classList.add("selection");
let rightBtnClick = rightBtn.addEventListener("click", function(){
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
    currentIndex--;
    if (currentIndex < 0){
        currentIndex = 2;
    }
    gameOptions.forEach(gameOption => {
        gameOption.classList.remove("selection");
    })
    gameOptions[currentIndex].classList.add("selection");
})

