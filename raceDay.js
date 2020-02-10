let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;

const age = 23;

if (age > 18 && registeredEarly == true) {
  raceNumber += 1000;
}

if (age > 18 && registeredEarly == true) {
    console.log(raceNumber + ' will be racing at 9:30am.');
} else if (age > 18 && registeredEarly == false) {
    console.log(raceNumber + ' will be running at 11am.');
} else if (age < 18) {
  console.log(raceNumber + ' will be running at 12:30pm');
} else {
  console.log(raceNumber + ' Runner please see the registration desk')
}
