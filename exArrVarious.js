// Count length of an array with .length: returns total index plus 1 (index starts with 0)
let myArray = [1,2,3,4,5,6,7,8,9];
console.log(myArray.length);

console.log(myArray.every(item => item <9));
console.log(myArray.filter(item => item % 2 === 0));
console.log(myArray.forEach(item => item * 5)); // returns 'undefined' ??
console.log(myArray.map(item => item * 10));
console.log(myArray.some(item => item > 10));