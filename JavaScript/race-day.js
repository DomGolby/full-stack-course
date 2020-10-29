let raceNumber = Math.floor(Math.random() * 1000);

let raceRegistered = false;
let raceAge = 18;

if (raceAge >= 18 && raceRegistered == true) {
    raceNumber += 1000;
    console.log(`You will race at 9:30am with number: ${raceNumber}`);
} else if (raceAge >= 18 && raceRegistered == false) {
    console.log(`You will race at 11:00am with number: ${raceNumber}`);
} else if (raceAge < 18) {
    console.log(`You will race at 12:30am with number: ${raceNumber}`);
} else {
      console.log(`You need to visit the registration desk.`);
}