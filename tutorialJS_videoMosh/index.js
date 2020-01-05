
let person = {
    name: 'John',
    age: 25,
    city: 'Barcelona'
};

console.log(person);
console.log(person.name);

person.name = 'Mary';
console.log(person.name);

let selection = 'name'
person[selection] = 'Helen';
console.log(person.name);
console.log(person.name.split(''));

let myArray = ['one', 'two', 'three', 'four'];
console.log(Array.isArray(myArray));
console.log(Array.isArray(person.name));