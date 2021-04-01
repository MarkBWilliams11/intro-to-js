let log = console.log;
/* 
loops usually contain one or more of the following features:

counter- The initial value is the starting point of  the loop

condition- The true/false test to determines whether the loop 
continues to run, or stops when it reaches a cetain value.

iterater- Generally  increments(or decrrements) the counter by a small amount on each 
successive loop until the condition is no longer true. 

*/

/* The standard loop is the for loop

for(initializer,condition,final-expression){
    //code to execute
}

*/

let beverages = ["water", "soda", "wine", "spirit", "beer"];
log(beverages);
let beverageListText = `<ul>`;
/* here our counter starts at i=0 we loop through the beverage array length starting at index 0,
and keep going for the entire length of the array , as we keep incrementing i to meet the condition
 concatenate li to each beverage array item within the array length. 
 when our condition is met than stop.

*/
for (i = 0; i < beverages.length; i++) {
  beverageListText += `<li> ${beverages[i]} </li>`;
}
beverageListText += `</ul>`;
//we created a class in our html to display the beverageListText
document.querySelector(".beverage-list").innerHTML = beverageListText;

//playing with loop
let topThreeSports = ["soccer", "lacrosse", "MMA"];
topThreeOutput = `<p>`;
for (i = 0; i < topThreeSports.length; i++) {
  topThreeOutput += ` ${topThreeSports[i]} `;
}
topThreeSports += `<p>`;
document.querySelector(".top-3-sports").innerHTML = topThreeOutput;

/* Exiting loops wih break */

//array for out contacts
let contacts = [
  "Mike:3282326",
  "Amy:6483356",
  "Bob:6634822",
  "Marie:6388368",
  "Deanna:8383976",
];

//searchInput uses the input with the id of search
let searchInput = document.querySelector("#search");
//searchBtn uses the button with the class of src-btn
let searchBtn = document.querySelector(".src-btn");
//searchOutput uses the p with the class of search-output
let searchOutput = document.querySelector(".search-output");

//here we added an  click event to the searchBtn
searchBtn.addEventListener("click", function () {
  //creates a variable for our value of input an converts to lower case
  let searchName = searchInput.value.toLowerCase();
  //current value is empty string
  searchInput.value = "";
  //when string is empty focusing it again ready for the next search
  searchInput.focus();
  //loops through our contacts array
  for (i = 0; i < contacts.length; i++) {
    //created a variable to seperate the contacts array into to substring
    //for that we selecte the :  and use that in our split() method
    let splitContact = contacts[i].split(":");
    /*if splitContact which uses the 0 index which has the names
    matches the names value input we print the information to searchOutput */
    if (splitContact[0].toLowerCase() === searchName) {
      //print our results to the p class search-output
      searchOutput.textContent = `${splitContact[0]}'s number is ${splitContact[1]} `;
      //exits loop of condition is met
      break;
    } else if (i === contacts.length - 1) {
      //error if condition is not met
      searchOutput.textContent = `Contact cannot be found`;
    }
  }
});

/* Skippinhg iteraations wwith continue

it is similar to break, but instead of breaking out of the loop 
we continue on to the next iteration in the loop.
*/

/* While loop 

here we set the initializer a before the loop. and
 the final exprssion written after code that needs to be executed


initializer
wwhile(condition){
  code to execute
  final expression
}
*/
let a = 0;
while (a < beverages.length) {
  log(beverages[a]);
  a++;
}
/* 
do while loop 

here we set the initializer rounds to 0 before the do loop
in the do loop we executed the code then the final expression
will increment the rounds. outside the do cruley bracket 
we have the condition to check the beverage array length. 

*/
rounds = 0;
do {
  log(beverages[rounds]);
  rounds++;
} while (rounds < beverages.length);

/* playing with loops */
let countdown = 10;
while (countdown >= 0) {
  if (countdown === 10) {
    log(`Countdown ${countdown}`);
  } else if (countdown === 0) {
    log(`Blastoff ${countdown}`);
  }
  log(countdown--);
}

/* playing with guest list */
let guestList = ["jamie", "gino", "lisa", "phil", "penny", "bobby", "lola"];

const guestAdmit = document.querySelector(".admit");
const guestRefuse = document.querySelector(".refuse");
guestRefuse.textContent = `Refuse: `;
guestAdmit.textContent = `Admit: `;
for (i = 0; i < guestList.length; i++) {
  if (guestList[i] == "phil" || guestList[i] == "lola") {
    guestRefuse.textContent += ` ${guestList[i]} `;
  } else {
    guestAdmit.textContent += ` ${guestList[i]} `;
  }
}
