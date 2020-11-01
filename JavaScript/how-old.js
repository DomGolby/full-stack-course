// This one is quite controversial because many ways "work" but are not accepted and stop you progressing to the next project.

// Write your function here:
const theCurrentYear = 2020;

const howOld = (age, year) => {

const yearDifference = year - theCurrentYear
const newAge = age + yearDifference
  
  if (newAge < 0) { //past
    console.log(`The year ${year} was ${newAge} years before you were born`);
    return `The year ${year} was ${newAge} years before you were born`;

  } else if (newAge > age ) { //future
      console.log(`You will be ${newAge} in the year ${year}`);
      return `You will be ${newAge} in the year ${year}`;

  } else {
    console.log(`You were ${newAge} in the year ${year}`);
      return `You were ${newAge} in the year ${year}`;

  };
};


howOld(36, 2020);




// Once your function is written, write function calls to test your code!




// const howOld = (age, year) => {
//     const currentYear = new Date().getFullYear();
  
//     const birthYear = currentYear - age;
  
//     const futureAge = age + (year - currentYear);
//     const yearsBeforeBirth = (currentYear - year) - age;
//     const pastAge = year - (currentYear - age);
  
//     if (year > currentYear) {
//       return `You will be ${futureAge} in the year ${year}`;
//     } else if (year < birthYear) {
//       return `The year ${year} was ${yearsBeforeBirth} ${yearsBeforeBirth > 1 ? "years" : "year"} before you were born`;
//     } else if (year < currentYear && year > birthYear) {
//       return `You were ${pastAge} in the year ${year}`;
//     }
//   }