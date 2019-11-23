function sayHello(language){
    switch(language){
        case "fr":
            console.log("bonjour!");
            break;
        case "sp":
                console.log("hola!");
    }   
}

sayHello("fr");
sayHello("sp");

function multiplyNumbers(num1, num2){
    return num1 * num2;
}
function printResult(){
    result = multiplyNumbers(3,6);
    console.log(`The result is ${result}`);
}
printResult();

// Calculator function:
function calculateNumbers (num1, num2, operator){
    if(!num1 || !num2 || !operator){
        console.log("Please enter both numbers and the operator.");
        return;
    } else if(typeof num1 !== "number" || typeof num2 !== "number"){
        console.log("Please provide numericals.");
        return;
    } else if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/"){
        console.log("Please provide the correct operator.");
        return;
    }
    let result;
    switch(operator){
        case("="):
        result = num1 + num2;
        break;
        case("-"):
        result = num1 - num2;
        break;
        case("*"):
        result = num1 * num2;
        break;
        case("/"):
        result = num1 / num2;
        break;
    }
    let response = `${num1} ${operator} ${num2} = ${result}`;
    return response;
}
console.log(calculateNumbers(36,7,"*"));
