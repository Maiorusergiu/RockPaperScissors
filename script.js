//1. Start with function getComputerChoice
//2. Function playRound that takes 2 params, playerSelection and computerSelection
//that returns a string like "You lost! Paper beats rock!"
//3. Function getUserChoice to return the user choice
//4. Make your function’s playerSelection parameter is
// case-insensitive (so users can input rock, ROCK, RocK or any other variation).
//5.Write a NEW function called game().
//Call the playRound function inside of this one
//to play a 5 round game that keeps score and reports a winner or loser at the end.

let body = document.querySelector("body");
let startGame = document.querySelector('.start-game');
let computerPoints = 0;
let userPoints = 0;
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const rock = document.querySelector('.rock');
let footer = document.querySelector('.footer');
let userScore = document.querySelector('.userScore');
let computerScore = document.querySelector('.computerScore');
let result = document.querySelector('.result');
let userImage = document.querySelector('.userImage');
let computerImage = document.querySelector('.computerImage');
let playing = false;

function getComputerChoice(){
    // Rock, Scissors or Paper on random choice.
    //This function returns a random choice
    let choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random()*choices.length)];
    if(computerChoice === 'rock'){
        computerImage.src = "images/rock.jpg";
    }else if(computerChoice === 'paper'){
        computerImage.src = "images/paper.jpg";
    }else if(computerChoice === 'scissors'){
        computerImage.src = "images/scissors.jpg";
    }
    return computerChoice;

}
function playRound(userSelection, computerSelection){
    if(userSelection === 'rock' && computerSelection === 'rock'){
    
        return result.textContent = `It's a tie! Both are ${userSelection.toUpperCase()}`;

    }else if(userSelection === 'rock' && computerSelection === 'scissors'){
        userPoints++;
        userScore.textContent = userPoints;
        return result.textContent = `You win! ${userSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;

    }else if(userSelection === 'rock' && computerSelection === 'paper'){
        computerPoints++;
        computerScore.textContent = computerPoints;
        return result.textContent = `You lost! ${computerSelection.toUpperCase()} beats ${userSelection.toUpperCase()}`;

    }
    else if(userSelection === 'scissors' && computerSelection === 'paper'){
        userPoints++;
        userScore.textContent = userPoints;
       return result.textContent = `You win! ${userSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
        

    }
    else if(userSelection === 'scissors' && computerSelection === 'rock'){
        computerPoints++;
        computerScore.textContent = computerPoints;
        return result.textContent = `You lost! ${computerSelection.toUpperCase()} beats ${userSelection.toUpperCase()}`;

    }
    else if(userSelection === 'scissors' && computerSelection === 'scissors'){
        return result.textContent = `It's a tie! Both are ${userSelection.toUpperCase()}`;

    }
    else if(userSelection === 'paper' && computerSelection === 'paper'){
        return result.textContent = `It's a tie! Both are ${userSelection.toUpperCase()}`;

    }
    else if(userSelection === 'paper' && computerSelection === 'scissors'){
        computerPoints++;
        computerScore.textContent = computerPoints;
        return result.textContent = `You lost! ${computerSelection.toUpperCase()} beats ${userSelection.toUpperCase()}`;

    }
    else if(userSelection === 'paper' && computerSelection === 'rock'){
        userPoints++;
        userScore.textContent = userPoints;
        return result.textContent = `You win! ${userSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;

    }
    

}
function onPaperChoice() {
    const computerChoice = getComputerChoice();
    choice = "paper";
    userImage.src = "images/paper.jpg";
    playRound(choice, computerChoice);
    endGame();
    return;
    
}
function onScissorsChoice() {
    const computerChoice = getComputerChoice();
    choice = "scissors";
    userImage.src = "images/scissors.jpg";
    playRound(choice, computerChoice);
    endGame(); 
    return;
}
function onRockChoice() {
    const computerChoice = getComputerChoice();
    choice = "rock";
    userImage.src = "images/rock.jpg";
    playRound(choice, computerChoice);
    endGame();
    return;
}
function game(){  
    paper.addEventListener('click', onPaperChoice)
    scissors.addEventListener('click', onScissorsChoice)
    rock.addEventListener('click', onRockChoice)
}

startGame.addEventListener('click', () => {
    playing = true;
    startGame.style.visibility = 'hidden';
    body.style.visibility = 'visible'
    footer.style.visibility = 'visible';
    game();
});
if(!playing){
    body.style.visibility = 'hidden'
    footer.style.visibility = 'visible';
    startGame.style.visibility = 'visible';
}


function endGame() {
    if(userPoints === 5){
        result.textContent = "You won this game!";
        userPoints = 0;
        userScore.textContent = userPoints;
        computerPoints = 0;
        computerScore.textContent = computerPoints
        
    } else if (computerPoints === 5){
        result.textContent = "You lost this game!";
        userPoints = 0;
        userScore.textContent = userPoints;
        computerPoints = 0;
        computerScore.textContent = computerPoints;
    }
}

