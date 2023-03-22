////////// PROBLEM 1 //////////
/*
  Create a variable called 'lovesCode' and set it equal to true. 
  Check to see if 'lovesCode' is equal to true or false. 
  If it is true, console log "I love to code!"
  If it is not, console log "Coding has its challenges."
*/

//CODE HERE
lovesCode = true;

if (lovesCode === true){
  console.log(`I love to code`)
}else{
  console.log(`Codeing has it's challenges`)
}

// For problems 2-3 use the following lines of code:
var amysAge = 29;
var brittanisAge = 34;
var amysBirthYear = 1991;
var brittanisBirthYear = 1986;

////////// PROBLEM 2 //////////
console.log();
/*
  Using an if statement and a comparison operator, create code that will check if Amy or Brittani is older, and then console.log '{name} is older'. Hint: 
  Consider what will happen if they are the same age. Handle this situation.
*/

//CODE HERE
if (amysAge === brittanisAge){
  console.log(`They are the same age!`)
}else if (amysAge > brittanisAge){
  console.log(`Amy is older`)
}else if (brittanisAge > amysAge){
  console.log(`Brittani is older`)
}
////////// PROBLEM 3 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy and Brittani were born in the same year. 
  If they were, console.log 'Amy & Brittani were born in the same year'. 
  If they were not, console.log 'Amy & Brittani were not born in the same year'
*/
console.log();
//CODE HERE
if (amysBirthYear === brittanisBirthYear){
  console.log(`They were born the same year`)
}else{
  console.log(`They were born different years`)
}
////////// PROBLEM 4 //////////

let temperature = 75;
let rain = false;

/*
  Using an if statement and a comparison operator, create code that will log a suggestion on what type of clothes one should wear for the day, 
  based on the above temperature and rain.
  If it is 80 degrees or above, and raining, one should wear a t-shirt and take an umbrella. If it is between 60 and 80 degrees, and raining, one should wear a rain-jacket. 
  If it is 60 degrees or below, one should wear a jacket and carry an umbrella. 
  Come up with your own clothing suggestions based on those temperature parameters when it is not raining.
*/
console.log();
//CODE HERE
let hot = 80;
let cold = 60;
let D = " degrees";


if (rain === true){
  if (temperature >= hot){
    console.log (`Hey you only need a t-shirt but take this umbrella`)
  }else if (temperature > cold && temperature < hot){
    console.log(`Hey wear a raincoat`)
  }else{
    console.log(`hey wear your coat and take this umbrella`)
  }

}else{
  if (temperature >= hot){
    console.log (`Hey you need to where a tank top it's a tosty ${temperature}${D}`)
  }else if (temperature > cold && temperature < hot){
    console.log (`You will only need a shirt and shorts to day it's only ${temperature}${D}`)
  }else{
    console.log (`hey wear your hoodie its ${temperature}${D} outside`)
  }}

////////// PROBLEM 5 //////////
console.log();
/*
  Create a for-loop that runs 10 times, and on each iteration logs the word 'hello'.
*/

//CODE HERE
for (i = 1; i <= 10; i++){
  console.log(`Hello ` + i)
}
////////// PROBLEM 6 //////////

/*
  Create a for-loop that runs 10 times, logging the numbers 1 through 10. Ex, on the first iteration it would log 1, on the second iteration it would log 2.
*/
console.log();
//CODE HERE
for (i = 1; i <= 10; i++){
  console.log(i)
}
////////// PROBLEM 7 //////////

/*
  Create a for-loop that logs the numbers 0 through 10 backwards. Ex, on the first iteration it would log 10, on the second iteration it would log 9.
*/
console.log();

//CODE HERE
for (i = 10; i >= 0; i--){
  console.log(i)
}

////////// PROBLEM 8 //////////
console.log();
let score = 0;
let passingScore = 7;

/*
  Create a while-loop that logs "Your score is not high enough" while the score variable above is below passingScore. 
  In each iteration of the loop, increase the score by one. If your code is successful, you will see your logged statement 7 times.
*/

//CODE HERE
while (score <= passingScore){
  console.log("Your score is " + score)
  score++;
}
console.log("You passed!");
////////// INTERMEDIATE PROBLEMS //////////

////////// PROBLEM 9 //////////
/*
  Create a variable called 'changeMyMind' and set it equal to true. 
  Check to see if changeMyMind is set to true or false, if it is true, change the status to false, if it is false, change the status to true.

*/
console.log();
//CODE HERE
let changeMyMind = true;

if (changeMyMind === true){
  changeMyMind = false;
  console.log(`Your answer was true and is now ${changeMyMind}`);
}else{
  changeMyMind = true;
  console.log(`Your answer was false and is now ${changeMyMind}`);
}
////////// PROBLEM 10 //////////
// Using the "not" operator (!), change the current value of changeMyMind to true (it should currently be set to false due to the if-else statement in Problem 9). 
//After you change the value of changeMyMind, console.log it's new value (it should now read true).
console.log();
//CODE HERE
if (changeMyMind !== true){
  changeMyMind = true;
  console.log(`Your answer was false and is now ${changeMyMind}`);
}
////////// ADVANCED PROBLEMS //////////

////////// PROBLEM 11 //////////
console.log();
let z = 5;
let y = 1;
let b = 5;
// Create a while loop that continues to run while z is greater than 0. Within the while loop, log a countdown from the value of z to 1. 
//Once you have logged the countdown, make sure you decrement z by 1. If your code is running properly, you should see: 5,4,3,2,1,4,3,2,1,3,2,1,2,1,1.

//CODE HERE
while (z > 0){
  console.log(`Your number is ${z}`);
    z--;
  if (z == 0){
   
    z = 5 - y;
    y++;
  }

}
console.log();
while (b > 0) 
{

  while (z > 0)
  {
  console.log (`Value of Z is ${z}`)
  z--;
  }
  b--;
  z = b;
}

 