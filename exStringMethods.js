let myStr = "whatever";

let myStrNext = myStr.slice(0,4);
console.log(myStrNext);

let myArray = [0,1,2,3,4,5,6,7,8,9];
let mySplice = myArray.splice(1,10);
console.log(mySplice);   // [ 3, 4, 5, 6, 7 ]
console.log(myArray);

mySplice.forEach(function(number){
    console.log(`What number is ${number}`);
});

let newArray = [0,1,2,3,4,5,6,7,8,9];
newArray.splice(9,10);
console.log(newArray); // [ 0, 3, 4, 5, 6, 7, 8, 9]

