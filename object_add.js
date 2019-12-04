var personObject = {
    firstName : "John",
    lastName : "Smith"
}
personObject.age = 23;
personObject["salary"] = 14000;

console.log(personObject);
console.log(personObject.lastName);
console.log(personObject.lastName.length);

for (var member in personObject) {
    if (personObject.hasOwnProperty(member))     {
        console.log("the member " + member + " of personObject is " + personObject[member])
    }
}
