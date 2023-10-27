// Base variables
const birthDate = new Date('2007-02-21');
const currentDate = new Date();
const lifeLengthInYears = 83;
const weeksInAYear = 52;

// Calculate the difference in weeks between birthDate and currentDate
const timeDifference = currentDate - birthDate;
const weeksPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7));

// Calculate remaining weeks in life
const totalWeeksInLife = lifeLengthInYears * weeksInAYear;
const weeksRemaining = totalWeeksInLife - weeksPassed;

// Update the content of the h1 element
const mainTextElement = document.getElementById("main-text");
mainTextElement.textContent = `${weeksRemaining}`;