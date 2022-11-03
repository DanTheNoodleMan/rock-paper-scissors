
let possible = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    let choice = possible[Math.floor(Math.random() * possible.length)];
    return choice.toLowerCase();
}



function playRound(playerSel, computerSel) {
    if(playerSel == computerSel){
        return "It's a tie, you're mediocre"

    } else if (playerSel == 'rock'  &&	computerSel == 'paper'){
        return "LOSER: Your rock got folded by paper, ironic huh?"
    } else if (playerSel == 'rock'  &&	computerSel == 'scissors'){
        return "WINNER: Your rock crushed sharp scissors"

    } else if (playerSel == 'paper'  &&	computerSel == 'rock'){
        return "WINNER: You folded a rock with paper, irony is a funny thing"
    } else if (playerSel == 'paper'  &&	computerSel == 'scissors'){
        return "LOSER: Chop"

    } else if (playerSel == 'scissors'  &&	computerSel == 'rock'){
        return "LOSER: Don't bring scissors to a rock fight"
    } else if (playerSel == 'scissors'  &&	computerSel == 'paper'){
        return "Winner: Chop (but good)"
    } 
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach( button => button.addEventListener('click', function(e) {
    console.log(this.id);
    let computerSel = getComputerChoice();
    console.log(computerSel);
    console.log(playRound(this.id, computerSel));
    })
    )