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
//let adminUser = window.prompt("What is the username?");

// condition if admin value is true or false
/* if (adminUser == "admin") {
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
 */
/* Applying knowledege to make shirt size selection */
const size_selection = document.querySelector("#size-selection");
//Note: user selected paragraph is located outside of the selected element form
const user_selected = document.querySelector(".user-selected");

//change event for setSize funtion
size_selection.addEventListener("change", setSize);

//function for making shirt size selction
function setSize() {
  //using the value from the size selection options value="" to determine text we output
  let choice = size_selection.value;
  if (choice === "small") {
    user_selected.textContent = "Small";
  } else if (choice === "medium") {
    user_selected.textContent = "Medium";
  } else if (choice === "large") {
    user_selected.textContent = "Large";
  } else if (choice !== "small" || "medium" || "large") {
    user_selected.textContent = "Please select a size";
  } else {
    user_selected.textContent = "";
  }
}

/*NOTE: Any value that is not false, undefined, null, 0, NaN, or an empty string ('') 
actually returns true when tested as a conditional statement */

/* Switch statements takes a single expression and value as a input

as the code is exectued from the expression or value it goes through the number of choices
until there is a match.

ex: switch(experssion or value){
  case "choice1"// the option or value that could mtach experssion/value inside switch statement
  
  code you want executed

  break;

  //many cases are possible

  case "choice2"
  code

  break;// stops executing code, and moves to code that is below switch statement



defualt:
just do this code if none if nothing matches

}


*/

/* appying switch statment to sport selection */
const sport_selection = document.querySelector("#sport-selection");
const user_sport_selected = document.querySelector(".user-sport-selected");

sport_selection.addEventListener("change", sportSelect);
function sportSelect() {
  let userSportChoice = sport_selection.value;

  switch (userSportChoice) {
    case "basketball":
      user_sport_selected.textContent = "Basketball";

      break;
    case "soccer":
      user_sport_selected.textContent = "Soccer";

      break;
    case "hockey":
      user_sport_selected.textContent = "Hockey";

      break;
    case "tennis":
      user_sport_selected.textContent = "Tennis";

      break;
    case "football":
      user_sport_selected.textContent = "Football";

      break;

    default:
      user_sport_selected.textContent = "No sport Selected";
  }
}

/* Ternary operator types three areguments it is 
a shortened way to write an if else statement  */

// condition ? expression1 : expression2

var age = 22;
/* 
function(){
if(age>=18){
  log("you are older than 18");
}else{
  log("you are older than 18");
}
}

same as below
 */

age >= 18 ? log("you are older than 18") : log("You are younger than 18"); //you are older than 18

/*  apply ternary operrator to a theme change of a background  */

// id for the selection area
const color_theme_selection = document.querySelector("#color-theme-selection");
// slecetion html here
const html = document.querySelector("html");

// here we made a funtion the has two argumennts for the color chioce made and the text color

function update(color_choice, textColor) {
  //style or html background
  html.style.backgroundColor = color_choice;
  //style our html text
  html.style.color = textColor;
}

//when we hange the options we will prform a function
color_theme_selection.onchange = function () {
  //condition checks if the value of the selection to check for a match
  // then we preform the ternary operator to provide the checks in the update function
  color_theme_selection.value === "black"
    ? update("black", "white")
    : update("white", "black");
};

/*applying knowledge to make a simple calander  */
// id for the selection area
const month_selection = document.querySelector("#month-selection");
//class for the months title
const month_title = document.querySelector(".month-title");
//
const month_list = document.querySelector(".month-list");

// here we have a change function to get the value of our selections value
month_selection.onchange = function () {
  //here is the value of the selection
  const month_choice = month_selection.value;

  //here we need variable for our days
  /* 
  month = days:31 
  month- february days:28
  months: aprils, june september,november days:30
  */
  let days = 31;
  //if the month coice if februray only 28 days
  if (month_choice === "February") {
    days = 28;
  }
  //here we select the days with only 30
  else if (
    month_choice === "April" ||
    month_choice === "June" ||
    month_choice === "September" ||
    month_choice === "November"
  ) {
    days = 30;
  }
  // this will create our current month and days
  createCalendar(days, month_choice);
  //log(days, month_choice);
};

//within the same function handler we will make another funtion
//this function will be resoponsible for displying the days and mothns
function createCalendar(days, month_choice) {
  month_list.innerHTML = "";
  //displays our month choice in the h1
  month_title.textContent = month_choice;

  //loop through all the days and increment by 1
  for (i = 1; i <= days; i++) {
    //variable used to create a li tag in monthlis.innerhtml
    const month_listItem = document.createElement("li");
    //changes the li tag content to the days
    month_listItem.textContent = i;
    log(i);
    //here we attach the li to the days
    month_list.appendChild(month_listItem);
  }
}

/* Applying switch statement to color theme change */

// our select id
const color_select = document.querySelector("#color-selection");
//our dive class for the bg container
const color_theme_bg = document.querySelector(".color-theme-bg");

//function for our change of selection
color_select.onchange = function () {
  //the value of out selection
  const color_select_choice = color_select.value;

  //switch statement to use our value to determine a match for the color value and execute the code following
  switch (color_select_choice) {
    case "Purple":
      update("purple", "white");
      break;
    case "Yellow":
      update("yellow", "black");
      break;
    case "Psychedelic":
      update("lime", "purple");
      break;
    case "Orange":
      update("orange", "black");
      break;
  }
};

/* type conversions  */

//if(condition)  <-converts results to a boolean
/* 
if(0){ //falsy
...
}
if(1){ //truthy
...
}

*/

//0 , null, NaN, undefinded are all falsy values  otherwise all other values are truthy

// if statement may contain 'else' to execute code if condition is falsy

// if we need to test mutiple condition variants use " else if" (the finale 'else' is optional)

/* the shortended  is the ternary operator ' ? ' 
EX:

let test = value;
let result = condition > test  ? value1 : value2 

the condition will check if values are truthy , if it matches value1 
code will execute otherwise value2 will execute

*/

/* Ternary opperator with mutile conditions


let result = condition1 ? value1 : condition2 ? value2 : condition3 ? value3 : value5;

Note:this gets really complex to read if it is deep better to read code vertical than horizontal
*/

/* playing around for review */
//let promptTest = prompt("message");

/* onePlusOne === typed ? alert(type.value) : alert("nothing here"); */
/* 
promptTest > 5
  ? alert("Greater than 5 ")
  : promptTest < 10
  ? alert("Less than 10")
  : promptTest > 5 < 10
  ? alert("Between 5 ")
  : alert("between 10");


 */

/*
  let result;

  if (a + b < 4) {
    result =" blow";
  }
  else{
    result =" over";
  }
  
  */

// same  as above let result = ( a + b < 4) ? 'blow' : 'over';

/* more training with ternary operator */
/* 

if(login == "employee"){
  message = "hello";
}else if(login == 'Director'){
  message = "Greetings";
}else if( login == ""){
  message = "No login"
}else{
  message=""
}

as a ternary:

let message = (login == 'employee') ? "hello" : (login == "Director") ? "Director" : (login == "") "No login" : ""; 

*/

/*  Reviewing switch statements

switch (expression) {
    case x://value1
        // execute case x code block
        break; //will stop if expression macthes
    case y://value2
        // execute case y code block
        break;
    default://fall back code if nothing matches
        // execute default code block
}
*/
// Date() function gets current day of the week
//getDay() function to print current number that corresponds with the day of the week 1 monday ... 7 sunday
const day = new Date().getDay();

log(day); //current day

switch (day) {
  case 1:
    log("Monday");
    break;
  case 2:
    log("Tuesday");
    break;
  case 3:
    log("Wednesday");
    break;
  case 4:
    log("Thurday");
    break;
  case 5:
    log("Friday");
    break;
  case 6:
    log("Saturday");
    break;
  case 7:
    log("Sunday");
    break;
}

// Switch for a range of values

/* 
if we are looking to get a grade range 

A-90 and above
B- 89 and 80
C- 79 and 70
D- 69 and 60
F - 59 and over

*/

const grade = 80;

// here the switch statement is true and we are check every case to match the grade value;
switch (true) {
  case grade >= 90:
    log("A or better");

    break;
  case grade >= 80:
    log("B");

    break;
  case grade >= 70:
    log("C");

    break;
  case grade >= 60:
    log("D");

    break;
  //statement for the final range in the switch statement
  default:
    log("Need to study ");
}

// Multiple case for switch statement

/*Date funtion gets the currennt month and getMonth funtion gets the number corresponding to 
the month  0-11 0-january and 11-December

*/

// putting the month into the
const month = new Date().getMonth();

switch (month) {
  // january, february, march
  case 0:
  case 1:
  case 2:
    log("Winter");
    break;
  //april, may, june
  case 3:
  case 4:
  case 5:
    log("Spring");
    break;
  //july,august, september
  case 6:
  case 7:
  case 8:
    log("Summer");
    break;
  //october,november, december
  case 9:
  case 10:
  case 11:
    log("Autumn");
    break;
  default:
    log("somthing went wrong");
}

/* usefule console tips */

//console.dir(element) finds all properties
//console.clear() clears log
//console.count(element)// keeps count of element entry
