// Create objects with the constructor function and prototypes:
//   always start name of constructor function with capital !!
//   parameters should be the properties that you want for the object
//   'this' is used to set the parameters as properties of the object (like 'self' in Python)

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
}

// instantiate object: these will be printed as 'Person', i.e. instance of Person object
const person1 = new Person('Mary', 'Brown', '04-03-1969');
const person2 = new Person('Helen', 'Davis', '14-08-1974');
const person3 = new Person('Anna', 'Johnson', '29-11-1979');
console.log(person1, person2, person3);