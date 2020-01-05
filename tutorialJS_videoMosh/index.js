
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
