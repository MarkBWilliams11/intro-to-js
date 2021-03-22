// Try not to do these

// var myVarible = 'This is the global scope';

/* var myFunction = function(){
    console.log('something');
}
 */

/* Returining a function from a function */

function addition(b, n) {
  return b + n;
}
/*addsum is now the function (b,n) 
takes 2=b and 5=n return 2 + 5 */
let addSum = addition(2, 5);

log(addSum); // 7
/* 
// simple function
function one() {
  return "one";
}

We can clearly see here that the variable one is a function
console.log(typeof one);  // a function that returns the string "one"

// we can set a reference to the one() value

let value = one;

//we can call the function with invokation operator -()
by adding it to the value - > value();


console.log(value();)

 */

//

/* Function returning a function */

function two() {
  return function () {
    log("this is function two");
  };
}

//varible reference to the function
//log(two());
let functionTwoReference = two();

log(typeof functionTwoReference); //function two();

//now we can invoke-()
functionTwoReference();
// contains function two string"this is function two"

/*NOTE: return without a value exits code immediately 

never add a newline to a return
*/
