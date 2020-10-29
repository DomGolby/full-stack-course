const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 6;
    case "tuesday":
      return 7;
    case "wednesday":
      return 8;
    case "thursday":
      return 7;
    case "friday":
      return 6;
    case "saturday":
      return 5;
    case "sunday":
      return 6;
  }
};

// console.log(getSleepHours('sunday')); // should print the # hours assigned to tuesday

const getActualSleepHours = () => {
  let sleepTotal =
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday");

  return sleepTotal;
};

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

// console.log(getActualSleepHours());
// console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours == idealSleepHours) {
    console.log(`You got the perfect amount of sleep.`);
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      `You got ${actualSleepHours} hours of sleep. The ideal amount is ${idealSleepHours} hours. You should rest.`
    );
  } else {
    console.log(
      `You got ${actualSleepHours} hours of sleep. The ideal amount is ${idealSleepHours} hours. You slept more than needed.`
    );
  }
};

calculateSleepDebt();
