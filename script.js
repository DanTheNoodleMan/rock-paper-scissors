
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
        scores.innerHTML = `You (the lowly human): <span style='color:green;'>${playerScore}</span> VS. The Almighty AI: <span style='color:red;'>${computerScore}</span>`;
        message.innerHTML = "It's a tie, you're mediocre";

    } else if (playerSel == 'rock'  &&	computerSel == 'paper'){
        computerScore++;
        scores.innerHTML = `You (the lowly human): <span style='color:green;'>${playerScore}</span> VS. The Almighty AI: <span style='color:red;'>${computerScore}</span>`;
        message.innerHTML = "<span style='color:red;'>LOSER:</span> Your shooting star got wished upon, loser"
        
    } else if (playerSel == 'rock'  &&	computerSel == 'scissors'){
        playerScore++;
        scores.innerHTML = `You (the lowly human): <span style='color:green;'>${playerScore}</span> VS. The Almighty AI: <span style='color:red;'>${computerScore}</span>`;
        message.innerHTML = "<span style='color:green;'>WINNER:</span> Your shooting star crushed the UFO"

    } else if (playerSel == 'paper'  &&	computerSel == 'rock'){
        playerScore++;
        scores.innerHTML = `You (the lowly human): <span style='color:green;'>${playerScore}</span> VS. The Almighty AI: <span style='color:red;'>${computerScore}</span>`;
        message.innerHTML = "<span style='color:green;'>WINNER:</span> You wished upon a star, and it came true!"

    } else if (playerSel == 'paper'  &&	computerSel == 'scissors'){
        computerScore++;
        scores.innerHTML = `You (the lowly human): <span style='color:green;'>${playerScore}</span> VS. The Almighty AI: <span style='color:red;'>${computerScore}</span>`;
        message.innerHTML = "<span style='color:red;'>LOSER:</span> You got abducted by aliens!"

    } else if (playerSel == 'scissors'  &&	computerSel == 'rock'){
        computerScore++;
        scores.innerHTML = `You (the lowly human): <span style='color:green;'>${playerScore}</span> VS. The Almighty AI: <span style='color:red;'>${computerScore}</span>`;
        message.innerHTML = "<span style='color:red;'>LOSER:</span> This asteroid belt is a no UFO fly-zone for a reason..."

    } else if (playerSel == 'scissors'  &&	computerSel == 'paper'){
        playerScore++;
        scores.innerHTML = `You (the lowly human): <span style='color:green;'>${playerScore}</span> VS. The Almighty AI: <span style='color:red;'>${computerScore}</span>`;
        message.innerHTML = "<span style='color:green;'>WINNER:</span> You abducted an astronaut!"
    } 
}

function gameEnd(playerScore, computerScore){
    if(playerScore == 5 || computerScore == 5){
        reset.classList.toggle('disabled');
        if(playerScore == 5){
            message.innerHTML = "<span style='color:green;'>THE ULTIMATE WINNER:</span> the lowly human...";
            message.style.transform = 'scale(1.5)';
        }
        else if(computerScore == 5){
            message.innerHTML = "<span style='color:red;'>THE ULTIMATE WINNER:</span> The Almighty AI, did you expect otherwise?";
            message.style.transform = 'scale(1.5)';
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
    reset.addEventListener('click', () => {
        window.location.reload();
    })
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach( button => button.addEventListener('click', function(e) {
    //console.log(this.id);
    let computerSel = getComputerChoice();
    //console.log(computerSel);
    playRound(this.id, computerSel);
    gameEnd(playerScore, computerScore);
    resetGame();
    })
    )