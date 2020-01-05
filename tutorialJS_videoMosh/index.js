
let person = {
    name: 'John',
    lastName: 'Doe',
    age: 25,
    hobbies: ['music', 'movies', 'sport'],
    address: {
        street: 'C/ Avila 20',
        city: 'Barcelona',
        country: 'Spain'
    }
    
};

console.log(person);
console.log(person.name, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

const {name, lastName, address: {country}} = person;  // destructuring: pulling variables out of an object
console.log(country);



/*
person.name = 'Mary';
console.log(person.name);

let selection = 'name'
person[selection] = 'Helen';
console.log(person.name);
console.log(person.name.split(''));

let myArray = ['one', 'two', 'three', 'four'];
console.log(Array.isArray(myArray));
console.log(Array.isArray(person.name));
*/
