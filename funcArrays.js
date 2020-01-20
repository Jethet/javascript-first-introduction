function maxOfTwoNumbers(a, b) {
    return (a > b ? a : b);
};


const words = [
    'mystery',
    'brother',
    'aviator',
    'crocodile',
    'pearl',
    'orchard',
    'crackpot'
  ];
  function findLongestWord(arr) {
      let longestWord = arr[0];
      for (let word of arr){
          if (word.length > longestWord.length) {
              longestWord = word;
              return longestWord;
          }
      }
  }; 
  console.log(findLongestWord(words));


const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumArray(arr) {
    let number = 0;
    for (let el of arr){
        number += el;       
    }
    return number; 
}
console.log(sumArray(numbers));

const wordsUnique = [
    'crab',
    'poison',
    'contagious',
    'simple',
    'bring',
    'sharp',
    'playground',
    'poison',
    'communion',
    'simple',
    'bring'
  ];

  function uniquifyArray(arr) {
      let uniqueArr = [];
      for (i = 0; i < arr.length; i++){
          let word = arr[i];
          if (uniqueArr.indexOf(word) < 0) {
              uniqueArr.push(word);
          }
      }
      return uniqueArr;
  }

  console.log(uniquifyArray(wordsUnique));

const wordsFind = [
    'machine',
    'subset',
    'trouble',
    'starting',
    'matter',
    'eating',
    'truth',
    'disobedience'
  ];

function doesWordExist(arr, word) {
    for (let i = 0; i < arr.length; i++) {
        return arr.includes(word)
        }
}

console.log(doesWordExist(wordsFind, 'never'));

const wordsCount = [
    'machine',
    'matter',
    'subset',
    'trouble',
    'starting',
    'matter',
    'eating',
    'matter',
    'truth',
    'disobedience',
    'matter'
  ];
  
function howManyTimes(arr, word) {
    let count = 0;
    for (let el of arr) {
        if (el === word) {
        count++;
        };
    }
    return count;
}

console.log(howManyTimes(wordsCount, 'matter'));

// PUSH, POP, SLICE (= begin value plus value for how many values need to be sliced)

let employees = ['Bob', 'Sarah', 'Anna', 'Martha', 'John', 'Ben', 'Nidia'];
employees.push('Adriana', 'Gabriel', 'Mia');

let mia = employees.pop();

let managers = employees.splice(3, 1)

managers[1] = employees.splice(1, 1);
console.log(managers);

// REDUCE reduces a list of values to a total etc.

const people = [
    { name: "Candice", age: 25 },
    { name: "Tammy",   age: 30 },
    { name: "Allen",   age: 49 },
    { name: "Nettie",  age: 21 },
    { name: "Stuart",  age: 17 }
  ];
  
const ageTotal = people.reduce((sum, person) => {
    const updatedTotal = sum + person.age
    return updatedTotal; 
  }, 0);
  
  console.log(ageTotal);

// wordsArray.indexOf('example') ==> gives index of word in an array

// REST : rest parameter gathers remaining parameters into an array
// function add(...numbers) means that any array with numbers can be passed in
