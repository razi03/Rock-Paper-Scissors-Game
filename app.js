let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");
let us = 0;
let cs = 0;

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was Drawn.");
    msg.innerText = "Draw";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin === true) {
        console.log("You win :D");
        us++;
        userScore.innerHTML = us;
        msg.innerText = `You win :D \n${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else if (userWin === false) {
        console.log("You lose :(");
        cs++;
        compScore.innerHTML = cs;
        msg.innerText = `You lose :( \n${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    } else {
        drawGame();
    }
};

const playGame = (userChoice) => {
    console.log("User choice=", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer Choice=", compChoice);
    if (userChoice === compChoice) {
        showWinner(null, userChoice, compChoice);
    } else {
        let userWin;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else if (userChoice === "scissors") {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log(userChoice, "was clicked");
        playGame(userChoice);
    });
});
