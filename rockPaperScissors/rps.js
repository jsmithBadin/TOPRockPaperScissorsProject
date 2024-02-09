console.log("Testing 1, 2, 3, can anybody hear me?");
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
console.log(getComputerChoice());

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
const playerSelection = "Scissors";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

//Make playGame function to run the actual game.  Play 5 rounds for one game, winner of each round displayed through console.log, overall winner displayed at the end.  
