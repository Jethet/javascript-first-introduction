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

