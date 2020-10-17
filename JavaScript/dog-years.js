// Stupid project instructions want you to lowercase the name... let myName = 'Dom'.toLowerCase();
let myName = 'Dom';

// set the users age (human years)
const myAge = 35;

// The first 2 human years of a dogs age count as 10.5 dog years, the rest count as 4.
let earlyYears = 2;
earlyYears *= 10.5;

let laterYears = myAge - 2;
laterYears *= 4;

/* console.log(earlyYears);
console.log(laterYears);
*/

let myAgeInDogYears = earlyYears + laterYears;



console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
