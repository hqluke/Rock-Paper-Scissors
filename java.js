console.log("Hello World")
    let humanScore = 0;
    let computerScore = 0;



function getComputerChoice(){
    let computerChoice = "";
    let cc = Math.floor(Math.random() * 3);
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

function getHumanChoice(){
    let hc = prompt("rock, paper, or scissors?\nwhat's your choice? ")
    switch(hc.toLowerCase()){
    case "rock":
        hc = "rock";
        break
    case "paper":
        hc = "paper";
        break
    case "scissors":
        hc = "scissors";
        break  
    default:
        hc = "rock";
        break;            
   }
   console.log(`-------Round Results-------\n`)
   console.log(`player: ${hc}`)
   return hc;
}

function playRound(humanChoice,computerChoice){
    switch (humanChoice){
    case "rock":
        if(computerChoice == "scissors"){
            humanScore++;
            console.log(`nice job!\nYour score: ${humanScore}\nComputer score: ${computerScore}\n★★★★★★★★★★★★★★★★★★★★★★★★★★★`)
        }
        else if(computerChoice == "paper"){
            computerScore++;
            console.log(`LLLLLLLL\nYour score: ${humanScore}\nComputer score: ${computerScore}\n★★★★★★★★★★★★★★★★★★★★★★★★★★★`)
        }
        else{console.log(`You both picked rock.\nYour score: ${humanScore}\nComputer score: ${computerScore}\n★★★★★★★★★★★★★★★★★★★★★★★★★★★`)}
        break
    case "paper":
        if(computerChoice == "rock"){
            humanScore++;
            console.log(`nice job!\nYour score: ${humanScore}\nComputer score: ${computerScore}\n★★★★★★★★★★★★★★★★★★★★★★★★★★★`)
        }
        else if(computerChoice == "scissors"){
            computerScore++;
            console.log(`LLLLLLLL\nYour score: ${humanScore}\nComputer score: ${computerScore}\n★★★★★★★★★★★★★★★★★★★★★★★★★★★`)
        }
        else{console.log(`You both picked paper.\nYour score: ${humanScore}\nComputer score: ${computerScore}\n★★★★★★★★★★★★★★★★★★★★★★★★★★★`)}
        break
    case "scissors":
        if(computerChoice == "paper"){
            humanScore++;
            console.log(`nice job!\nYour score: ${humanScore}\nComputer score: ${computerScore}\n★★★★★★★★★★★★★★★`)
        }
        else if(computerChoice == "rock"){
            computerScore++;
            console.log(`LLLLLLLL\nYour score: ${humanScore}\nComputer score: ${computerScore}\n★★★★★★★★★★★★★★★`)
        }
        else{console.log(`You both picked scissors.\nYour score: ${humanScore}\nComputer score: ${computerScore}\n★★★★★★★★★★★★★★★★★★★★★★★★★★★`)}
        break           
   }

}

function playGame(){

    for(i = 0; i < 5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice()
    playRound(humanSelection,computerSelection);
    }


    if(humanScore > computerScore){
        console.log(`********Game Results*******\nYou Win!\nYour score: ${humanScore}\nComputer score: ${computerScore}\n✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬`)
    }
    else if (computerScore > humanScore){
        console.log(`********Game Results*******\nYou Lost! LLLLLLL\nYour score: ${humanScore}\nComputer score: ${computerScore}\n✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬`)
    }
    else{
        console.log(`********Game Results*******\nThis is awkward;\nyou both tied.\nYour score: ${humanScore}\nComputer score: ${computerScore}\n✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬✬`)
    }
}

playGame();

