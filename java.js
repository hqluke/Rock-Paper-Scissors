console.log("Hello World")
    let humanScore = 0;
    let computerScore = 0;
    let totalPlayed = 0;


    //also could add da flex to the css but idk if i will.

function computerRandom(){
    return Math.floor(Math.random() * 3);
}


function getComputerChoice(){
    let computerChoice = "";
    let cc = computerRandom();
   switch(cc){
    case 0:
        computerChoice = "rock";
        break
    case 1:
        computerChoice = "paper";
        break
    case 2:
        computerChoice = "scissors";
        break              
   }
   console.log (`computer: ${computerChoice}`)
   return computerChoice;


   
}
    let game = document.querySelector("#button");
    game.addEventListener('click', (event) => {
        let target = event.target;
        let hum;
        switch(target.id) {
        case 'rock':
            hum = "rock";
            computerSelection = getComputerChoice()
            totalPlayed++;
            playRound(hum,computerSelection);
            break;
        case 'paper':
            hum = "paper";
            console.log('Paper was clicked');
            console.log(`-------Round Results-------\n`)
            console.log(`player: ${hum}\ncomputer: ${computerSelection}`)
            computerSelection = getComputerChoice()
            totalPlayed++;
            playRound(hum,computerSelection);
            break;
        case 'scissors':
            hum = "scissors";
            console.log('Scissors was clicked');
            console.log(`-------Round Results-------\n`)
            console.log(`player: ${hum}`)
            computerSelection = getComputerChoice()
            totalPlayed++;
            playRound(hum,computerSelection);
            break;
    }
    });
    
function total(){
    return `Total Rounds Played: ${totalPlayed}\n`
}

function winText() {
  return `You won the Round!\nYour score: ${humanScore}\nComputer score: ${computerScore}\n`;
}

function loseText() {
  return `You lost the round :(\nYour score: ${humanScore}\nComputer score: ${computerScore}\n`;
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
    return `-------Round ${totalPlayed}-------\nPlayer: ${human}\nComputer: ${computer}\n`
   }

let resultDiv = document.querySelector("#result")
function humanWin(human, computer){
   let para = document.createElement("p");
   para.classList.add(`p${totalPlayed}`);
   para.textContent += selection(human, computer);
   para.textContent += winText();
   resultDiv.appendChild(para);
   if (humanScore === 5){endGame("human");} 
}

function computerWin(human, computer){
   let para = document.createElement("p");
   para.classList.add(`p${totalPlayed}`)
   para.textContent += selection(human, computer);
   para.textContent += loseText();
   resultDiv.appendChild(para);
   if (computerScore === 5){endGame("computer");} 
}

function tie(human, computer){
   let para = document.createElement("p");
   para.classList.add(`p${totalPlayed}`);
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
   resultDiv.appendChild(para);
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
        break
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
        break
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
        break           
   }

}

function gameWinHuman() {
  return `********Game Results*******\nYou Win!\nYour score: ${humanScore}\nComputer score: ${computerScore}\n`;
}
function gameWinComputer() {
  return `********Game Results*******\nYou Lost! LLLLLLL\nYour score: ${humanScore}\nComputer score: ${computerScore}\n`;
}

const endFinal = document.querySelector("#endgame");

function endGame(winner){
    let finalText = document.createElement("p");
    switch(winner){
        case "human":
            finalText.classList.add(`winner${winner}`)
            finalText.textContent += gameWinHuman();
            finalText.textContent += total();
            endDelete();
            endFinal.appendChild(finalText);
            break;
        case "computer":
            finalText.classList.add(`winner${winner}`)
            finalText.textContent += gameWinComputer();
            finalText.textContent += total();
            endDelete();
            endFinal.appendChild(finalText);
            break; 
    }
}

function endDelete(){
    game.remove();
}




