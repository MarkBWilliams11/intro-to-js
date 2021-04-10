// object with multiple properties
const companies = [
  { name: "company One", catagory: "finance", start: 1981, end: 2003 },
  { name: "company Two", catagory: "technology", start: 1950, end: 2000 },
  { name: "company Three", catagory: "auto", start: 1991, end: 2020 },
  { name: "company Four", catagory: "retail", start: 1999, end: 2006 },
];

const ages = [15, 22, 90, 75, 40, 12, 3, 6, 4, 5];

//object with number

/* forEach 
for(let i=0;i<companies.length;i++){
    console.log(companies[i])
}
*/
//pass the companies object into forEach function to loop through
//within the function we need an iterator to start loop
//aslso within function we can get the index and entire array
companies.forEach(function (company) {
  //entire obj
  console.log(company);
  //property name value of "name"
  console.log(company.name);
});

/* filter  allows us to filter using a check 

syntax:
let newArray = arr.filter(callback(currentValue,index, array){
    //return elements from array if ture
}[,thisArg]);

optional:
index- The index of the current element being processed in the array
array- the array filter was called upon
thisarg- Value to use as this when executing callback
*/
//we first need to create a variable for the new array
const agesFiltered = ages.filter(function (ages, index, arr) {
  console.log(ages, index, arr);
  return ages < 21;
});
console.log(agesFiltered);

/* filter by id */
//id object
let idArr = [
  { id: 15 },
  { id: 1 },
  { id: 0 },
  { id: null },
  { id: 1.5 },
  {},
  { id: NaN },
  { id: 6 },
  { id: 4 },
  { id: -9 },
  { id: undefined },
];
//initilizer to keep track of non number-values
let invalidEntries = 0;
function filterById(item) {
  //check if value is a number and not equal to zero
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true;
  }
  //increment if true
  invalidEntries++;
  //stop executing
  return false;
}
let arrByID = idArr.filter(filterById);
console.log(arrByID); //only number value
console.log(invalidEntries); //5

/* Searching with filter */
const fruits = ["apple", "banana", "orange", "pineapple", "mango"];
/* filter items based on search criteria */
filterItems = (arr, arrIndex) => {
  return arr.filter(
    (srhInput) => srhInput.toLowerCase().indexOf(arrIndex.toLowerCase()) !== -1
  );
};
console.log(filterItems(fruits, "o"));

/* Affecting the inital array (modify, appedning, deleting) */
let words = ["tech", "computer", "games", "pizza", "elite", "present"];
// modifying each words
const modifyWords = words.filter((word, wordIndex, wordArr) => {
  wordArr[wordIndex + 1] += " Modified";
  return word.length < 6;
});
console.table(modifyWords);

//appedning new words
const appendingWords = words.filter((word, wordIndex, wordArr) => {
  wordArr.push("New Word");
  return word.length < 6;
});
console.table(appendingWords);

//deleting words
const deleteWords = words.filter((word, wordIndex, wordArr) => {
  wordArr.pop();
  return word.length < 6;
});
console.table(deleteWords);

/*
 map  creates a new  array populated with the results of calling
 provided function on every element in the calling array
 syntax:
 
 let new Arrary = arr.map(currentValue ,index, arr) {
     //return element for new array with executed code
 },{}
 
 */
let numbers = [1, 4, 9, 7, 20];

const arrItemsTimesTwo = numbers.map((num) => num * 2);
console.log(arrItemsTimesTwo);

const sqrtNum = numbers.map((num) => Math.sqrt(num));
console.log(sqrtNum);

/* using map to reformat a objects array */

let objectKV = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];
console.table(objectKV);
//reformat to show just the numbers
let reformatArray = objectKV.map((obj) => {
  let RFobj = {};
  console.log(obj.key);
  console.log(obj.value);
  //create our variable using empty object,and obj iterator to get key/value
  RFobj[obj.key] = obj.value;
  //console.log([obj.value]);
  return RFobj;
});
console.table(reformatArray);

/* using map to get the chatater values encoding ASCII */
let map = Array.prototype.map;
/* Note: using call here calls a function with given arguemtns and values 
given individually */
const ASCIIencoding = map.call("hiya", (charValue) => {
  return charValue.charCodeAt(0);
});
console.log(ASCIIencoding);

//using map generically querySelector
/* 
let elems = document.querySelectorAll('select option:checked')
let values = Array.prototype.map.call(elems, function(obj) {
  return obj.value
}) 

*/
/* sort  undder the hood  sort converts array to 
a string and uses UTF-16 units values 

syntax: array.sort([compareFunction])

*/
const months = ["march", "arpil", "jan", "dec"];
months.sort();
console.log(months);

//sort compare function

/*
function compare(a,b){
    if(a less than b by ordeing criteria){
        return -1;
    }
    if(a less than b by ordeing criteria){
        return 1;
    }
    //must be equal
    return 0;
    
}
 */

//sort compare for numbers
numbers.sort(function compareNumbers(a, b) {
  return a - b;
});
console.log(numbers); //are numbers are in order from our numbers array

//items sorted by value
let items = [
  { name: "apple", value: 5 },
  { name: "orange", value: 3 },
  { name: "grape", value: 2 },
  { name: "pineapple", value: 8 },
  { name: "mango", value: 9 },
  { name: "peach", value: 5 },
  { name: "cherries", value: 3 },
  { name: "strawberries", value: 8 },
];

items.sort((itemA, itemB) => {
  return itemA.value - itemB.value;
});

console.table(items);

//sort Items by name
items.sort((itemA, itemB) => {
  let itemAname = itemA.name.toUpperCase();
  let itemBname = itemB.name.toUpperCase();
  if (itemAname < itemBname) {
    return -1;
  }
  if (itemAname > itemBname) {
    return 1;
  }
  // must be equal
  return 0;
});
console.table(items);

/* creaing, displaying, and sorting an array  */
let stringArray = ["bobby", "zoe", "tina", "sam", "william"];
let numberStringArray = ["60", "1", "20"];
let numbersArray = [900, 88, 500];
let mixedNumbersArray = [900, 88, 500, "80", "30", "20"];

function compare(a, b) {
  return a - b;
}
//string array sort
stringArray.join();
console.log(stringArray.join());
stringArray.sort();
console.log(stringArray.sort());

//number array sort
numbersArray.join();
numbersArray.sort();
console.log(numbersArray);
//call compare function to order our array
numbersArray.sort(compare);
console.log(numbersArray);

//number as string sort
numberStringArray.join();
numberStringArray.sort();
numberStringArray.sort(compare);
console.log(numberStringArray);

//mixed numbers and string sort
mixedNumbersArray.join();
mixedNumbersArray.sort();
mixedNumbersArray.sort(compare);
console.log(mixedNumbersArray);

/* sorting with map */
// the array to be sorted

//here we dont have someSlowOperation
/* 
const callNames = ["delta", "alpha", "charlie", "bravo"];
const callNamesMap = callNames.map((callName, callNameIndex) => {
  return { callNameIndex, value: someSlowOperation(callName) };
});

callNamesMap.sort((a, b) => {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

const result = callNamesMap.map((callName) =>
  callNames.map([callName.callNameIndex])
);
console.log(result); */

/* 
reduce  executes a reducer function(own creation) on each element 
resulting in a  single output. reducer function is assign to accumulator
whose value is remebered acrss each iteration throughout the array, and 
ultimately becomes the final, singlle result value


Syntax: array.reduce(callback(accumulator,currentValue,index,array)initialValue)

arguements that reducer function takes

Accumulator- accumulates callback return value. and it is the accumulated value
previously returned in the last invocation of the callback or initialValue, if 
it was supplied.

currentValue- The current element being processed in the array

optional arguments:
currentIndex- the index of the current element being processed in the array 
starts from index 0 if an initialValue is provided. 
Otherwise it starts from index 1

Socure Array- the array reduce was called

initialValue- A value to use as the first argument to the first call of 
the callabck. if no initialValue is supplied. the first element in the array 
will be used as the initial accumulator value and skipped as currentValue
calling reduce on an empty array without an initialValue will throw an ERROR

*/

const arrayA = [1, 2, 3];
//our reducer function that can be anything
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(arrayA.reduce(reducer, 0)); //6

//sum of the array of objects
//here we are using the items array
const reducerValueSum = items.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.value;
}, 0);

console.log(reducerValueSum); // sum is 27

// flatten an aray of arrays
let flattend = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((acc, curr) => {
  return acc.concat(curr);
}, []);

console.log(flattend); //[0,1,2,3,4,5]

//counting instances of values in an object
let animals = ["cow", "cat", "dog", "lion", "cow", "lion", "cow"];

let countedAnimals = animals.reduce((animal, currAnimal) => {
  // in operator returns true if specified property is vaild
  if (currAnimal in animal) {
    animal[currAnimal]++;
  } else {
    animal[currAnimal] = 1;
  }
  return animal;
}, {});
console.table(countedAnimals);

/* Grouping  objects by a property */
// here we will group our items array
function groupBy(objArray, property) {
  return objArray.reduce((acc, currObj) => {
    console.log(currObj[property]);
    let key = currObj[property];
    //if prpertyName value not the same
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(currObj);
    return acc;
  }, {});
}
/*
created a new variable for new items grouped that holds our function
to get the array object and the property name we select within the array object
 */
let groupItems = groupBy(items, "value");
console.log(groupItems);
/*  comparing the items using the value properties' value in the items object array

 {name: "grape", value: 2}

{name: "cherries", value: 3}
{name: "orange", value: 3}

{name: "apple" value: 5}
{name: "peach", value: 5}

 {name: "pineapple", value: 8}
 {name: "strawberries", value: 8}

 {name: "mango", value: 9}


 */

/* bonding arrays contained in an array of objects using the spread operator
and initialValue
 */

//using animals object array
let bondingAnimal = animals.reduce(
  (acc, currAnimal) => {
    return [...acc, currAnimal];
  },
  ["cow"]
);

console.log(bondingAnimal);

/* removing duplicaed  items in an array */
let arrayWithDupes = ["a", "b", "b", "b", "u", "z", "z", "t"];
console.log(arrayWithDupes);
let arrayWithNoDupes = arrayWithDupes.reduce((acc, currDupes) => {
  //console.log(currDupes);
  if (acc.indexOf(currDupes) === -1) {
    //console.log(acc.indexOf(currDupes));
    acc.push(currDupes);
    //console.log(acc);
  }

  return acc;
}, []);

console.log(arrayWithNoDupes); // ['a','b','u','z','t']

/* Replace .filter() .map() with reduce() */

const numbas = [-5, 3, 6, 8, 0];
const positiveNumbersTimesTwo = numbas.reduce((acc, currNum) => {
  if (currNum > 0) {
    const doubled = currNum * 2;
    acc.push(doubled);
  }
  return acc;
}, []);

console.log(positiveNumbersTimesTwo); //[6,12,16]

/* running promsies in sequence */

function runPromiseInSequence(arr, input) {
  return arr.reduce(
    (promiseChain, currentFunction) => promiseChain.then(currentFunction),
    Promise.resolve(input)
  );
}
//promise function 1
function p1(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 5);
  });
}
//promise function 2
function p2(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 2);
  });
}
//function3 -will be wrapped in a resolved promise by .then()
function f3(a) {
  return a * 3;
}
//promise function 4
function p4(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 4);
  });
}

const promiseArray = [p1, p2, f3, p4];
runPromiseInSequence(promiseArray, 10).then(console.log);

/* Function composition enabling piping */

//building-blocks to use for composition
const double = (x) => x + x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4 * x;

//function composition enabling pipe funcationality
const pipe = (...functions) => (input) =>
  functions.reduce((acc, currFunction) => currFunction(acc), input);

//composed functions for muiltiplication of specific values
const multiplyBy2 = pipe(double);
const multiplyBy6 = pipe(double, triple);
const multiplyBy9 = pipe(triple, triple);
const multiplyBy16 = pipe(quadruple, quadruple);
const multiplyBy24 = pipe(double, triple, quadruple);

////usage
console.log(multiplyBy2(8));
console.log(multiplyBy6(6));
console.log(multiplyBy9(1));
console.log(multiplyBy16(1));
console.log(multiplyBy24(2));

/* Write map using reduce */

if (!Array.prototype.mapUsingReduce) {
  Array.prototype.mapUsingReduce = function (callback, thisArg) {
    return this.reduce(function (mappedArray, currentValue, index, array) {
      mappedArray[index] = callback.call(thisArg, currentValue, index, array);
      return mappedArray;
    }, []);
  };
}

console.log(
  [1, 2, , 3].mapUsingReduce(
    (currentValue, index, array) => currentValue + index + array.length
  ) // [5, 7, , 10]
);
