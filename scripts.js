/* Variable declarations start */
var rock = document.querySelector("#rock");
var paper = document.querySelector("#paper");
var scissors = document.querySelector("#scissors")
var userScoreDsp = document.querySelector("#userScore");
var cpuScoreDsp = document.querySelector("#cpuScore");
var scoreLimitDsp = document.querySelector("#limit");
var resetBtn = document.querySelector("#reset");
var message = document.querySelector("#msg");
var userScore;
var cpuScore;
var scoreLimit;
var increaseBtn = document.querySelector("#up");
var decreaseBtn = document.querySelector("#down");
var choices = ["rock", "paper", "scissors"];
var userChoice = "";
var cpuChoice = "";
/* Variable declarations end */

//initialize game
init();

/* Event listeners Start */
increaseBtn.addEventListener("click", function(){
    if(!(scoreLimit === 10)) {
        scoreLimit++;
        scoreLimitDsp.textContent = scoreLimit;
    }
})

decreaseBtn.addEventListener("click", function(){
    if(!(scoreLimit === 0)) {
        scoreLimit--;
        scoreLimitDsp.textContent = scoreLimit;
    }
})

resetBtn.addEventListener("click", function(){
    userScore = 0;
    cpuScore = 0;
    userScoreDsp.textContent = userScore;
    cpuScoreDsp.textContent = cpuScore;
    message.textContent = "Pick your choice of Rock, Paper, or Scissors!";
})

scoreLimitDsp.addEventListener("click", function(){
    scoreLimit = scoreLimitDsp.textContent;
})

rock.addEventListener("click", function(){
    userChoice = choices[0];
    cpuChoice = cpuPick();
    console.log("userChoice: " + userChoice + " cpuChoice: " + cpuChoice);
    determineWinner(userChoice, cpuChoice);
    if(endGame()) {
        displayWinner();
    }
});

paper.addEventListener("click", function(){
    userChoice = choices[1];
    cpuChoice = cpuPick();
    console.log("userChoice: " + userChoice + " cpuChoice: " + cpuChoice);
    determineWinner(userChoice, cpuChoice);
    if(endGame()) {
        displayWinner();
    }
});

scissors.addEventListener("click", function(){
    userChoice = choices[2];
    cpuChoice = cpuPick();
    console.log("userChoice: " + userChoice + " cpuChoice: " + cpuChoice);
    determineWinner(userChoice, cpuChoice);
    if(endGame()) {
        displayWinner();
    }
});
/* Event listeners End */

/*Function declarations start */
function init() {
    userScore = 0;
    cpuScore = 0;
    scoreLimit = 5;
    userScoreDsp.textContent = userScore;
    cpuScoreDsp.textContent = cpuScore;
    scoreLimitDsp.textContent = scoreLimit;
}

function cpuPick() {
    temp = Math.floor(Math.random() * 3)
    return choices[temp];
}

function determineWinner(userChoice, cpuChoice) {
    //prevents play from going past scoreLimit
    if(!endGame()) {
        if (userChoice === cpuChoice) {
            message.textContent = "You both picked " + userChoice + ". This rounds a draw!";
        } else if (userChoice === choices[0] && cpuChoice === choices[1]) {
            cpuScore++;
            cpuScoreDsp.textContent = cpuScore;
            message.textContent = "The CPU picked paper. Paper covers rock. The CPU won the round!";
        } else if (userChoice === choices[0] && cpuChoice === choices[2]) {
            userScore++;
            userScoreDsp.textContent = userScore;
            message.textContent = "The CPU picked scissors. Rock smashes scissors. You won the round!";
        } else if (userChoice === choices[1] && cpuChoice === choices[0]) {
            userScore++;
            userScoreDsp.textContent = userScore;
            message.textContent = "The CPU picked rock. Paper covers rock. You won the round!";
        } else if (userChoice === choices[1] && cpuChoice === choices[2]) {
            cpuScore++;
            cpuScoreDsp.textContent = cpuScore;
            message.textContent = "The CPU picked scissors. Scissors cut through paper. The CPU won the round!";
        } else if (userChoice === choices[2] && cpuChoice == choices[0]) {
            cpuScore++;
            cpuScoreDsp.textContent = cpuScore;
            message.textContent = "The CPU picked rock. Rock smashes scissors. The CPU won the round!";
        } else {
            //last case where userChoice is scissors and cpuChoice is paper
            userScore++;
            userScoreDsp.textContent = userScore;
            message.textContent = "The CPU picked paper. Scissors cut through paper. You won the round!";
        }
    }
}

function displayWinner() {
    if (userScore === scoreLimit) {
            message.textContent = "You win!!!"
    } else {
            message.textContent = "Arghhh! the CPU won!";
    }
}

function endGame() {
    if(userScore === scoreLimit) {
        return true;
    } else if (cpuScore === scoreLimit) {
        return true;
    }
    return false;
}
/* function declarations end */