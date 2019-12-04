let myFish = ["angel", "clown", "mandarin", "sturgeon"];
let removed = myFish.splice(2, 0, "drum");
console.log(myFish);  // [ 'angel', 'clown', 'drum', 'mandarin', 'sturgeon' ]

myFish.splice(3, 1, "sword");
console.log(myFish);  // [ 'angel', 'clown', 'drum', 'sword', 'sturgeon' ]

myFish.splice(5, 1, "eal");
console.log(myFish); // [ 'angel', 'clown', 'drum', 'sword', 'sturgeon', 'eal' ]

myFish.splice(3, 2);
console.log(myFish); // [ 'angel', 'clown', 'drum', 'eal' ]

let myArray = [0,1,2,3,4,5,6,7,8,9];
let mySplice = myArray.splice(3,5);
console.log(mySplice);   // [ 3, 4, 5, 6, 7 ]

let newArray = [0,1,2,3,4,5,6,7,8,9];
newArray.splice(1, 2);
console.log(newArray); // [ 0, 3, 4, 5, 6, 7, 8, 9]

newArray.splice(2, 0, "addition");
console.log(newArray); // [ 0, 3, 'addition', 4, 5, 6, 7, 8, 9 ]

newArray.splice(2, 1, "replace");
console.log(newArray);  // [ 0, 3, 'replace', 4, 5, 6, 7, 8, 9 ]
