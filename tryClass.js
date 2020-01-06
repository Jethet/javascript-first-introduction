// Create CLASS instead of Person function in tryOOP.js
// (this is sometimes called syntactic sugar: it does the
// same thing in a different way)

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob); 
    }
   // With a class, the method can be defined when defining the class: 
    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    charLastName() {
        return `${this.firstName.length} is the length of ${this.firstName}`;
    }
}
//INSTANTIATION WORKS THE SAME:
const person1 = new Person('Mary', 'Brown', '1969-04-03');
const person2 = new Person('Helen', 'Davis', '1974-06-19');
const person3 = new Person('Anna', 'Johnson', '1979-11-19');

console.log(person1.dob, person2.dob);
console.log(person1, person2, person3);
console.log(person1.getBirthYear());
console.log(person1.getFullName());
console.log(person2.charLastName());