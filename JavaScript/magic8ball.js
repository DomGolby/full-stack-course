let userName = "Jane";
userName = userName
  ? console.log(`Hello, ${userName}!`)
  : console.log("Hello!");

console.log(`${userName}`); //why does the variable become undefined here?

const userQuestion = "Will the crow bro bring me a gift today?";
console.log(`${userName} asked ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);

console.log(randomNumber);

let eightBall = "";

switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;

  case 1:
    eightBall = "It is decidedly so";
    break;

  case 2:
    eightBall = "Reply hazy try again";
    break;

  case 3:
    eightBall = "Cannot predict now";
    break;

  case 4:
    eightBall = "Do not count on it";
    break;

  case 5:
    eightBall = "My sources say no";
    break;

  case 6:
    eightBall = "Outlook not so good";
    break;

  case 7:
    eightBall = "Signs point to yes";
    break;

  default:
    eightBall = "";
}

console.log(`The Magic 8 Ball answered: ${eightBall}`);

// 'It is certain'
// 'It is decidedly so'
// 'Reply hazy try again'
// 'Cannot predict now'
// 'Do not count on it'
// 'My sources say no'
// 'Outlook not so good'
// 'Signs point to yes'