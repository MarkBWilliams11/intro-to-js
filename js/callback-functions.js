/* callback functions */
/* Note: that confirm() method displays a dialog box with a 
specified message,along with ok and cancel button
//boolean values
true - the user clicked "OK"
false - the user clicked "Cancel"

*/

/*function ask(question, yes, no) {
  //confirm box
  if (confirm(question)) yes();
  else no();
}*/

// Note: we seperated by commas

/* ask(
  "Do you agree?",
  function () {
    alert("You agreed.");
  },

  function () {
    alert("You canceled the execution.");
  }
); */
/*
//with arrow function
ask(
  "Do you agree?"
  () => alert("yes"),
  () => alert("No")
);
*/
/* 
Note:
fucntion Declration-
offers more freedom and organizes code,because they are declared
*/

//using arrow function
let sum = (u, o) => u * o;

log(sum(10, 10));
