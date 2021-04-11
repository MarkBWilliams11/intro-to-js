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

/* using replace() method 
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

let longStr = `This is a really long string to test out some informtion`;
//replaces This with Thus
console.log(longStr.replace("This", "Thus"));

const regex = /Long/i;
//replaces long with short
console.log(longStr.replace(regex, "short"));

/* Regular Expressions */
