/*function arraySum(array){
    let result = 0
    for(let i = 0; i < array.length; i++){
         result += array[i];
    }         
    console.log("$" + `${result}`);
}

const prices = arraySum([5, 7.99, 9.99, 0.99, 21]);


Define a function that will:
    count from 1 to 100,
    on numbers divisible with 4 print “Hey”,
    on numbers divisible with 6 print “There”,
    on numbers divisible with both 4 and 6 print “Ironhack”,
    skip numbers divisible with 7,
    on the number that represents your age add ! (ex. 34!).
*/
function printCount(num){
    for (let i = 1; i <= num; i++){
        if (i === 99) {
            console.log("You can't be THAT old??!!");
        } else if (i % 7 === 0) { continue; }
        else if (i % 4 === 0 && i % 6 === 0){
            console.log("Ironhack");
        } else if (i % 4 === 0) {
            console.log("Hey");
        } else if (i % 6 === 0){
                console.log("There");
        } else {
            console.log(i);
        }
    }
}
printCount(100);