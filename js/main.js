/*
   Variables: a name used to store  data. we first declare the 
   variable by user var,let,or const. Then we give it a name. 
   never we use the assignment operator =, followed by the data we want to use.
ex: let name = "bob";

we can wriite mutiple variable with one declration using comma
let name = "bob", age = 30; 

**NOTE: using let with show and error if a variable is triggers twice
      let msg = "hi";
      let msg = "no";
      console.log(msg); !ERROR

      **NOTE:
-The name must contain only letters, digits, or the symbols $ and _.
-The first character must not be a digit.
-When the name contains multiple words, camelCase is commonly used. ex: myVeryLongName

**NOTE: There are a reserved name like let,const,var, return, etc... that are functions built-in.
-using const variable cannot be reassigned

console.log() good way to debugg and test code
*/

// this is just to not have to type console.log all the time
let log = console.log;
/* test out using varibles */
var name = "mac";
var admin = name;
/*  alert(admin); aleart is annyoing */

var ourPlanet = "Earth";

var currentVisitors = 20;

/* Working with numbers */

/* useful number methods*/

/* two decimal places */
let hugeDecimal = 1.5654641549;
let fixDecimal = hugeDecimal.toFixed(2);
/* should display only two dicimal places */
console.log(fixDecimal);

/*  converting a number type to a data type */

let thisNumber = "50"; /* this is a string */

/* number() will convert our data to a number */
let thisIs50 = Number(thisNumber);
/* we can type -- typeof in the console it will display as a number */
console.log(thisIs50);

/* Some Airthmetic operators

            +  addition 10 + 10
            - subtraction 4 - 5
            / division 8 / 20
            * multiplication 20 * 10
            % remainder 60 % 3
            ** exponent 5 ** 3
            */
let numFive = 5;

let numSix = 6;

let sumOfFive_Six = numFive + numSix;
console.log(sumOfFive_Six);

/*   Multiply and divide are always done first, then add and subtract (the calculation is always evaluated from left to right).
            put parentheses round the parts that you want to be explicitly dealt with first to override.
            */

/*
            Other complex assignment operators


      += addition assignment - adds the value on the variable on the left, then returns the new variable
      x=5
      ex: x += 3 same as  x = x + 3;
      value = 8;

      -= subtraction assignment - subtracts the value on the variable on the left, then returns the new variable
      x=5
      ex: x -= 3 same as  x = x - 3;
      value = 2;

      *= multiplication assignment - multiples the variable on the left by the value on the right, and returns the new variable value.
      x=5
      ex: x *= 3 same as  x = x * 3;
      value = 15;

      /= division assignment - divides the variable on the left by the value on the right, and returns the new variable value.
      x=5
      ex: x /= 3 same as  x = x / 3;
      value = 1.666666666667;

      */

/*
      Comparison operators

      === strict equality tests wether the left and right values are identical to one another

      !== Strict non equality  tests whether the left and right values are Not identical to one another

      < Less than tests if the left value is less than the right value
      > greater than  tests to see if the left values is greater than the right value
      <= Less Than or equal to  - tests whether the left value is smaller than or equal to the right value
      >= Greater than or equal to -tests whether the left value is greater thab or equal to the right value

      These are great boolean options, which are great for desicsion making.  two values: true and false
      see line 10

      */
const btn = document.querySelector("button"); /* select button */
const msg = document.querySelector("p"); /* select p tag */

/* using btn variable , here we add an eventlistner, the event is a click, this will trigger our function updateBtn */
btn.addEventListener("click", updateBtn);

/* here we create a function called updateBtn, than we create a conditional using strict comparison operator */
function updateBtn() {
  if (btn.textContent === "Turn On") {
    btn.textContent = "Turn Off";
    msg.textContent = "This is currently on";
  } else {
    btn.textContent = "Turn On";
    msg.textContent = "This is currently off";
  }
}

/* Working with strings */

/* For strings we can use single or duble qoutes 'string' "string" both wok just fine

            **Note:
            let message = 'I've got to run'; ERROR (becuase we are using too many of the same quotes)

            using a backslash will help with escaping the characters
            let message = 'I\'ve got to run;

            */

/* Concatenating string */
let peachFruit = "peach";
let appleFruit = "Apple";
let mixApplePeach = peachFruit + appleFruit;
/*  let mixApplePeach = peachFruit + " " + appleFruit;  this would add a contatentation with space between them*/
console.log(mixApplePeach);

/* fun message prompt */

/* here we slecet our button for the event */
const greetingBtn = document.querySelector(".greetings");

/* here we create our function first we get our variable for the button, than
            we use the onclick to trigger the event, now in our function we create a variable
            to store our message within window.promt funtion(displays a dialog with an optional message prompting the user to input some text.)
            and an alert to sendt a message back. */
greetingBtn.addEventListener("click", popUpMsg);

function popUpMsg() {
  let fruit = window.prompt("What favorite fruit?");
  alert("Wow it's " + " " + fruit + " " + "thats pretty neat!");
}
/* how to change the typeof for a number and a string  */

let string = "100"; // string
let stringToNumber = Number(string); //number
console.log(typeof stringToNumber); //tyeof is showing it is  number

let number = 50; //number
let numberToString = number.toString(); //string
console.log(typeof numberToString); //typeof shows its a string

/* Template literals are another type of string syntax  we
      open them with backticks ` `

       When you want to include a variable or expression inside the string,
       you include it inside a ${ } construct, which is called a placeholder.

      */

let bye = "Lata";
let HBbtn = document.querySelector(".hi-bye");

HBbtn.addEventListener("click", hibye);

function hibye() {
  if (HBbtn.textContent === "Hi") {
    HBbtn.textContent = `${bye}`;
  } else {
    HBbtn.textContent = "Hi";
  }
}

/* useful string Methods */
let sglWord = "pizza";
let str = "The string length is 23";
let strLng = str.length;
console.log(strLng);

/*  find a string in a string */

/* Using the indexOf() method allows us to find a strings position
      case sensative
       *NOTE:(starts from the left).
       **NOTE: JavaScript counts positions strating from zero.*/

log(str.indexOf("string")); // returns the first occurence position of the string(4)

/* Using the lastIndexOf() method allows us to find a strings position
      case sensative
       *NOTE: (starts from the right)
       **NOTE: JavaScript counts positions strating from zero.*/

log(str.lastIndexOf("string")); // returns the last occurence position of the string(4)

/* NOTE: they will both find string in the same place.
       it just started the search from a certain direction.

       Both methods accept a second parameter as the starting position for the search:
       ex: str.lastIndexOf("string , 10");
        */

/* Using the search() method used the value entered and finds the position */
log(str.search("is"));

//**NOTE: method cannot take a second start position argument

/* extracting string methods

      slice(start,end) -This will extract postions selected to return a new string(end postion selected is not included)
      substring(start,end) - Uses
      substr(start,end)-  Uses the legnth of the string to extract

      */

let testSen_One = "This is some dumy text to mess AROUND with text";
//slice
let sliceSen = testSen_One.slice(18, 22); // all but text extracted (can use neagtive to count from the end)
log(sliceSen);
//substring
let substring_Sen = testSen_One.substring(18, 22); // all but text extracted (cannot use negative indexes)
log(substring_Sen);
//substr
let substr_Sen = testSen_One.substr(18, 4); // all but text extracted using the length of a string
log(substr_Sen);

/* using replace() method only replaces the FRIST match */

//replace
let replace_Sen = testSen_One.replace("text", "words"); // though we have text twice, we only replace the first one
log(replace_Sen);
/* NOTE: replace method is case sensative. we would need to use other methods in that regard

      helpful method regex :
      (/Text/i,words); insensative case
      (/Text/g,words); global match

      */

/* converting to upper-case and lower-case */
// here we are using the varible slgWord which holds the string pizza
let uppercase_Sen = sglWord.toUpperCase();
log(uppercase_Sen);

let lowercase_Sen = sglWord.toLowerCase();
log(lowercase_Sen);

/* using the contact() Method joins two or more strings */
let contactMethod = "Apple".concat(" ", "pie");
// here we are joing pie to the apple string with added space. useful for concatenating!
log(contactMethod);
/* using trim() method removes the white space from both sides of a string */
let trimThis = "   trim this     ";
let trimMethod = trimThis.trim();
log(trimMethod);

/* using the padStar() padEnd() methods allows us to add padding ( sen value will will the padding)*/

//formatting a strings with padding

log("Username :" + "Bob".padStart(20, " "));
log("Email :".padEnd(27, " ") + "Bob@bobmail.com");

/* Extracting characters*/

/* using charAt() returns character from the selected index */
//here we are using  the sglWord variable that holds pizza
log(sglWord.charAt(0));

/* using the charCodeAt() returns the UFT-16 code */
//here we are using the sglWord variable that holds pizza
log(sglWord.charCodeAt(0)); // extracts the p in pizza

/* using the property access [] returns selected index */
//here we are using the sglWord variable that holds pizza

log(sglWord[4]); // extracts a value ins pizza

/* using split() method to convert a string to an array  */
// here were are going to use the name variable holds the string mac

//NOTE: We will use , comma " "space | pipe to split
log(typeof ` ${name}`);
log(`${name}`.split(",")); //will now become an array object
//Note: (" ") with no seperator the entire string index[0]
log(`${name}`.split("")); // and array of single characters

/* Conditionals */

/* using conditionals with strings they are compared letter to letter in lexicological order */
log("b" < "a"); //false
//NOTE: lowercase characters have a greater index in the internal coding of the javascript table
log("a" < "A"); //false

//test the theroy
log("Hey" < "Hello"); //false
//should be false because l have a greater index

/*  Comparing different values */
log("6" < 2); //false
//  Converts ALL values to a number

/* boolean values */
log(true == 1); //true
log(false == 0); //true

// Useful check conditional

log(0 == false); // false does have the value zero false
log("" == false); // converts empty string to a number thus zero is true

//(check without type conversion using the strict equality operator)
log("" === false); //false
/*  for math comparison  null/undefined become nuumber null:0 undefined: NaN(not a number) */

//null
log(null < 0); //false
log(null == 0); //false
log(null >= 0); //true

//undeifned (returns false for all comparisons)
log(undefined < 0); //false
log(undefined > 0); //false
log(undefined == 0); //false

/* Conditional statements */

/* 

      if- specify  a block of code to be executed, if condition is true
      
      use else - to seecify a block of code to be executed, Now if the same condition is false

      use else if - to specify a new condition to test,  And if the first condition is false 

      use switch - to sepcify many alternative blocks of code to be executed
      
      */

/*  using if statement if (condition){
        what you code to execute
      } */
//execute if condition is true
if (1 > 2) {
  log("hello");
}
//execute if condition if false
else {
  log("hiya");
}

/* using with alternative condition with time*/
let time = new Date().getHours();
if (time < 10) {
  log("Good morning");
}
// execute code if first condition if false and second condition is true
else if (time < 20) {
  log("Good evening");
} else {
  log("Good night");
}

/*  logical operators */

//  || or
// && and
// ! not
// ?? Nullish Caolescing

let score = 10;
let timeSpeed = 45;

/*  using || if the arguments are true it will return true otherwise it will return false  */
if (score < 10 || timeSpeed > 30) {
  log("message");
}
// checking for the first true value
// alert(score || log("") || timeSpeed); //score will appear but no other values

/* short-circuit evaluation  meaning the || will processes the argument
 until the first true value is seen*/
true || log("not pritned"); // value is true so it stop evaluating
false || log("Printed"); // value is false so is is evaluates until value is true

log(null || 1); // 1 is first true value
log(null || 0 || 1); //1 is the frist true value
log(undefined || null || 0); //all fasle but returns thee last value
log(1 || 2 || 3); //all values are true, the first value is returned
/* Using &&  */
if (score == 10 && timeSpeed == 45) {
  log("Score is 10 and timespeed is 45");
}

// Using returns true if operands are true and false
log(true && true); //true
//
log(false && true); //false
log(true && false); //false
log(false && false); //false
log(1 && 2 && 3); //all values are true, the last value is returned
/* Note: The precedence of AND && is higher than OR || , so it executes first. */

/* using ! take truue and false and returns the inverse */
log(!true);
log(!false);

// converting to a boolean type
log(!!"this is has text"); //true
log(!!null); //false

/* Conditional branching to preform different actions based on a different condition */

/* apply by creating a login using prompt */
let adminUser = window.prompt("What is the username?");

// condition if admin value is true or false
if (adminUser == "admin") {
  //if true then we prompt a variable adminPass to ask for password
  let adminPass = window.prompt("Whats the password? Hmmm");
  //condition to see if password is true or false
  if (adminPass === "pass") {
    alert("You are authorized");
  }
  //condition to see if password is true or false
  else if (adminPass === "" || adminPass === null) {
    alert("cancled");
  } else {
    alert(" Wrong password");
  }
}
//condition to check if user is true of false
else if (adminUser === "" || adminUser === null) {
  alert("canceled");
} else {
  alert("This is not an authorized user");
}
