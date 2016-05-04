// Exercise 7: Guess a Number Between 1-10 
// Prompt the user for an input to determine what their guess is. Use parseInt(n) to convert their input from a string to a number. As long as the result is NaN, ask them again. Read here how to determine if a value is NaN.
// Generate a random number between 1 and 10.
// Loop until they guess correctly.
// After 10 attempts, show them what number was the correct number.

var askNum = "Enter a number between 1-10",
  userNum = parseInt(prompt(askNum)),
  randomNum = Math.floor((Math.random() * 10) + 1),
  numArray = [],
  attempt = 0;

if(isNaN(userNum) || userNum < 1 || userNum > 10){
  userNum = parseInt(prompt("I said NUMBER between 1-10!!! " + askNum));
}

while(userNum !== randomNum && attempt <= 10){
  userNum = parseInt(prompt("Your guess is wrong. " + askNum));
  attempt++;  
  console.log("attempt: " + attempt);
  if(userNum === randomNum){
    console.log("Yay! You did it!! The random number was " + randomNum);
  }else if(attempt === 11){
    console.log("Too late! The random number was " + randomNum);
  }
}
  