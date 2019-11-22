/*const theseObj = [
    {
      prop1: "One",
      prop2: "Two",
    },
    {
      prop1: "Word",
      prop2: "Sentence"
    }
];

let propAdd = {
  prop1: "Three",
  prop2: "Four"
};

theseObj.push(propAdd);
console.log(theseObj);
*/
/* Using the given array of objects:
        display price of iPhone,
        display both phones’ names,
        add a new phone at the beginning of the array,
        remove the last element of the array
*/
let products = [
    {
        name: "iPhone",
        price: 799.99
    },
    {
        name: "Samsung Galaxy S10",
        price: 900.00
    }
];

let newPhone = {
  name: "Fairphone",
  price: 250
};

products.unshift(newPhone);
products.pop();

console.log(products[0].price);
console.log(products[0].name, products[1].name);
console.log(products);
