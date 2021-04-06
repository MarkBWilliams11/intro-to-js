//selects our id container
const container = document.querySelector("#container");
//consle.dir here displays our first element child of the id container.
console.dir(container.firstElementChild);
//selects our class controls
const controls = document.querySelector(".controls");
//consle.dir here displays our previous element sibiling which is display.
console.dir(controls.previousElementSibling);

/*  
wheb using the querySelector it returns the reference to the first selector match

when using the querySelectorAll it returns a nodelist to all matches
    NOTE: querySelectorAll returns not as an array
        Solution: Array.from() or the spread operator  

*/

//Element Creation

/* 
    create a new element document.createElement([tagName],[option])
    Note: This does not place anything to the DOM.
    just creates it in memory, so we can manipulate the element.
    (by adding styles,classes,ids,text,etc)

   */
const div = document.createElement("div");

//placing element into the DOM

/* 

  Append Elements 

  parentnode.appendChild(childnode)
-will append the childnode as a child of parent  

  parentnode.insertBefore(newNode,referenceNode)
-will insert the newNode into the parent node before the referenceNode  
  */

/* 
    Remove Elements 

    parentNode.removeChild(child)
-will remove the child from the parentNode on the DOM and returns reference to child

*/

/* 
Altering Elements

when you have a reference to an element, you can use the reference to alter it properties.
-adding/ removing 
-altering attributes
-changing classes
-adding inline style information 
-and more!!!


*/

//adding inline style

// useful link http://domenlightenment.com/#6.2

//adds indicated style rule
div.style.color = "green";
//adds several style rules
div.style.cssText = "color: green; background: white";
// also adds several rules
div.setAttribute("style", "color: green; background: white");

/* Note:
div.style.background-color - will attempt subtraction

bracket notation or camelCase
div.style['background-color'] ok
div.style.cssText ='background-color' ok
 */

//Editing Attributes
//useful link  https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes

/* working with ids */

div.setAttribute("id", "theDiv");
// if a id exists update it to 'theDiv' else create a new id with 'theDiv'

div.getAttribute("id");
//will return the value of the specified attribute, here its 'theDiv'

div.removeAttribute("id");
//will remove the specifed attribute, here its 'theDiv'

/* Working With classes */

div.classList.add("new");
//adds class of  'new' to the div

div.classList.remove("new");
// will remove the class for the div

div.classList.toggle("active");
//if div does not have class 'active' then add it
// if it does then we will reove it
// NOTE: much preferred meth to add or remove classes

/* adding text content */
div.textContent = "Hello World";
// create a textNode with 'Hello World' and insert it into div
//much more preferable to adding text
/* adding html */
div.innerHTML = "<span>Hello World</span>";
//renders html inside the div
//use sparingly for adding text

/* applying  */

//selects our id of containerContent
const containerContent = document.querySelector("#containerContent");
//create a div element
const content = document.createElement("div");
// adds the class of content to  the content variabls that hold the div
content.classList.add("content");
//adds the text with the string
content.textContent = "This is the gloruious text content";

//parent containerContent is selected and we use appedChild to add content as a child.
//Note: this does not change the inner html of the file just the browser rendering
containerContent.appendChild(content);

/* same container playground */
const contentPara = document.createElement("p");
contentPara.classList.add("contentPara");
// here is where we are adding the style red
contentPara.style.color = "red";
contentPara.textContent = `Hey i'm Red`;

containerContent.appendChild(contentPara);

//creating a a blue h3
const contentheadingThree = document.createElement("h3");
contentheadingThree.style.color = "blue";
contentheadingThree.textContent = `Hey i'm an h3 with blue color`;

containerContent.appendChild(contentheadingThree);

//styled div container
const styledDiv = document.createElement("div");
styledDiv.style.border = "10px solid black";
styledDiv.style.background = "pink";
//placing  the h1 with the styledDiv
const contentHeadingOne = document.createElement("h1");
contentHeadingOne.textContent = "Hey im in the div";
//append to styledDiv
styledDiv.appendChild(contentHeadingOne);

//placing p element within the styledDiv
const styledDivPara = document.createElement("p");
styledDivPara.textContent = "This paragraph is TOO!";
//append to styledDiv
styledDiv.appendChild(styledDivPara);

// after havve appened the h1 and the p it appears with in the container styledDiv
containerContent.appendChild(styledDiv);

/* 
Events
 are actions that occur on the web page (muouse clicks, keypresses,..) using
 javascript to listen and react to them.

 three primary way to preform events

 - can attach function directly on he html
 
 - can set on_event property on the dom object 
 in javascript

 -function can attach an event listener to the nodes in your  javascript.
    *preferred method*

*/
//examples of the different methods

// Method 1 look at html for applying, it clutters html

//Method 2 moved in to js file but the  dom element can only have one onclick property
const btnClass = document.querySelector(".btn");
btnClass.onclick = () => alert("Method 2"); //;

//Method 3 maintains our sepreation and allows for more use using eventlistener
const btnId = document.querySelector("#btn");
btnId.addEventListener("click", () => {
  alert("Method 3 using event listener");
});

/* 
All three methods can be used with a named function as well
which is a good idea if a funcion if going to do somthing mutiple times.


*/

//named funtion
function alertFunction() {
  alert("This is the named function");
}
//Note: does not use previous alert
btnClass.onclick = alertFunction;
//Note: still use other function alert
btnId.addEventListener("click", alertFunction);

/* the 'e' is a callback function from addEventListener
it is an object that references the event itself

*/
btnId.addEventListener("click", function (e) {
  console.log(e);
});

// we can see what the target is here
btnId.addEventListener("click", function (e) {
  console.log(e.target);
});
//using target event to change the matching target background
btnId.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

/* 
Attaching  listeners to a group of nodes 

attatching simliar events  we can you a nodelist with querySelectorAll
inorder to  add listener we need to iterate through the list

*/

// nodelist looks and acts like array but is not actually an array
const button = document.querySelectorAll("button");
console.log(button);

//foreach method will iterate through each button
button.forEach((button) => {
  //for each one we will add a click event
  button.addEventListener("click", () => {
    alert(button.id);
  });
});

/*other usful event include:
 
click
dbclick
keypress
keydown
keyup

*/
