function arraySum(array){
    let result = 0
    for(let i = 0; i < array.length; i++){
         result += array[i];
    }         
    console.log("$" + `${result}`);

}

const prices = arraySum([5, 7.99, 9.99, 0.99, 21]);