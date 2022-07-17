//get a random number between two numbers
function getComputerChoice (min, max)
{
    let choice = (Math.floor(Math.random() * max ) + min);
    if(choice == 1)
        return "Rock";
    else if (choice == 2)
        return "Paper";
    else
        return "Scissors";
}
//get the player choice
function getPlayerChoice()
{
    let playerChoice = prompt("Write your choice here!");
    return playerChoice;
}
//play a single round
function playRound(playerSelection, computerSelection)
{
    
}
let h = getComputerChoice(1, 3);
console.log(h);