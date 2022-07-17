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
        if (playerSelection == "rock"){
            result = "Tie!";
            computerPoints++;
            playerPoints++;
        }
        else if (playerSelection == "paper"){
            result = "You win! Paper beats Rock!"
            playerPoints++;
        }
        else{
            result = "You lose! Rock beats Scissors!"
            computerPoints++;
        }
    }
    else if (computerSelection == "Paper")
    {
        if (playerSelection == "rock"){
            result = "You lose! Paper beats Rock!";
            computerPoints++;
        }
        else if (playerSelection == "paper"){
            result = "Tie!"
            computerPoints++;
            playerPoints++;
        }
        else{
            result = "You win! Scissors beats Rock!"
            playerPoints++;
        }
    }
    else
    {
        if (playerSelection == "rock"){
            result = "You win! Rock beats Scissors!";
            playerPoints++;
        }
        else if (playerSelection == "paper"){
            result = "You lose! Scissors beats Paper!";
            computerPoints++;
        }
        else{
            result = "Tie!"
            computerPoints++;
            playerPoints++;
        }
    }
    return result;
}
//this function manage the entire game cycle
function game()
{
    computerPoints = 0;
    playerPoints= 0;
    console.log("The game started!");
    for (let i = 0; i < 5; i++)
    {
        let computerSelection = getComputerChoice(1, 3);
        let playerSelection = getPlayerChoice();
        console.log("This is a new round!");
        console.log("The computer selection is " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerPoints > computerPoints)
        console.log("You win the game. The computer lose!");
    else if (computerPoints > playerPoints)
        console.log("You lose the game. The computer win!");
    else
        console.log("You and the computer have the same points. It's a Tie!");
    return 0;
}
//here I start the game calling the main function
let computerPoints;
let playerPoints;
game();