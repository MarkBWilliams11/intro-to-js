let log = console.log;
/* 
 An array can hold many values at a time under one name.you can access 
 the value of the array by referring to the index number.



creating an array syntax 
 var array_name = [item1, item2, item3,....];

*/
let cars = ["BMW", "AMG-Benz", "Ford"];
// let cars =new Array('BMW','Benz','Ford'); is the same as above
log(cars);

// access the elements of an array by using the index number

let carIndex = cars[2]; //access the Benz in our cars array

log(carIndex); //Ford

//Changing an array elements by accessing the index number 2 which is ford
cars[2] = "Chevy"; //changed from ford to chevy

log(cars[2]);
log(cars); //entire array recognizes the change

//arrays are a type of object
log(typeof cars);

//example of an object
let person = { firstName: "John", lastName: "Doe" };
//we access elements by using the name here instead of using an index number
log(person.firstName);

/* Arrary elements can be objects!

We can have different variable types within the same array

myArray[0]=Date.now;   object within the array
myArray[1]=myFunction;  function within the array
myArray[2]=cars;  array within the array


*/

//array properties and methods that are built in

//the length property returns the number of elements
let carLength = cars.length;
log(carLength); //3
//the sort method sorts our array
let carSort = cars.sort();
log(carSort);

//accessinig first element
let firstCar = cars[0];
//accessinig last element
let lastCar = cars[cars.length - 1];
//firstcar,lastcar
log(firstCar, lastCar);

/* Looping through an array to display to our html document*/

let arrayText = "<ul>";
for (i = 0; i < carLength; i++) {
  arrayText += `<li> ${cars[i]} </li>`;
}
arrayText += "</ul>";
document.querySelector(".array-text").innerHTML = arrayText;

//or using forEach method to produce similar results

let fruits = ["apple", "banana", "orange"];
log(fruits);
let arrayforEachtext = `<ul>`;
fruits.forEach(listFruits);
arrayforEachtext += `</ul>`;
document.querySelector(".array-text-forEach").innerHTML = arrayforEachtext;

function listFruits(value) {
  arrayforEachtext += `<li> ${value} </li>`;
}

// adding an element to an array
//here we add mango to the fruits array
fruits.push("mango");
log(fruits);
// the length property can also add a fruit
fruits[fruits.length] = "grape";
log(fruits);

//Note: adding indexes with higher number can create undefinded holes
fruits[8] = "cherry";
log(fruits);

/*Associate array are arrays with named indexes (or hashes)
 javascript does not support names indexes
 always us numbers or results will appear incorrect with some 
 array methods and properties

*/
//examples of results using names indexes in javascript
//varibles
let aPerson = [];
aPerson["firsName"] = "bob";
aPerson["lastName"] = "doe";
//length property will display 0
let aPersonLen = aPerson.length;
log(aPersonLen); //0
//accessing index 0 is undefined
let aPersonIndex0 = aPerson[0];
log(aPersonIndex0); //undefindes

/* NOTE:
Arrays: use numbered indexes *special object that uses numbers*
use when element names should be numbers

Objects:  use named indexes, use when element names should be strings

if creating a new array use var name = []; and AVOID  var name= new Array()



*/
