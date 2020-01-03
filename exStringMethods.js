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


let mySentence = "I have no idea what to do with an arrow function and forEach with two parameters";
console.log(mySentence.slice(7,11));
let sepSentence = mySentence.split(" ");
console.log(sepSentence);
console.log(sepSentence.length);
console.log(sepSentence[5]);
console.log(sepSentence.indexOf("with"));
console.log(sepSentence.includes("never"));
console.log(sepSentence.slice(7,11));

let testWord = "thisisatestword";
console.log(testWord.slice(7,11));