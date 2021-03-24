let log = console.log;

/* 
The problem:

The program needs to take the user input and print numbers start with 1 
all the way to the user input

constraints/outcome:
multiples of three print Fizz instead of number
multiples of five print Buzz
multiples of both have FizzBuzz



rewrite:
the program will take the number and print each number between 1 an the number of the input,
when we have  numbers divided 3 without remainder print Fizz
when we have  numbers  divided 5 without remainder  print Buzz
when we have  numbers  divided both 3 & 5 without remainder  print FizzBuzz


plan:

program interface: yes/no?
no

inputs: yes/no
no
*
enter nubmer from command line

dirsed output:

output - list of number 1 - users number entered
but when a number is divisiable by 3 output Fizz
and when a number is divisiable by 5 output Buzz
and if the number is divisible by both then then print FizzBuzz


Steps Pseudo code:
when a user inputs a number
loop from 1 to the entered number
if the current number is divisible by 3 then print "Fizz"
if the current number is divisible by 5 then print "Buzz"
if the current number is divisible by 3 & 5 then print "FizzBuzz"
otherwise print current number



*/

/* problem 1 */

//this will prompt the user to enter a value
//Note: we use parseInt() - so a number is returned
//result will be the variable that holds our number
let result = parseInt(prompt("enter number to fizzbuzz to: "));

/* problem 2 */

//loop from 1 to the entered number

//here we are using a for-loop
/* 
-set var i to 1  
-our condition - i<=Result,
    loop until i is greater than result
-i++ 
    tells loop to increment i by 1 every iteration

    result be 1 incrementing to the user input
*/
for (let i = 1; i <= result; i++) {
  /* problem 5 */
  // check for both first! than moves on
  if (i % 3 === 0 && i % 5 === 0) {
    log("FizzBuzz");
  } else if (i % 3 === 0) {
    /* Promblem 3 
  if the current number is divisible by 3 then print "Fizz"
  using the modulus operator returns the remainder 0
  
  */
    log("Fizz");
  } else if (i % 5 === 0) {
    /* 
  Promblem 4
  if the current number is divisible by 5 then print "Fizz"
  using the modulus operator returns the remainder 0
  */
    log("Buzz");
  }
  //this will log our results i variable
  else {
    log(i);
  }
}
