

{
// Even or Odd
let num = 10;
if (num % 2 === 0) {
  console.log(`${num} is even`);
} else {
  console.log(`${num} is odd`);
}
}
{ 
// Positive, Negative, or Zero
let num = -5;
if (num > 0) {
  console.log(`${num} is positive`);
} else if (num < 0) {
  console.log(`${num} is negative`);
} else {
  console.log(`${num} is zero`);
}
}
{
// Divisible by 2 and 3
let num = 12;
if (num % 2 === 0 && num % 3 === 0) {
  console.log(`${num} is divisible by both 2 and 3`);
} else if (num % 2 === 0) {
  console.log(`${num} is divisible by 2 but not 3`);
} else if (num % 3 === 0) {
  console.log(`${num} is divisible by 3 but not 2`);
} else {
  console.log(`${num} is not divisible by both 2 and 3`);
}
}
{
// Voting Eligibility
let age = 25;
let nationality = "Pakistani";
if (age >= 18) {
  if (nationality === "Pakistani") {
    console.log("You are eligible to vote.");
  } else {
    console.log("Please obtain a valid ID to vote.");
  }
} else {
  console.log("You are not eligible to vote.");
}
}
{
// Age Categories
let age = 35;
if (age >= 0 && age <= 12) {
  console.log("You are a child.");
} else if (age >= 13 && age <= 19) {
  console.log("You are a teenager.");
} else if (age >= 20 && age <= 59) {
  console.log("You are an adult.");
} else {
  console.log("You are a senior citizen.");
}
}
// Leap Year
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}


// Month Days
let month = 6; // June
let days = 0;
switch (month) {
  case 1: // January
    days = 31;
    break;
  case 2: // February
    days = 28;
    break;
  case 3: // March
    days = 31;
    break;
  case 4: // April
    days = 30;
    break;
  case 5: // May
    days = 31;
    break;
  case 6: // June
    days = 30;
    break;
  case 7: // July
    days = 31;
    break;
  case 8: // August
    days = 31;
    break;
  case 9: // September
    days = 30;
    break;
  case 10: // October
    days = 31;
    break;
  case 11: // November
    days = 30;
    break;
  case 12: // December
    days = 31;
    break;
  default:
    console.log("Invalid month");
}
console.log(`The month has ${days} days`);

