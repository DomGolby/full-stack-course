// JAVASCRIPT SYNTAX, PART I
// Rock, Paper, or Scissors
// Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

// The possible outcomes are:

// Rock destroys scissors.
// Scissors cut paper.
// Paper covers rock.
// If there’s a tie, then the game ends in a draw.
// Our code will break the game into four parts:

// Get the user’s choice.
// Get the computer’s choice.
// Compare the two choices and determine a winner.
// Start the program and display the results.




// Arrow functions with a single argument 
const getUserChoice = userInput => { 
  userInput = userInput.toLowerCase();

  if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors') {
    return userInput;
  } else {
    console.log(`Invalid entry. Please enter Rock, Paper, or Scissors.`); 
  }
}
  

  // Arrow function with no arguments 
const getComputerChoice = () => { 
  let choice = Math.floor(Math.random() * 3)
    
    switch (choice) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    }
} 

// getComputerChoice(); 



// Arrow function with two arguments 
const determineWinner = (getUserChoice, getComputerChoice) => { 
  if (getUserChoice === getComputerChoice) {
    return ('Game was a tie.')
  }

  if (getUserChoice === 'rock') {
    if (getComputerChoice === 'paper') {
      return ('The computer won. Paper beats Rock.');
    }
  } else {
    return ('You won.');
  }
  
  if (getUserChoice === 'paper') {
    if (getComputerChoice === 'scissors') {
      return ('The computer won. Scissors beat Paper.');
    }
  } else {
    return ('You won.');
  }

  if (getUserChoice === 'scissors') {
    if (getComputerChoice === 'rock') {
      return ('The computer won. Rock beats Scissors.');
    }
  } else {
    return ('You won.');
  }

}; 



// let winner = determineWinner(getUserChoice('rock'),getComputerChoice());


// console.log('User picked: ' + getUserChoice.userInput); // should print 'rock', 'paper', or 'scissors'

// console.log('Computer picked: ' + getComputerChoice()); // should print 'rock', 'paper', or 'scissors'


// console.log(winner); 

// console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
// console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
// console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'

// console.log(determineWinner('rock', 'paper'));
// console.log(determineWinner('paper', 'scissors'));
// console.log(determineWinner('scissors', 'rock'));



const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();

