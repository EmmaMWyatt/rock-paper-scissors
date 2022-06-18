

function playRound(computerSelection,playerSelection){
    
    if (computerSelection === playerSelection) {
        /* draw */
    }
    if (computerSelection === "rock" && playerSelection === 'scissors' ) {
        /*computer wins*/
    }
    if (computerSelection === "scissors" && playerSelection === 'paper') {
        /*computer wins*/
    }
    if (computerSelection === "paper" && playerSelection === 'rock'){
        /*computer wins*/
    }
    else {
        /*player wins*/
    }
    

}

function PlayerPlay(){
    do{
        playerSelection = prompt("Please enter Rock, Paper or Scissors: ");
        playerSelection = playerSelection.toLowerCase();
        
        if (playerSelection === "rock"|| playerSelection === 'paper' || playerSelection === 'scissors') {
        return playerSelection; 
        }

    } while (true)
}


function computerPlay(){
    let x = Math.floor(Math.random()* 3);
    if (x == 0) {
        computerSelection = "rock";
    }
    if (x == 1) {
        computerSelection = 'paper';
    }
    if (x == 2) {
        computerSelection = 'scissors';
    }
    return computerSelection;
}
