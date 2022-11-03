
let possible = ['Rock', 'Paper', 'Scissors'];

let playerScore = 0;
let computerScore = 0;
const playerCount = document.querySelector('.player-score');
const computerCount = document.querySelector('.computer-score');
const message = document.querySelector('.message');


function getComputerChoice() {
    let choice = possible[Math.floor(Math.random() * possible.length)];
    return choice.toLowerCase();
}



function playRound(playerSel, computerSel) {
    if(playerSel == computerSel){
        computerCount.textContent = "The Almighty AI: " + computerScore;
        playerCount.textContent = "You (lowly human): " + playerScore;
        message.textContent = "It's a tie, you're mediocre";

    } else if (playerSel == 'rock'  &&	computerSel == 'paper'){
        computerScore++;
        computerCount.textContent = "The Almighty AI: " + computerScore;
        playerCount.textContent = "You (lowly human): " + playerScore;
        message.textContent = "LOSER: Your rock got folded by paper, ironic huh?"
        
    } else if (playerSel == 'rock'  &&	computerSel == 'scissors'){
        playerScore++;
        computerCount.textContent = "The Almighty AI: " + computerScore;
        playerCount.textContent = "You (lowly human): " + playerScore;
        message.textContent = "WINNER: Your rock crushed sharp scissors"

    } else if (playerSel == 'paper'  &&	computerSel == 'rock'){
        playerScore++;
        computerCount.textContent = "The Almighty AI: " + computerScore;
        playerCount.textContent = "You (lowly human): " + playerScore;
        message.textContent = "WINNER: You folded a rock with paper, irony is a funny thing"

    } else if (playerSel == 'paper'  &&	computerSel == 'scissors'){
        computerScore++;
        computerCount.textContent = "The Almighty AI: " + computerScore;
        playerCount.textContent = "You (lowly human): " + playerScore;
        message.textContent = "LOSER: Chop"

    } else if (playerSel == 'scissors'  &&	computerSel == 'rock'){
        computerScore++;
        computerCount.textContent = "The Almighty AI: " + computerScore;
        playerCount.textContent = "You (lowly human): " + playerScore;
        message.textContent = "LOSER: Don't bring scissors to a rock fight"

    } else if (playerSel == 'scissors'  &&	computerSel == 'paper'){
        playerScore++;
        computerCount.textContent = "The Almighty AI: " + computerScore;
        playerCount.textContent = "You (lowly human): " + playerScore;
        message.textContent = "WINNER: Chop (but good)"
    } 
}

function gameEnd(playerScore, computerScore){
    if(playerScore == 5){
        message.textContent = "THE ULTIMATE WINNER: the lowly human...";
        return;
    }
    if(computerScore == 5){
        message.textContent = "THE ULTIMATE WINNER: The Almighty AI, did you expect otherwise?";
        return;
    }
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach( button => button.addEventListener('click', function(e) {
    //console.log(this.id);
    let computerSel = getComputerChoice();
    //console.log(computerSel);
    playRound(this.id, computerSel);
    
    
    })
    )