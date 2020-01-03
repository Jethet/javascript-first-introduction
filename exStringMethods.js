let myStr = "whatever";

let myStrNext = myStr.slice(0,4);
console.log(myStrNext);

let myArray = [0,1,2,3,4,5,6,7,8,9];
let mySplice = myArray.splice(1,10);
console.log(mySplice);   // [ 3, 4, 5, 6, 7 ]
console.log(myArray);

mySplice.forEach(function(number){
    console.log(`What number is ${number}`);
})

let newArray = [0,1,2,3,4,5,6,7,8,9];
newArray.splice(9,10);
console.log(newArray); // [ 0, 3, 4, 5, 6, 7, 8, 9]


for (let i=0; i<= newArray.length; i++){
    console.log(i + 5);
}

newArray.forEach(function(i) {
    console.log(i);
});

// THIS IS THE SAME AS arrow function:

newArray.forEach(name => console.log(name));

newArray.forEach(function(name){
    console.log(`This is ${name}`);
  });