let myArray = [1, 2, 3, 4, 5];

let length = myArray.length;
console.log(length);

let index1 = myArray[0];
console.log(index1);

let indexLast = myArray.length -1;
let lastElement = myArray[indexLast];
console.log(lastElement);

myArray.push(6, 7, 8);
console.log(myArray);

myArray.unshift(-1, 0);
console.log(myArray);

myArray[3] = 2.5;
console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.shift();
console.log(myArray);
