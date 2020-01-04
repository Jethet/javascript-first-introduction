
/*const price = 12.99;
const statement = `The price of this amazing product is ${price}.`;
console.log(statement, price);

console.log(statement + " This is amazing");

const campuses = `
  - Madrid
  - Barcelona
  - ...
  - ...
  - Lisbon`;

  console.log(`Multiline string and interpolation 😉: ${campuses}`);

let text = "This is the first part.";
text += " So what?";
console.log(text);
console.log(text.length);

console.log(text.toUpperCase());

console.log(text[0], text[8], text[16], text[-1]);

console.log(text.charAt(31));

console.log(text.indexOf("th"), text.indexOf("Th"));

console.log(text.includes("th"), text.includes("wq"));

console.log(text.substring(8, 11));

let newStr = text.substring(24, 32);
console.log(newStr);
console.log(text);

let secondStr = text.slice(24, 32);
console.log(secondStr);
console.log(text);
*/

let greeting = `Hello Nick! 
How are you doing?`;
console.log(greeting);

console.log(greeting.endsWith('doing?'));
console.log(greeting.endsWith('lo', 5));

const someWords = ["a", "b", "c"];
const someNumbers = [1,2,3,4];
const mixWordNumbers = [...somewords, ...someNumbers];
console.log(mixWordNumbers);