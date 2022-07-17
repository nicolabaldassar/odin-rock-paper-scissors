//get a random number between two numbers
function getComputerChoice (min, max)
{
    let choice = (Math.floor(Math.random() * max ) + min);
    if(choice == 1)
        return "rock";
    else if (choice == 2)
        return "paper";
    else
        return "scissors";
}
//get the player choice
function getPlayerChoice()
{
    //ask the choice
    let playerChoice = prompt("Choose Rock, Paper or Scissors!");
    //make the selection case-insensitive
    playerChoice = playerChoice.toLowerCase();
    //return the lowercase version of the player choice
    return playerChoice;
}
//play a single round
function playRound(playerSelection, computerSelection)
{
    computerSelection = getComputerChoice(1, 3);
    playerSelection = getPlayerChoice();
    console.log(playerSelection);
}
playRound();