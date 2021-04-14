/* function parameters  can have any number of them */
function f1() {
  return console.log("function");
}
function f2OneParam(arg1) {
  return arg1;
}
function f3TwoParam(arg1, agr2) {
  return arg1 + agr2;
}
f1(); //function
console.log(f3TwoParam(5, 3)); //8
console.log(f2OneParam(3)); //3

// we can provide a default parameter if a parameter is not set
//EX:
function defaultPara(arg1, arg2) {
  if (arg2 === undefined) {
    //set to zero
    arg2 = 0;
  }
  //execute after condition
  return console.log(arg1 + arg2);
}

defaultPara(5); //even though we dont have a argument2 we still execute from default 0
// preferred way
//EX: same result
function defaultArg(arg1, arg2 = 0) {
  //initialize function arg to 0 much cleaner
  return console.log(arg1 + arg2);
}
defaultArg(9);
//note if undfined  set to second arg it would be zero still
let log = console.log;

/* Paramter destructuring */

function greet({ name }) {
  return log(`Hello ${name}`);
}
const person = { name: "John Smith" };

greet(person); //Hello John Smith

//defualt para
function greetingWithdefault({ name = "Unknown" } = {}) {
  return log(`Hello ${name}!`);
}

greetingWithdefault(/*person*/); //Hello Unknow! if name property does not exist

/*  argument objects - uses a speacial object argument
which holds all th e inocation arguments in an array like object */
function ArgObj() {
  log(arguments);
  let sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return log(sum);
}
ArgObj(6, 8);

/* 
Note: function Scopes defines its own arguements object
    additional variable are need to access the outer function scope

*/
function outerFunction() {
  const outerArguments = arguments;
  return function innerFunction() {
    //outer function outerArguments
    outerArguments[0];
  };
}
log(outerFunction()); // :(
