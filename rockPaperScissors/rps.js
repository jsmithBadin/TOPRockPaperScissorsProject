/*Rock, Paper, Scissors simulator is a program that allows the user to play Rock, Paper, Scissors, against a computer opponent.*/

//Make a function called getComputerChoice that determines what the computer is going to "throw" at the player. 
//We expect the computer to choose each of Rock, Paper, and Scissors 1/3 of the time.
function getComputerChoice(){
    const roll = Math.random();
    if (roll < (1/3)){
        return "Rock";
    }
    else if (roll < (2/3)){
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

// console.log to test that getComputerChoice is working.  
//Keeping this for now so that I can verify that the game plays by the rules when fully coded.
/*console.log(getComputerChoice());*/

// make a function, play to play a round of RPS, using parameters "playerSelection" and "computerSelection".  
//The function returns a string announcing result.
//Convert inputs to upper case, so case doesn't cause comparison problems.
//If inputs match, declare a tie
//Else, rock beats scissors, scissors beats paper, paper beats rock
//N.B. 4th condition exists in case the player does not send a proper input
//Edit note: changing this function to return whether computer or player won the round, and console.logging the winner of the round
function playRound(playerSelection, computerSelection){
    const player = playerSelection.toUpperCase();
    const computer = computerSelection.toUpperCase();
    if (player === computer){
        console.log("It's a tie, you both threw " + player + ".  Please play again!");
        return "tie";
    }
    else if (player === "ROCK"){
        if (computer === "SCISSORS"){
            console.log("You win!  Rock beats Scissors.")
            return "player";
        }
        else {
            console.log("You lose.  Paper beats Rock.");
            return "computer";
        }
    }
    else if (player === "PAPER"){
        if (computer === "ROCK"){
            console.log("You win!  Paper beats Rock.");
            return "player";
        }
        else {
            console.log("You lose.  Scissors beats Paper.");
            return "computer";
        }
    }
    else if (player === "SCISSORS"){
        if (computer === "PAPER"){
            console.log("You win!  Scissors beats Paper.");
            return "player";
        }
        else {
            console.log("You lose.  Rock beats Scissors.");
            return "computer";
        }
    }
    else{
        return "Sorry, you don't choose an acceptable response.  Please play again and use 'Rock', 'Paper', or 'Scissors'!";
    }
}

//Testing that playRound functions as expected:
// Edit: commenting out so testing does not interfere with primary operation
/*
const playerSelection = "Scissors";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
*/

//Make playGame function to run the actual game.  Play 5 rounds for one game, winner of each round displayed through console.log, overall winner displayed at the end.  
function playGame(){
    //create variables to track scores
    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;
    //play 5 rounds, track winner of each round
    for (let i = 1; i < 6; i++){
        // Display results as of current round:
        console.log("The current score is:");
        console.log("You: " + playerScore);
        console.log("Computer: " + computerScore);
        console.log("Ties: " + tieScore);

        //Make selections for round
        let playerSelection = prompt("Let's play Rock, Paper, Scissors.  Make your choice!");
        let computerSelection = getComputerChoice();
        
        //Determine winner
        switch (playRound(playerSelection, computerSelection)) {
            case "tie":
                tieScore += 1;
                break;
            case "player":
                playerScore += 1;
                break;
            case "computer":
                computerScore += 1;
                break;
            default:
                //this occurs in case of bad input.  resets the round and allows player to continue.
                console.log("I'm sorry, that wasn't a valid response, please choose 'Rock', 'Paper', or 'Scissors'.");
                i -= 1;
        
        }
    }

    //Display result of full match
    if (playerScore > computerScore) {
        console.log("You win!  You beat the computer by a score of " + playerScore + " to " + computerScore + ", with " + tieScore + " ties.");
    } else if (playerScore < computerScore) {
        console.log("Sorry, you lose!  You lost to the computer by a score of " + computerScore + " to " + playerScore + ", with " + tieScore + " ties.");
    } else {
        console.log("You tied with the computer, with each of you getting " + playerScore + " wins and " + tieScore + " ties.");
    }
}

playGame();