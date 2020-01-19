// function maxOfTwoNumbers(a, b) {
//     return (a > b ? a : b);
// };

// console.log(maxOfTwoNumbers(7,8));
// console.log(maxOfTwoNumbers(9,9));

// const words = [
//     'mystery',
//     'brother',
//     'aviator',
//     'crocodile',
//     'pearl',
//     'orchard',
//     'crackpot'
//   ];
//   function findLongestWord(arr) {
//       let longestWord = arr[0];
//       for (let word of arr){
//           if (word.length > longestWord.length) {
//               longestWord = word;
//               return longestWord;
//           }
//       }
//   }; 
//   console.log(findLongestWord(words));


// const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// function sumArray(arr) {
//     let number = 0;
//     for (let el of arr){
//         number += el;       
//     }
//     return number; 
// }
// console.log(sumArray(numbers));

// const wordsUnique = [
//     'crab',
//     'poison',
//     'contagious',
//     'simple',
//     'bring',
//     'sharp',
//     'playground',
//     'poison',
//     'communion',
//     'simple',
//     'bring'
//   ];

//   function uniquifyArray(arr) {
//       let uniqueArr = [];
//       for (i = 0; i < arr.length; i++){
//           let word = arr[i];
//           if (uniqueArr.indexOf(word) < 0) {
//               uniqueArr.push(word);
//           }
//       }
//       return uniqueArr;
//   }

//   console.log(uniquifyArray(wordsUnique));