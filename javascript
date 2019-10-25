// info JavaScript //
/* for multiple lines of comments
use this */
// for an inline comment, use this //
PRINT with console.log();
RUN JS file with: node <filename>

JavaScript STATEMENTS END WITH SEMI-COLUMN ;   !!!!
---------------------------------------------------

JS data types: (can all be stored in variables)
string
number
symbol
object
boolean
null
undefined

variables cannot start with a number or contain spaces but $ and _ can be used
(example: var myName; var _a1b2;)

EMPTY VALUES: two special values are null and undefined. These denote the absence of meaningful value.
Null and undefined are values but carry no information.

Assignment always goes from right to left. Everything to the right of the
= operator is resolved before the value is assigned to the variable to the
left of the operator. Example:
declaring variables: var a;  var b;
initialising variables: a = 7;  b = 7;
assigning a to b: b = a;

It is custom to declare and initialise in the same line: var a = 7;
You can declare more variables: var x, y, z; (commas!) assign separately: x = 3; y = 5; z = 7; (semi-columns!)

A variable that is declared but not initialised has the value 'undefined'
For a number the result with an undefined variable will be 'NaN' (not a number).
For a string, the result will be "undefined".

VARIABLE NAMES should be camelCase: first word lowercase, subsequent words are capitalised

GLOBAL SCOPE: variables which are defined outside of a function block have Global scope, i.e.
they can be seen everywhere in the JavaScript code. Variables used WITHOUT THE VAR are
automatically created in global scope. It is important to use var when declaring a variable.
LOCAL SCOPE: variables declared in a function are not defined outside that function, i.e.
not visible.
It is possible to have both local and global variables with the SAME name. In this case the
local variable takes precedence over the global variable.

addition (+), subtraction (-), division (/) and multiplication (*) are the same as in Python.
incrementing (adding) one to a variable is done with ++
Example: i = i + 1 can be used with the ++ operator and becomes: i++

Important operators are +=  and  -=  (compound assignments)
examples:
var myVar = 1;
myVar += 5;
console.log(myVar); (returns 6)

myVar = myVar - 5;
myVar -= 5; (returns 0)

This can also be done with multiplication: *  and  division /
examples:
myVar = myVar * 5; can be written: myVar * 5;
myVar = myVar / 2; can be written: myVar /= 2;

Quotes: using "" for a string means that quotes cause problems. JS uses \ in front of a quoted text:
"This is how to \"quote\" a quote."
IMPORTANT: when using single quotes ('') and double quotes (""), for example describing a conversation,
there should be an even set of quotes. Watch out with things like 'I'm': this MUST be: 'I\'m' ==> backslash

There are two reasons to use escaping characters:

  1) To allow you to use characters you may not otherwise be able to type out, such as a carriage returns.
  2) To allow you to represent multiple quotes in a string without JavaScript misinterpreting what you mean.

Code	Output
\'	 single quote
\"	 double quote
\\	 backslash
\n	 newline
\r	 carriage return
\t	 tab
\b	 word boundary
\f	 form feed

Note that the backslash itself must be escaped in order to display as a backslash !!

Concatenation: build a new string out of other strings by concatenating (+) them together.
NOTE: spaces must be added where needed, within ""
NOTE: use the += operator to concatenate a string onto the end of an existing string to break a long string
over several lines. This means:
myVar = "This is a very long long long long sentence, including a space because another sentence is added."
myVar += "This part is added after the first part."  THESE TWO STRINGS WILL BE JOINED INTO ONE STRING

LENGTH: with myVar.length you can calculate the length of a string.
INDEX: use [] to find a specific instance in a string: myVar[1] for the second character. Last char with
myVar[myVar.length - 1];

ARRAYS: square brackets; indexing possible (also nested indexing)
PUSH: add new value at end with myArray.push()
POP: remove and return the last value of array with .pop()
SHIFT: remove and return the first value of array with .shift()
UNSHIFT: add a new value as the first value of array with .unshift()

FUNCTIONS are built using:
function functionName() {
  <what the function does>
}
Pass values into a function with arguments and use a return statement to send a value back out of a function.

JS uses type coercion. This means that when an operator is applied to the "wrong" type of value, JS converts
a value to the type it needs, with a confusing set of rules. Example:
console.log("5" - 1);  will result in 4
console.log("5" + 1);  will result in 51
This can be useful to find out if a value has a real value, example: console.log(null==0);
This means that with == JS can CHANGE the type of value.
If you want to test if a value is PRECISELY equal to the other (or not) use: === and !==

&& (= and) can be used to combine conditions: if (val a < 10 && val a > 20) ....
|| (= or) can be used to check conditions to see if ONE of them is true or false: if (val a < 10 || val b > 20)

SWITCH STATEMENT can be used to handle many options to choose from. A switch statement tests a value and can
have many case statements which define various possible values. Statements are executed from the first matched
case value until a break is encountered:
switch(num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  case valueN:
    statementN;
    break;
}

Case values are tested with strict equality (===). The break tells JavaScript to stop executing statements.
If the break is omitted, the next statement will be executed.
It is possible to add a default statement for values that do not meet the case values:
switch (val) {
case value1:
  statement1;
  break;
default:
  default statement;
  break;
}







To run JS files use node (download www.node.org),
using the command: node file.js
