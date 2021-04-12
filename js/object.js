/* 
Objects are used to store keyed collection of various data.
has an optional list of properties.
property also called property name is a key: value pair
-key is a string : value can be anything  

ex: 
let user = {}; object literal syntax (preferred)
or
let user =  new.Object(); object constructor syntax
*/
let user = {
  //object
  name: "John", //key:name value:'John'
  age: 30, //key:age value: 30
  lastname: "Doe",
};

//we can access property name values by using dot noation
//we can remove property names
delete user.age;

//mutli worded property names must be in quotes "property name"
let userLikes = {
  "like cheese": true,
  //Note: we end with comma for objects
};

console.log(userLikes);

/* Square brackets  
to access mutiword property names: 
user. likes birds = true    will give us an error
*/
console.log(userLikes["like cheese"]); //true works!
//works to delete aswell delete.userLikes["like cheese"]

//test enviornment
const testDiv = document.querySelector("#testDiv");
const playdiv = document.createElement("div");
const userPlayBtn = document.createElement("button");
userPlayBtn.textContent = "Test";

userPlayBtn.addEventListener("click", promptTest);

function promptTest() {
  //accessing the property name, by storing value in variable
  key = prompt(`Access property name user["name"] `, "name");
  //using the variable key to store "name"
  console.log(user[key]);
  //user.key work be undefined

  /* Creating an object  which are called computed properties */
  //using the variable to store anyName
  keyName = prompt(`Create a key name:`, "anyName");

  //object createKey
  let createKey = {
    //here is the variable that store anyName, placed in the lovation of propertyname
    [keyName]: "value",
  };
  //can access the object by using the anyName we created
  console.log(createKey.anyName);
  // Can also create complex square bracket property names like so [keyName`${something}`]

  /*we can shorthand our codeusing  properties and variables with 
  the same name  we can just use the name for example*/
  function makeUser(name, age) {
    return {
      /* name: */ name,
      /*  age:  */ age,
      //other properties...
    };
  }
  let makeUserTest = makeUser("mac", 29);
  console.log(makeUserTest);

  //Note: property names are strings or symbol so there is no limitation
  let obj = {
    0: "test",
  };
  // the number zero is converted to a string so they output the same
  console.log(obj[0]); // test
  console.log(obj["0"]); // also test

  /*Note: This is a gotcha with special property name 
  __proto__ (cant set to non-object value)  */
  obj.__proto__ = 5;
  alert(obj.__proto__); // returns [object Object]

  /* Property existance test using  in operator
  
  its possible to access any property, and non-existant properties 
  would return undefined

  */
  alert(user.bike === undefined); // true cause bike property value does not exist

  /* using in operator to check if property exist  
  (preferred way to test check against all values null,empty,unknown...)
  syntax:
    "property name" in object  */
  alert("name" in user); //true
  alert("rondo " in user); //false

  /*Note: to omit the quotes would mean we need to store
   the property name in a variable to access it
   
   
   userNameKey = "name"

   userNameKey in user
   */

  /* The for .. in .. loop 
   Note: not the same a for loop(;;) 
   
   syntax for(let key in object){
     //code to execute againgst all object properties
   }
   note we can use another variable but key or prop make sense
   */

  for (let key in user) {
    // can get the property name
    console.log(key);
    //can get property name values
    console.log(user[key]);
  }

  /* Objects Order
  If we loop over an object  if it contains integer properties they are sorted
 non-integer appear as they were created .
  
  */

  //here we have code written to have a certain code up top
  let codes = {
    49: "Germany",
    41: "Switerland",
    44: "Great Britian",
    //....
    1: "USA",
  };
  for (code in codes) {
    console.log(code); // code are in ascending order
  }
  /*integer property term here mean a 
  string that can be converted to-and-from an integer without a change*/
  //Math.trunc() method  removes the decimal part

  alert(String(Math.trunc(Number("49")))); //'49, same, integer property
  alert(String(Math.trunc(Number("+49")))); //'49, not same,+49 is not integer property
  alert(String(Math.trunc(Number("1.2")))); //'1, not same,1.2 is not integer property

  //non-integer will get us the custom result we want
  let codesCustomOrder = {
    "+49": "Germany",
    "+41": "Switerland",
    "+44": "Great Britian",
    //....
    "+1": "USA",
  };
  for (owncode in codesCustomOrder) {
    console.log(owncode);
  }
} //end test div
playdiv.append(userPlayBtn);
testDiv.appendChild(playdiv);

let newObj = {};
//add to object
newObj.name = "Object";
//change object name value
newObj.name = "Object2";
console.log(newObj);

//empty object initilizer
let test = {};
console.log(test);

//object leteral with properties and functionality with methods
const personA = {
  name: ["Mary", "jane"],
  age: 27,
  greeting: function () {
    //both will work
    console.log(`Hi may name is ${personA.name}`);
    //or
    //using this within the function refers to the property name of the object
    console.log(`Hi may name is ${this.name[0]} ${this.name[1]}`);
  },
};
/* using dot notation to access */
//objectname.itemToAccess (items of property array or methods)
personA.greeting();

//Sub-names effect complex way to chain on steps,(different then how we accessed it above)
const personB = {
  name: {
    first: "Mac",
    last: "Dubois",
  },
  age: 29,
};
console.log(personB); // all object literal properties
console.log(personB.name); //just the name propties
console.log(personB.name.last); // only accessing last name within nme properties

/*bracket notaion is a good way of access similar to using index
here we just use the property name to access it 
*/
console.log(personB["age"]);

//adding new property and methods to existing object literals
personB["Gender"] = "Male";

console.log(personB); //Gender property has been added with value

/* using bracket notation to dynamically set values and property names

*/

//test enviornment
let dyObj = {};
let dynamicBtn = document.createElement("button");
dynamicBtn.textContent = `Dynamic Input`;
testDiv.appendChild(dynamicBtn);
dynamicBtn.addEventListener("click", dyInput);

//our function stores our prompt values in variables
function dyInput() {
  let propName = prompt(`What is the property Name:`);
  let propValue = prompt(`What is the value of it`);
  //here we place the variables in the object as we see fit
  dyObj[propName] = propValue;
}

console.log(dyObj);
