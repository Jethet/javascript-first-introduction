// TERNARY OPERATOR: ? stands for 'then' and : stands for 'else'

const x = 10;

const color = x > 10 ? 'red' : 'blue';
console.log(color);

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not blue or red');
        break;

}

// You can set default values for parameters in a function: these will be used if no
// parameters are given; if parameters are given, these override the default values:
function addNums(num1=1, num2=1){
    return num1 + num2;
}
console.log(addNums(4, 6));
console.log(addNums());

// Arrow function:
const addNumbers = (num1=1, num2=1) => {
    return num1 + num2;
};
console.log(addNumbers(5,12));

// For a simple arrow function, code can be simpler:
const addSimple = (num1=1, num2=1) => num1 + num2;
console.log(addSimple(3,9));
console.log(addSimple());

// Even simpler if you have one parameter only:
const addFive = num1 => num1 + 5;
console.log(addFive(9));