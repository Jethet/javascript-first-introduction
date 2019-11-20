
const animalArray = ["dog", "cat", "fish"];

// option 1 - ES5 (still in use so good to know):
// animal is just a placeholder, can be any word
animalArray.forEach(function(animal){
  console.log(`option 1: ${animal}`);
});
/* RESULT:
option 1: dog
option 1: cat
option 1: fish
*/

const myArray = ["one", "two", "three", "four", "five", "six"];

myArray.forEach(function(my){
  console.log(`option 1: ${my}`);
});
/* RESULT:
option 1: one
option 1: two
option 1: three
option 1: four
option 1: five
option 1: six
*/

const newArray = ["zero","one", "two", "three", "four", "five", "six", "seven", "etc"];

newArray.forEach(arrayElement => {
  console.log(`Option 2: ${arrayElement}`);
});
/* RESULT:
Option 2: zero
Option 2: one
Option 2: two
Option 2: three
Option 2: four
Option 2: five
Option 2: six
Option 2: seven
Option 2: etc
*/
