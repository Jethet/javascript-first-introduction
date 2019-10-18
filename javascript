// info JavaScript //
/* for multiple lines of comments
use this */
// for an inline comment, use this //

JavaScript STATEMENTS END WITH SEMI-COLUMN ;

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

To run JS files use node (download www.node.org),
using the command: node file.js
