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
    let result;
    //choose the winner
    if (computerSelection == "Rock")
    {
        if (playerSelection == "rock")
            result = "Tie!";
        else if (playerSelection == "paper")
            result = "You win! Paper beats Rock!"
        else
            result = "You lose! Rock beats Scissors!"
    }
    else if (computerSelection == "Paper")
    {
        if (playerSelection == "rock")
            result = "You lose! Paper beats Rock!";
        else if (playerSelection == "paper")
            result = "Tie!"
        else
            result = "You win! Scissors beats Rock!"
    }
    else
    {
        if (playerSelection == "rock")
            result = "You win! Rock beats Scissors!";
        else if (playerSelection == "paper")
            result = "You lose! Scissors beats Paper!"
        else
            result = "Tie!"
    }
    return result;
}
//this function manage the entire game cycle
function game()
{
    console.log("The game started!");
    for (let i = 0; i < 5; i++)
    {
        let computerSelection = getComputerChoice(1, 3);
        let playerSelection = getPlayerChoice();
        console.log("This is a new round!");
        console.log("The computer selection is " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log("The game is finished!");
}
//here I start the game calling the main function
game();