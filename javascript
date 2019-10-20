// info JavaScript //
/* for multiple lines of comments
use this */
// for an inline comment, use this //

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

Assignment always goes from right to left. Everything to the right of the
= operator is resolved before the value is assigned to the variable to the
left of the operator. Example:
declaring variables: var a;  var b;
initializing variables: a = 7;  b = 7;
assigning a to b: b = a;

It is custom to declare and initialize in the same line: var a = 7;

A variable that is declared but not initialized has the value 'undefined'
For a number the result with an undefined varialbe will be 'NaN' (not a number).
For a string, the result will be "undefined".

VARIABLE NAMES should be camelCase: first word lowercase, subsequent words are capitalized

addition (+), substraction (-), division (/) and multiplication (*) are the same as in Python.
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










To run JS files use node (download www.node.org),
using the command: node file.js
