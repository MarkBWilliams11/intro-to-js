/* Converting array to string */

/*from our fruits array in array.js using the toString() method we can convert the array 
to a string */
log(fruits.toString());

/* using the join() method is simliar to the
toString() method, but in this case we can specify
a seperator
 */
log(fruits.join(" * "));

/* popping and pushing with an array 

pop()-will remove the last item in the array
push(value)-will add item to the end of the array

*/
//removes last item of the array
fruits.pop(); //value is cherry

log(fruits); //cherry has been remove;

//adds a new item to the end of the array
fruits.push("strawberry");
log(fruits); // strawberry will appear at the end of array

/* using th eShift element

shihft()- will remove the first item in the array
unshihft(value)- will add an item to the beginnging of an array

*/
//removes the first item of array
fruits.shift(); //value is apple
log(fruits); // apple has been removed from the array

//adds the value of unshift to the beginning of the array
fruits.unshift("pear");
log(fruits); //pear will appear at the beginning of array

/* chaning indexes by using the index number of the array array[index] */
//the  array indexes were empty now we changed to the values below
fruits[5] = "peach";
fruits[6] = "pineapple";
fruits[7] = "watermelon";
log(fruits);

/* We can delete elements be using the array index */
//this will delete the index 1 banana
log(fruits);
/* NOTE: will appear empty 
because we have deleted banana 
use pop,push,or shift methods instead
*/
delete fruits[1];
log(fruits);

/* splicing an array 

first parameter-defines the poistion where
 element should be added.

second parameter -defines how manelements
 should be removed

 the remain parameters are the elements to be added
splice(para1,para2,elements....)
*/
/* from postion index 1 we remove 1 element 
and add Kiwi */
fruits.splice(1, 1, "Kiwi");
log(fruits);

//using splice to remove to remove element without holes, like delete.
/*  from index position 6 remove 1 element */
fruits.splice(6, 1); //removes pineapple
log(fruits);

/*  the merging or concatenating of arrays
concat() method is used to create a new array and 
merge with existing arrrays
there are multiple ways we can do this use this method

var arr1 = [item1,item2,item3];
var arr2 = [item1,item2,item3];
var arr1arr2 = arr1.concat(arr2);

*/
//here we made another array for boats
let boats = ["seepedboat", "tugboat", "sailboat"];
/*we use the concat() method to merge our cars array
to our boat array
*/
let carsAndBoats = cars.concat(boats);

log(carsAndBoats);
//we can even add more arrays, here we will add fruits array aswell
let carsBoatsFruits = cars.concat(boats, fruits);
log(carsBoatsFruits);

//we can merge an array value
//here we will merge Ford on to the cars array
let mergeValue = cars.concat("Ford");
log(mergeValue);

/* Using the slice method takes a piece of the
array into a new one.

slice()-
can have a single paramter to have a 
starting point which it will not include part of an array

or two parameters to specify the start and end 

Note: slice() create a new array!!!
*/

/* here we use our cars array and slice
out the array starting with index 1
*/
let carSlice = cars.slice(1);
//so index zero is not included but all other elements are
log(carSlice);
/* starting with array index 2 and end on array 
index 6 slice out not within these parameters
from our array

Note: the ending parameter is not included
*/
let fruitSlice = fruits.slice(2, 6);

log(fruitSlice);

/* Note:
Javascript  automatically  converts an array to a 
comma sperated string whena primitive value is expected

all javascript objects have a toString() method

*/

/*
Using replace() method 
returns a new string with some or all mataces of a pattern replaced by a replacement

syntax:
const newStr = str.replace(regex or substring, newStr or function)

regex(pattern)- a Regex object  or literal  The matches are  replaced  with  newSubStr or the value
returned  by the specified function

subString- a String that is to be replaced by newSubStr. it is treated as a literal string and is not interpreted as
a regular expression. only the first occerence will be replaced.

newSubString(replacement)- the string that replaces the substring spefified by the reg or substr parameter


function (replacement) - a function to be invoked to create the new substring to be used to replace the matches to the given 
regex or substr. 

Note: Does not change the called string!
*/

let longStr = `This is a really long string tO test out SOME informtion. Lots of THings`;
//replaces This with Thus
console.log(longStr.replace("This", "Thus"));

const regex = /Long/i;
//replaces long with short
console.log(longStr.replace(regex, "short"));

/* replace()method
*** specifying a string as a parameter
$$ - inserts $
$& - inserts matched substring
$` - inserts portion of string before match string
$' - inserts portion of string after matched string
$(a number)- provided the first argument is a regex. and positive integers
        less than 100(Note: 1 index here not 0). to get the submatch.
        if  number is not present it will be replaced as a literal $something
$<name> - where name is the capturing group name. if the group is not in the match
or not in the regularr expression, of if a string was passed as the first 
argument  to replace instead of a regular expressionn, it becomes a literal $<name>

 ***specify a function as a parameter
 match - the matched substring(corressponds to $&)
 p1,p2,... - the nth string found by a (capture group), provided in the
 first argument to replace was a regex object. (corresponds to $1 $2..) 
 offset - the offest of the matched substring within the whole string being 
 examined.
 String-  the whole string being examined
 groups- will be an object whose keys are the used group names, and whose values
 are the match portions(undfined if not matched)


*/

function replacer(match, p1, p2, p3, offest, string) {
  //p1 is non-digits, p2 digits, p3 non-aplhanumerrics
  return [p1, p2, p3].join("-");
}
let strA = "abc1245453&^%&^&#".replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(strA);

/* using global and ignore with replace() */
//using longStr variable
let thingReg = /things/gi;
let newThing = longStr.replace(thingReg, "things");
console.log(newThing);

/* switching words in a string  */
let regSwitch = /(\w+)\s(\w+)/;
let Js = "John Smith";
let sJ = Js.replace(regSwitch, "$2, $1");
console.log(sJ);

/* using an inline function that modifies the matched characters
 this example all occerneces of capitial letters in the string are converted 
 to lower case, and a hypen is inserted just before the match location
 ***Note:these operations are need on the match item before
  it is given back a replacement

  now the replamenet function will take can take our paramter 
  and use it to transform and concatenate the hypehn before returning

*/

function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset > 0 ? "-" : "") + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
console.log(styleHyphenFormat("borderTop")); //border-top

/* 
The regular expression test checks for any number that ends with F

the number of Fahrenheit degree is accessible to the function 
through second parameter p1
*/
function f2c(x) {
  function convert(str, p1, offset, s) {
    return ((p1 - 32) * 5) / 9 + "C";
  }
  let s = String(x);
  let test = /(-?\d+(?:\.\d*)?)F\b/g;
  return s.replace(test, convert);
}

console.log(f2c("212F"));

/*
 Regular Expressions are patterns  used to match character 
 combinations in a string

 using regular expression literals
 ler regex = /ab+c/;
 

 using a constructor 
 let regex = new RegExp('ab+c)

 Charater classes

 Methods that regular expressions are used with:

 exec() -executes a search for a match in a string. it returns an array
 of information or null if mismatch

 test()- tests for a match in a string. returns true or false

 match ()- returns an  array contaning all of the matches, including 
 capturing groups.

 search()- TEsts for a match in a string. it returns the index of the match
 or -1 if the search fails

 replace()- executes a search for a match in a string, and replaces the 
 matched substring with a replacement substring.
 
 replaceAll()-exectues a search for all matches in a string, and replaces
 the matched  substring with a replacement substring

 split()- uses a regular expression or a fixed string to break a string into
 an array of substrings

 Note: 
 when you want to know whether a pattern is found in a string, use
 test() or search()

 for more information use exec() or match() methods
 and if match succeeds these methods return an array and update properties
 of the associated regular expression object
*/

let reg = /cat/g; ////d(b+)d/g;
let testExec = reg.exec("cat"); //regExec.exec("cdbbdbsbz");
console.log(testExec); // it becomes an array with index , input aswell

//retrieves the result of a matching string against a regular expression
let testMatch = "cat".match(reg);
console.log(testMatch); //returns as an array

/* 
advanced searching flags 

d- genrate indiced for substring matches
g- Global search
i- case-insensitive search
m- multi-line search
s- allows . to match new line characters
u- "unicode", treat a pattern as a sequence of unicode code points
y- perform a "sticky" search that matches starting at the current 
position in the target string

ex: let var =/pattern/flags
*/

/* regular expression to test the validity of a phone number */
/* 
<div id="numberCheck">
        <p>Enter your number phone here then click "check"</p>
        <form action="#">
          <label for="phoneInput">Number Input:</label>
          <input type="text" id="phoneInput" />
          <button class="checkBtn">Check</button>
        </form>
      </div>

*/
//phone container element creation
/* let paraInform = document.createElement("p");
let phoneForm = document.createElement("form");
let phoneLabel = document.createElement("label");
let phoneInput = document.createElement("input");
let phoneCheckBtn = document.createElement("button");
let paraOutput = document.createElement("p"); */

//form id & classes
/* paraInform.classList.add("paraInform");
phoneForm.setAttribute("id", "phoneForm");
phoneForm.setAttribute("action", "#");
phoneLabel.setAttribute("for", "phoneLabel");
phoneLabel.classList.add("phoneLabel");
phoneInput.setAttribute("id", "phoneInput");
phoneInput.setAttribute("placeholder", "Your Number");
phoneCheckBtn.classList.add("phoneCheckBtn");
paraOutput.classList.add("paraOutput"); */

//phone container content
/* paraInform.textContent = 'Enter your number phone here then click "check"';
phoneLabel.textContent = "Number Input  ";
phoneCheckBtn.textContent = "Check";
paraOutput.textContent = ""; */

//element Selector
/* const phoneContainer = document.querySelector("#phoneContainer");
const InformParaSele = document.querySelector(".paraInform");
const phoneFormSele = document.querySelector("#form");
const phoneLabelSele = document.querySelector(".phoneLabel");
const phoneInputSele = document.querySelector("#phoneInput");
const phoneCheckBtnSele = document.querySelector(".phoneCheckBtn");
const paraOutputSele = document.querySelector(".paraOutput"); */

//phone container  appending order
/* phoneContainer.appendChild(paraInform);
phoneContainer.appendChild(phoneForm);
phoneContainer.appendChild(phoneLabel);
phoneContainer.appendChild(phoneInput);
phoneContainer.appendChild(phoneCheckBtn);
phoneContainer.appendChild(paraOutput); */

//regular Expression validilty check
/* 

1.

*/

//function
function phoneNumValidity(phoneInput) {}
