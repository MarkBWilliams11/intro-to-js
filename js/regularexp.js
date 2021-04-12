/*
 Regular Expressions are patterns  used to match character 
 combinations in a string

 using regular expression literals
 ler regex = /ab+c/;
 

 using a constructor 
 let regex = new RegExp('ab+c)

 Charater classes

 . - Matches any single chracer except line terminators
    \n,\r \u2028 \u2029
    ex: /.y/ matches "my "and "ay" but not "yes" in "yes make my day"
    dot loses special meaning inside chacter class
    **inside a character class, the dot loses its special meaning 
        and matches a literal dot
    
\d- matches any digit  equivalent to [0-9].
    /\d/ or /[0-9]/ "B2" matches"2"

\D- matches any character that is not equivalent to [^0-9].
    /\D/ or /[^0-9]/  "B2" matchehs "B"

\w -matches any alphanumeric character from the basic latin alphabet, includes underscore
equivalent to [A-Za-z0-9_]
"5" in "$5.29" m" in "Émanuel"

\W matchehs any character that is not a word character from the basic latin alphabet
"$" in "$5.29" "É" in "Émanuel"

\s- Matches a single white space character, including space, tab, form feed, line feed, and other
 Unicode spaces.
  Equivalent to [ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]

  \S -Matches a single character other than white space. 
  Equivalent to [^ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff].

  \t- matches a horizonal tab 
  \r- matches a carriage return 
  \n- matches a linefeed 
  \v- matches a vertical tab 
  \f- matches a form-feed
  [\b] - matches backspace 
  \0 - matches NUL character
        dont allow with another digit

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

/*  searching for digits */
let randomData = "515 5655 786786 5463456 4545";
let regFindfourDigits = /\b \d{4}\b/g;
//\b indicates a boundary (do not start matching in the middle of a word)
//\d{4} indictes a digit,four times
// \b indicates another boundary (i.e. do not end matching in the middle of a word)
console.log(randomData.match(regFindfourDigits));

/* looking for a word(from latin alaphabet) staring with A */
let catNonsense = "cat Ada madness all the Time at Night";
let regexpWordStartingWithA = /\b[aA]\w+/g;
console.log(catNonsense.match(regexpWordStartingWithA));

/* Looking for a word (from Unicode characters) */
let nonEnglishText = "Приключения Алисы в Стране чудес";
let regexpBMPWord = /([\u0000-\u0019\u0021-\uFFFF])+/gu;
console.table(nonEnglishText.match(regexpBMPWord));

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
let paraInform = document.createElement("p");
let phoneForm = document.createElement("form");
let phoneLabel = document.createElement("label");
let phoneInupt = document.createElement("input");
let phoneCheckBtn = document.createElement("button");
let paraOutput = document.createElement("p");

//form id & classes
paraInform.classList.add("paraInform");
phoneForm.setAttribute("id", "phoneForm");
phoneForm.setAttribute("action", "#");
phoneLabel.setAttribute("for", "phoneLabel");
phoneLabel.classList.add("phoneLabel");
phoneInupt.setAttribute("id", "phoneInput");
phoneInupt.setAttribute("placeholder", "###-###-####");
phoneCheckBtn.classList.add("phoneCheckBtn");
paraOutput.classList.add("paraOutput");

//phone container content
paraInform.textContent = 'Enter your number phone here then click "check"';
phoneLabel.textContent = "Number Input  ";
phoneCheckBtn.textContent = "Check";
paraOutput.textContent = "";

//element Selector
const phoneContainer = document.querySelector("#phoneContainer");
const InformParaSele = document.querySelector(".paraInform");
const phoneFormSele = document.querySelector("#form");
const phoneLabelSele = document.querySelector(".phoneLabel");
const phoneInputSele = document.querySelector("#phoneInput");
const phoneCheckBtnSele = document.querySelector(".phoneCheckBtn");
const paraOutputSele = document.querySelector(".paraOutput");

//phone container  appending order
phoneContainer.appendChild(paraInform);
phoneContainer.appendChild(phoneForm);
phoneContainer.appendChild(phoneLabel);
phoneContainer.appendChild(phoneInupt);
phoneContainer.appendChild(phoneCheckBtn);
phoneContainer.appendChild(paraOutput);

//regular Expression validilty check
let regPhoneNumber = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;

//trigger function
phoneCheckBtn.addEventListener("click", phoneNumValidity);

//function
function phoneNumValidity(phoneInput) {
  let checkPass = regPhoneNumber.exec(phoneInupt.value);
  if (!checkPass) {
    alert(`${phoneInupt.value} i'snt a phone number`);
  } else {
    paraOutput.textContent = `The number is ${phoneInupt.value}`;
  }
}
