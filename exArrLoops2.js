
let newArray = ["one", "two", "three", "four", "five"];
let counter = 0;

while (counter < newArray.length){
  console.log(`Counter (===index): ${counter} - element: ${newArray[counter]}`);
  counter++;
}
/* Result:
Counter (===index): 0 - element: one
Counter (===index): 1 - element: two
Counter (===index): 2 - element: three
Counter (===index): 3 - element: four
Counter (===index): 4 - element: five
*/

let myArray = ["one", "two", "three", "four", "five"];
let newcounter = 0;

while (newcounter < myArray.length){
  console.log(`These are the counts: ${newcounter}`);
  newcounter++;
}
/* Result:
These are the counts: 0
These are the counts: 1
These are the counts: 2
These are the counts: 3
These are the counts: 4
*/
