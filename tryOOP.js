// Create objects with the constructor function and prototypes:
//   always start name of constructor function with capital !!
//   parameters should be the properties that you want for the object
//   'this' is used to set the parameters as properties of the object (like 'self' in Python)

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); // This is the constructor for a date
}

// instantiate object: these will be printed as 'Person', i.e. instance of Person object
const person1 = new Person('Mary', 'Brown', '1969-04-03');
const person2 = new Person('Helen', 'Davis', '1974-06-19');
const person3 = new Person('Anna', 'Johnson', '1979-11-19');

console.log(person1.dob, person2.dob);
console.log(person1, person2, person3);