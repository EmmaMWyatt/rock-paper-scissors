let computerScore = 0;
let playerScore = 0;
theresAWinner = false;

game()

function game() {
    console.log("let's play Rock Paper Scissors, first to 5 wins!")
    
    do {
    playRound(computerPlay(),PlayerPlay())
    console.log("the score is Computer: " + computerScore + " Player: " + playerScore)

    if(playerScore === 5 || computerScore === 5) {
        theresAWinner = true;
    }
    } while (theresAWinner === false);
    if(playerScore === 5) {
        console.log("congratulations you win!")
    }
    else {
        console.log("Bad luck! You lost")
    }

    return;
}

function playRound(computerSelection,playerSelection){
    
    if (computerSelection === playerSelection) {
        console.log("you played " + playerSelection + " and the computer played " + computerSelection + ". It's a draw!")
        return;
    }
    if (computerSelection === "rock" && playerSelection === 'scissors' ) {
        console.log("you played " + playerSelection + " and the computer played " + computerSelection + ". You lost this round!")
        return computerScore = computerScore + 1;
    }
    if (computerSelection === "scissors" && playerSelection === 'paper') {
        console.log("you played " + playerSelection + " and the computer played " + computerSelection + ". You lost this round!")
        return computerScore = computerScore + 1;
    }
    if (computerSelection === "paper" && playerSelection === 'rock'){
        console.log("you played " + playerSelection + " and the computer played " + computerSelection + ". You lost this round!")
        computerScore = computerScore + 1;
    }
    else {
        console.log("you played " + playerSelection + " and the computer played " + computerSelection + ". You won this round!")
        return playerScore = playerScore +1;
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
