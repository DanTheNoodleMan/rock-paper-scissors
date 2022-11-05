
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
        scores.innerHTML = `You (the lowly human): ${playerScore} VS. The Almighty AI: ${computerScore}`;
        message.innerHTML = "It's a tie, you're mediocre";

    } else if (playerSel == 'rock'  &&	computerSel == 'paper'){
        computerScore++;
        scores.innerHTML = `You (the lowly human): ${playerScore} VS. The Almighty AI: ${computerScore}`;
        message.innerHTML = "<span style='color:red;'>LOSER:</span> Your rock got folded by paper, ironic huh?"
        
    } else if (playerSel == 'rock'  &&	computerSel == 'scissors'){
        playerScore++;
        scores.innerHTML = `You (the lowly human): ${playerScore} VS. The Almighty AI: ${computerScore}`;
        message.innerHTML = "<span style='color:green;'>WINNER:</span> Your rock crushed sharp scissors"

    } else if (playerSel == 'paper'  &&	computerSel == 'rock'){
        playerScore++;
        scores.innerHTML = `You (the lowly human): ${playerScore} VS. The Almighty AI: ${computerScore}`;
        message.innerHTML = "<span style='color:green;'>WINNER:</span> You folded a rock with paper, irony is a funny thing"

    } else if (playerSel == 'paper'  &&	computerSel == 'scissors'){
        computerScore++;
        scores.innerHTML = `You (the lowly human): ${playerScore} VS. The Almighty AI: ${computerScore}`;
        message.innerHTML = "<span style='color:red;'>LOSER:</span> Chop"

    } else if (playerSel == 'scissors'  &&	computerSel == 'rock'){
        computerScore++;
        scores.innerHTML = `You (the lowly human): ${playerScore} VS. The Almighty AI: ${computerScore}`;
        message.innerHTML = "<span style='color:red;'>LOSER:</span> Don't bring scissors to a rock fight"

    } else if (playerSel == 'scissors'  &&	computerSel == 'paper'){
        playerScore++;
        scores.innerHTML = `You (the lowly human): ${playerScore} VS. The Almighty AI: ${computerScore}`;
        message.innerHTML = "<span style='color:green;'>WINNER:</span> Chop (but good)"
    } 
}

function gameEnd(playerScore, computerScore){
    if(playerScore == 5 || computerScore == 5){
        reset.classList.toggle('disabled');
        if(playerScore == 5){
            message.innerText = "THE ULTIMATE WINNER: the lowly human...";
            message.style.transform = 'scale(1.5)';
        }
        else if(computerScore == 5){
            message.innerText = "THE ULTIMATE WINNER: The Almighty AI, did you expect otherwise?";
        }
        buttons.forEach(button => {
            button.setAttribute('disabled', '');
            button.classList.add('disabled-btn');
            button.style.filter = "opacity(0.8)";
        })
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
    gameEnd(playerScore, computerScore);
    
    })
    )