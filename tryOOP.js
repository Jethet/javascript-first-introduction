// Create objects with the constructor function and prototypes:
//   always start name of constructor function with capital !!
//   parameters should be the properties that you want for the object
//   'this' is used to set the parameters as properties of the object (like 'self' in Python)

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); // This is the constructor for a date
}

// Using 'prototype' with the object name you can specify methods to be used with the object:
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear(); // Use the getFullYear() function on the dob propery
};
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
};
Person.prototype.charLastName = function(){
    return `${this.firstName.length} is the length of ${this.firstName}`;
};

// instantiate object: these will be printed as 'Person', i.e. instance of Person object
const person1 = new Person('Mary', 'Brown', '1969-04-03');
const person2 = new Person('Helen', 'Davis', '1974-06-19');
const person3 = new Person('Anna', 'Johnson', '1979-11-19');

console.log(person1.dob, person2.dob);
console.log(person1, person2, person3);

console.log(person1.getBirthYear());
console.log(person1.getFullName());
console.log(person2.charLastName());
