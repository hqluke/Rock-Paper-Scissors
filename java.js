let humanScore = 0;
let computerScore = 0;
let totalPlayed = 0;


   

const game = document.querySelector("#button");
game.addEventListener('click', (event) => {
    let target = event.target;
    let hum;

    switch(target.id) {
        case 'rock':
            hum = "rock";
            break;
        case 'paper':
            hum = "paper";
            break;
        case 'scissors':
            hum = "scissors";
            break;
        case 'PlayAgain':
            window.location.reload();
            break;
        }

        computerSelection = getComputerChoice()
        totalPlayed++;
        playRound(hum,computerSelection);

    });

function getComputerChoice(){
    let computerChoice = "";
    let cc = computerRandom();

    switch(cc){
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;              
   }

   return computerChoice;
}

function computerRandom(){
    return Math.floor(Math.random() * 3);
}    

function playRound(humanChoice,computerChoice){
    switch (humanChoice){
    case "rock":
        if(computerChoice == "scissors"){
            humanScore++;
            humanWin(humanChoice,computerChoice);
        }
        else if(computerChoice == "paper"){
            computerScore++;
            computerWin(humanChoice,computerChoice);
        }
        else{tie(humanChoice,computerChoice);}
        break;
    case "paper":
        if(computerChoice == "rock"){
            humanScore++;
            humanWin(humanChoice,computerChoice);
        }
        else if(computerChoice == "scissors"){
            computerScore++;
            computerWin(humanChoice,computerChoice);
        }
        else{tie(humanChoice,computerChoice);}
        break;
    case "scissors":
        if(computerChoice == "paper"){
            humanScore++;
            humanWin(humanChoice,computerChoice);
        }
        else if(computerChoice == "rock"){
            computerScore++;
            computerWin(humanChoice,computerChoice);
        }
        else{tie(humanChoice,computerChoice);}
        break;
   }

}

function winText() {
  return `You WON the Round!\nYour score: ${humanScore}\nComputer score: ${computerScore}\n`;
}

function loseText() {
  return `You LOST the round :(\nYour score: ${humanScore}\nComputer score: ${computerScore}\n`;
}

function rockTie() {
  return `You both picked rock.\nYour score: ${humanScore}\nComputer score: ${computerScore}\n`;
}

function paperTie() {
  return `You both picked paper.\nYour score: ${humanScore}\nComputer score: ${computerScore}\n`;
}

function scissorsTie() {
  return `You both picked scissors.\nYour score: ${humanScore}\nComputer score: ${computerScore}\n`;
}

function selection(human, computer){
    return `-------Round ${totalPlayed}-------\nPlayer: ${human}\nComputer: ${computer}\n`;
}

let resultDiv = document.querySelector("#result")
function humanWin(human, computer){
   let para = document.createElement("p");
   para.classList.add("p");
   para.textContent += selection(human, computer);
   para.textContent += winText();
   para.style.backgroundColor = "rgba(88, 255, 152, 0.482)"
   para.style.textShadow = "1px 1px 2px rgba(130, 196, 134, 0.63)";
   resultDiv.appendChild(para);
   if (humanScore === 5){endGame("human");} 
}

function computerWin(human, computer){
   let para = document.createElement("p");
   para.classList.add("p");
   para.textContent += selection(human, computer); 
   para.textContent += loseText();
   para.style.backgroundColor = "rgba(255, 117, 117, 0.7)"
   para.style.textShadow = "1px 1px 2px rgba(248, 218, 218, 0.63)";
   resultDiv.appendChild(para);
   if (computerScore === 5){endGame("computer");} 
}

function tie(human, computer){
   let para = document.createElement("p");
   para.classList.add("p");

   switch(human){
    case "rock":
        para.textContent += selection(human, computer);
        para.textContent += rockTie();
        break;
    case "paper":
        para.textContent += selection(human, computer);
        para.textContent += paperTie();
        break;
    case "scissors":
        para.textContent += selection(human, computer);
        para.textContent += scissorsTie();
        break;
   }

   para.style.backgroundColor = "rgba(197, 255, 88, 0.482)"
   para.style.textShadow = "1px 1px 2px rgba(195, 136, 183, 0.75)";
   resultDiv.appendChild(para);
}

function gameWinHuman() {
  return `****Game Results****\n\n\nYou WON!`;
}
function gameWinComputer() {
  return `****Game Results****\n\n\nYou LOSE!`;
}

const endFinal = document.querySelector("#endgame");

function endGame(winner){
    let finalText = document.createElement("p");
    finalText.classList.add("p")
    switch(winner){
        case "human":
            finalText.textContent += gameWinHuman();
            finalText.style.backgroundColor = "rgba(88, 255, 152, 0.999)";
            break;
        case "computer":
            finalText.textContent += gameWinComputer();
            finalText.style.backgroundColor ="rgba(255, 117, 117, 0.999)";
            break; 
    }

    endDelete();
    finalText.style.color = "white";
    finalText.style.textShadow = "1px 1px 2px black";
    resultDiv.appendChild(finalText);
}

const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");


function endDelete(){
    let playAgain = document.createElement("button");
    playAgain.id = "PlayAgain";
    playAgain.textContent = "Play Again";
    buttonRock.remove();
    buttonPaper.remove();
    buttonScissors.remove();
    game.appendChild(playAgain);
}




