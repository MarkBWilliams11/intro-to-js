/* callstack is a last in first out data structure 

Step 3:  here we have not called another function.
 

function3(a,b){
step 5.here we pop out of the callstack  return function3 parameters
    return a * b;
}

Step 2: here we put another function on the stack 
 funcntion2 which returns function3 
 and executes the parameter from function2 within it.

 function2(c){

     Step 5: Now it will execute function3 based on our main(c)
    return function3(c , c);
}

Step 1: first section of the callstack main(), in the local scope
 where we can define our function definition,
   

function main(c){

Step 6: here we make a variable for our function2 result
let var = function2(c)

Step 7. console.log will  pop out of the stack
    console.log(var);
    
}

Step 7: will also pop out, then our stack will be empty again
main(c)  <-we can insert a value


*/
