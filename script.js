
let possible = ['Rock', 'Paper', 'Scissors'];

let playerScore = 0;
let computerScore = 0;
const scores = document.querySelector('.scores');
const message = document.querySelector('.message');

const reset = document.querySelector('.reset');


function getComputerChoice() {
    let choice = possible[Math.floor(Math.random() * possible.length)];
    return choice.toLowerCase();
}



function playRound(playerSel, computerSel) {
    if(playerSel == computerSel){
        scores.innerText = `You (the lowly human): ${playerScore} VS. The Almighty AI: ${computerScore}`;
        message.innerText = "It's a tie, you're mediocre";

    } else if (playerSel == 'rock'  &&	computerSel == 'paper'){
        computerScore++;
        scores.innerText = `You (the lowly human): ${playerScore} VS. The Almighty AI: ${computerScore}`;
        message.innerText = "LOSER: Your rock got folded by paper, ironic huh?"
        
    } else if (playerSel == 'rock'  &&	computerSel == 'scissors'){
        playerScore++;
        scores.innerText = `You (the lowly human): ${playerScore} VS. The Almighty AI: ${computerScore}`;
        message.innerText = "WINNER: Your rock crushed sharp scissors"

    } else if (playerSel == 'paper'  &&	computerSel == 'rock'){
        playerScore++;
        scores.innerText = `You (the lowly human): ${playerScore} VS. The Almighty AI: ${computerScore}`;
        message.innerText = "WINNER: You folded a rock with paper, irony is a funny thing"

    } else if (playerSel == 'paper'  &&	computerSel == 'scissors'){
        computerScore++;
        scores.innerText = `You (the lowly human): ${playerScore} VS. The Almighty AI: ${computerScore}`;
        message.innerText = "LOSER: Chop"

    } else if (playerSel == 'scissors'  &&	computerSel == 'rock'){
        computerScore++;
        scores.innerText = `You (the lowly human): ${playerScore} VS. The Almighty AI: ${computerScore}`;
        message.innerText = "LOSER: Don't bring scissors to a rock fight"

    } else if (playerSel == 'scissors'  &&	computerSel == 'paper'){
        playerScore++;
        scores.innerText = `You (the lowly human): ${playerScore} VS. The Almighty AI: ${computerScore}`;
        message.innerText = "WINNER: Chop (but good)"
    } 
}

function gameEnd(playerScore, computerScore){
    if(playerScore == 5){
        message.innerText = "THE ULTIMATE WINNER: the lowly human...";
        return;
    }
    if(computerScore == 5){
        message.innerText = "THE ULTIMATE WINNER: The Almighty AI, did you expect otherwise?";
        return;
    }
}

function resetGame(){
    window.location.reload();
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach( button => button.addEventListener('click', function(e) {
    //console.log(this.id);
    let computerSel = getComputerChoice();
    //console.log(computerSel);
    playRound(this.id, computerSel);
    
    
    })
    )