// Define a function, name it however you prefer respecting the good naming conventions,
// that will do the same as we did earlier - loop through the array and print the type
// of each element of the array in the console.

const someArr = ["max", 34, true, {name: "sandra", student: true}, 
["javascript", "mongodb", "react"]];

someArr.forEach(elementType => {
    console.log(typeof elementType);
});

/*
function printType(array){
    for (let i = 0; i <= someArr.length; i++){      
        console.log(typeof array[i]); 
    }
}
*/

// Define a function getCredentials() that will receive the following object
// as argument and print the following result:

let user = {
  username: "ironhacker",
  password: "123iron345"
};

// => expected output:
// Username is: ironhacker and the password is: 123iron345.

function getCredentials(){
    console.log(`Username is: ${user.username} and the password is: ${user.password}.`);
}

getCredentials(user);

