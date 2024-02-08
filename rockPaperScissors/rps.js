console.log("Testing 1, 2, 3, can anybody hear me?");
/*Rock, Paper, Scissors simulator is a program that allows the user to play Rock, Paper, Scissors, against a computer opponent.*/

//Make a function called getComputerChoice that determines what the computer is going to "throw" at the player. 
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

console.log(getComputerChoice());