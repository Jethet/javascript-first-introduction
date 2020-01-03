let oneObject = {1:"One", 2:"Two", 3:"Three", 4:"Four", 5:"Five", 6:"Six", 7:"Seven",
                 8:"Eight", 'nine':9, 'ten':10};
let otherObject = oneObject;
console.log(otherObject);

console.log(oneObject[3]);
console.log(otherObject.ten);

oneObject.eleven = 11;
console.log(oneObject);
oneObject.twelve = 12;
console.log(otherObject.nine);
console.log('nine' in oneObject);
delete otherObject.ten;
console.log(otherObject);

console.log(Object.keys(otherObject));
console.log(Object.values(otherObject));

